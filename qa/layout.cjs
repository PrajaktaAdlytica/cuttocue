const { chromium } = require('playwright');
const fs = require('node:fs');
const path = require('node:path');

async function run() {
  const browser = await chromium.launch({channel: 'chrome', headless: true});
  try {
    const page = await browser.newPage({reducedMotion: 'reduce'});
    const pages = fs.readdirSync(path.resolve(__dirname, '..')).filter(name => name.endsWith('.html'));
    const issues = [];
    page.on('pageerror', error => issues.push(error.message));
    for (const width of [320, 390, 768, 1024, 1440]) {
      await page.setViewportSize({width, height: 850});
      for (const file of pages) {
        await page.goto('http://127.0.0.1:8000/' + file);
        await page.evaluate(() => document.fonts.ready);
        const problems = await page.evaluate(() => {
          const result = [];
          if (document.documentElement.scrollWidth > innerWidth + 1) {
            const outside = [...document.querySelectorAll('body *')].filter(e => {
              return !e.closest('.sky-layer, svg') && e.getBoundingClientRect().right > innerWidth + 1;
            }).slice(0, 8).map(e => e.tagName + '.' + e.className);
            result.push('Horizontal overflow: ' + outside.join(', '));
          }
          const nav = [...document.querySelectorAll('.sitehead > .brand,.desktopnav,.nav-actions,.menuBtn')]
            .filter(e => e.offsetWidth).map(e => e.getBoundingClientRect());
          if (nav.some((r, i) => i && r.left < nav[i - 1].right - 1)) result.push('Overlapping header items');
          return result;
        });
        issues.push(...problems.map(message => width + ' ' + file + ' ' + message));
      }
    }
    if (issues.length) throw new Error(issues.join('\n'));
    console.log(pages.length + ' pages passed at five viewport widths.');
  } finally {
    await browser.close();
  }
}
run().catch(error => { console.error(error); process.exitCode = 1; });
