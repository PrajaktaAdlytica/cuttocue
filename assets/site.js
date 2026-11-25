(() => {
 const byId = id => document.getElementById(id);
 const toggles = [...document.querySelectorAll('[data-menu]')];
 function closeMenus() {
  for (const btn of toggles) { btn.setAttribute('aria-expanded','false'); byId(btn.dataset.menu).hidden = true; }
 }
 toggles.forEach(btn => btn.addEventListener('click', () => {
  const show = byId(btn.dataset.menu).hidden;
  closeMenus();
  btn.setAttribute('aria-expanded', String(show));
  byId(btn.dataset.menu).hidden = !show;
 }));
 document.addEventListener('click', e => { if (!e.target.closest('.sitehead')) closeMenus(); });
 document.addEventListener('keydown', e => { if (e.key === 'Escape') {const btn=toggles.find(t=>t.getAttribute('aria-expanded')==='true');closeMenus();btn?.focus();} });
 const page = location.pathname.split('/').pop().replace('.html','') || 'index';
 const header = document.querySelector('.sitehead');
 header.querySelectorAll('a[href]').forEach(link => {
  if (link.getAttribute('href') === page + '.html') link.setAttribute('aria-current', 'page');
 });
 header.addEventListener('focusout', e => {
  const open = toggles.find(btn => btn.getAttribute('aria-expanded') === 'true');
  if (open && e.relatedTarget && open !== e.relatedTarget && !byId(open.dataset.menu).contains(e.relatedTarget)) closeMenus();
 });
 matchMedia('(max-width: 1000px)').addEventListener('change', closeMenus);
 function count(event) {
  try { const data=JSON.parse(localStorage.getItem('cueToCueMetrics') || '{}');data[event]=(data[event]||0)+1;localStorage.setItem('cueToCueMetrics',JSON.stringify(data)); } catch {}
 }
 if (['cue-import','cue-change-review','credit-check','cue-sheet-export'].includes(page)) count('offer_view/'+page);
 if (page==='walkthrough') count('demo_start');
 document.addEventListener('click', e => {if(e.target.closest('a[href="pilot.html"]'))count('pilot_cta');if(e.target.closest('#decide,#confirmCredit,#approveSheet'))count('reviewer_interaction');});
 function download(name, contents, type) {
  const url=URL.createObjectURL(new Blob([contents],{type}));
  const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
 }
 document.querySelectorAll('[data-intake]').forEach(form => form.addEventListener('submit',e=>{
  e.preventDefault();const fields=Object.fromEntries(new FormData(form));
  const kind=form.dataset.intake;
  download('CueToCue-'+kind+'-draft.txt','CueToCue · Local '+kind+' draft\n\n'+Object.entries(fields).map(([k,v])=>k+' · '+v).join('\n'),'text/plain');
  form.querySelector('output').textContent='Your local copy is ready. No message was sent.';
  count('draft_prepared/'+kind);
 }));
 const request=byId('referenceRequest');
 if(request){request.onclick=()=>{request.disabled=true;request.textContent='Reference requested';byId('requested').textContent='Simulated request recorded for Eda Wynn. Episode 105 remains open.';};}
 if(!byId('release')) return;
 let release={credit:false,approved:false};
 try{release=JSON.parse(localStorage.getItem('cueToCueRelease')||'null')||release;}catch{}
 function update() {
  if(!state.timing||!release.credit)release.approved=false;
  try{localStorage.setItem('cueToCueRelease',JSON.stringify(release));}catch{}
  const status=byId('releaseState');
  status.textContent=release.approved?'✓ Episode approved · Fictional example':release.credit&&state.timing?'Ready for coordinator approval':release.credit?'! Episode held · Q12 timing review':'! Episode held · Q13 composer credit';
  status.className='tag'+(release.approved?'':' open');
  byId('confirmCredit').disabled=release.credit;
  byId('confirmCredit').textContent=release.credit?'Corrected credit confirmed':'Confirm corrected credit';
  byId('approveSheet').disabled=!release.credit||!state.timing||release.approved;
  byId('getSheet').hidden=!release.approved;
  byId('gate').textContent=release.approved?'Ren Vale approved this example for download. Nothing has been submitted.':status.textContent;
  if(sel===2&&release.credit){
   byId('status').textContent='✓ Credit confirmed · CAT-13';byId('status').className='tag';
   byId('decide').textContent='Corrected source confirmed';byId('decide').disabled=true;byId('sources').innerHTML='CAT-13 · 09 Nov 2026<br>R-091 · Lio Arden<br>Publisher · Salt Banner Music';byId('feedback').textContent='Ren Vale checked the revised catalog entry.';byId('finding').textContent='CAT-13 supplies the missing composer for R-091 Piano. The credit is confirmed against the updated source.';
  }
  if(sel===1&&state.timing&&release.credit)byId('feedback').textContent='Ren Vale confirmed the 11-second duration.';
 }
 byId('confirmCredit').onclick=()=>{release.credit=true;update();};
 byId('approveSheet').onclick=()=>{if(release.credit&&state.timing){release.approved=true;update();}};
 byId('getSheet').onclick=()=>{
  if(!release.approved)return;
  const rows=[['Label','Episode','Cue','Title','Recording','In','Out','Seconds','Composer','Publisher','Reviewer','Status'],...record.cues.map(q=>['DEMO · SIMULATED DATA','NF104',q.cue_id,q.title,q.new.recording_id,q.new.timecode_in,q.new.timecode_out_exclusive,q.new.duration_seconds,q.cue_id==='Q13'?'Lio Arden':q.new.composer,q.new.publisher,'Ren Vale','Approved fictional example'])];
  download('CueToCue-NF104-demo-approved.csv',rows.map(r=>r.map(v=>'"'+String(v).replaceAll('"','""')+'"').join(',')).join('\r\n'),'text/csv');
 };
 byId('download').onclick=()=>{
  const out=JSON.parse(JSON.stringify(record));
  if(!state.timing)Object.assign(out.cues[1],{decision:'Awaiting timing review',decision_at:null,history:[],next_action:'Verify out-point',cue_status:'open'});
  if(state.requested)out.cues[2].history.push({actor:'Ren Vale',action:'Requested corrected credit (simulated)',date:'2026-11-08'});
  if(release.credit){out.sources.push({source_id:'CAT-13',type:'corrected demo catalog',version:'13',date:'2026-11-09',permission_scope:'Fictional public preview'});const q=out.cues[2];q.new.composer='Lio Arden';q.source_ids.push('CAT-13');Object.assign(q,{unresolved_gap:null,decision:'Credit confirmed',decision_at:'2026-11-09',next_action:'None',cue_status:'eligible'});q.history.push({actor:'Ren Vale',action:'Confirmed corrected source CAT-13',date:'2026-11-09'});}
  out.blocking_cue_ids=out.cues.filter(q=>q.cue_status!=='eligible').map(q=>q.cue_id);out.case_export_status=release.approved?'approved':out.blocking_cue_ids.length?'held':'awaiting_coordinator_approval';out.approval_actor=release.approved?'Ren Vale':null;out.approval_time=release.approved?'2026-11-09':null;
  download('CueToCue-NF104-fictional-review.json',JSON.stringify(out,null,2),'application/json');
 };
 byId('reset').addEventListener('click',()=>{release={credit:false,approved:false};update();});
 byId('decide').addEventListener('click',update);byId('cues').addEventListener('click',update);
 if(location.hash==='#credit'){sel=2;render();byId('review').scrollIntoView();}
 if(location.hash==='#release')byId('release').open=true;
 update();
})();
