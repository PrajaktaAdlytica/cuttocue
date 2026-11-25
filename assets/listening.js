
const peak=[0.0102, 0.0246, 0.0363, 0.0455, 0.0537, 0.0629, 0.073, 0.0815, 0.0967, 0.0991, 0.1077, 0.1076, 0.1151, 0.1151, 0.1231, 0.1272, 0.1297, 0.1268, 0.1283, 0.133, 0.1341, 0.1326, 0.1279, 0.1276, 0.1286, 0.1257, 0.1235, 0.119, 0.1195, 0.1156, 0.1134, 0.1089, 0.109, 0.1061, 0.1035, 0.099, 0.0989, 0.096, 0.0829, 0.0781, 0.0758, 0.0736, 0.0731, 0.072, 0.0682, 0.0681, 0.0662, 0.0677, 0.0634, 0.0621, 0.062, 0.0617, 0.0609, 0.0571, 0.0574, 0.0566, 0.0573, 0.0534, 0.0518, 0.0517, 0.0519, 0.0515, 0.0487, 0.0484, 0.0477, 0.0472, 0.045, 0.0443, 0.0463, 0.0664, 0.0651, 0.0614, 0.0581, 0.0549, 0.0515, 0.049, 0.0462, 0.0442, 0.0423, 0.0399, 0.0374, 0.037, 0.0363, 0.034, 0.0321, 0.0314, 0.0313, 0.0306, 0.0289, 0.0278, 0.0271, 0.0274, 0.0263, 0.0254, 0.0242, 0.0283, 0.0306, 0.0448, 0.0536, 0.0644, 0.0845, 0.0927, 0.0924, 0.0936, 0.1055, 0.1056, 0.1098, 0.1095, 0.1198, 0.1151, 0.1282, 0.1212, 0.1302, 0.1237, 0.1289, 0.1236, 0.1357, 0.118, 0.13, 0.121, 0.1208, 0.1141, 0.121, 0.1117, 0.1174, 0.1069, 0.1065, 0.1039, 0.103, 0.1019, 0.1123, 0.1054, 0.1067, 0.0997, 0.0935, 0.0962, 0.0896, 0.0885, 0.0846, 0.0812, 0.0774, 0.0788, 0.0727, 0.0771, 0.0692, 0.0705, 0.0671, 0.0661, 0.0615, 0.0666, 0.0605, 0.0615, 0.0581, 0.0564, 0.0538, 0.0576, 0.0518, 0.0539, 0.0508, 0.0495, 0.0529, 0.0677, 0.0649, 0.0612, 0.0565, 0.0545, 0.0499, 0.0487, 0.0453, 0.0459, 0.0421, 0.0416, 0.0392, 0.0381, 0.0362, 0.0366, 0.0349, 0.0352, 0.0326, 0.0316, 0.0307, 0.0303, 0.0301, 0.0296, 0.0279, 0.0276, 0.0265, 0.0253, 0.026, 0.0254, 0.0269, 0.0528, 0.0656, 0.0711, 0.0683, 0.0783, 0.081, 0.0898, 0.0922, 0.0945, 0.1042, 0.1088, 0.11, 0.1132, 0.1232, 0.1234, 0.1267, 0.1265, 0.1312, 0.1268, 0.129, 0.1302, 0.1306, 0.1281, 0.1234, 0.1255, 0.1212, 0.12, 0.1174, 0.1193, 0.1123, 0.1079, 0.1218, 0.1158, 0.1121, 0.11, 0.1073, 0.0991, 0.1023, 0.0943, 0.0959, 0.09, 0.0899, 0.086, 0.084, 0.0785, 0.0808, 0.0766, 0.0757, 0.0745, 0.0718, 0.0679, 0.0668, 0.0643, 0.066, 0.0622, 0.0621, 0.0595, 0.0577, 0.0556, 0.0545, 0.0534, 0.0554, 0.057, 0.0541, 0.0519, 0.0488, 0.0472, 0.0449, 0.042, 0.0407, 0.0395, 0.0384, 0.0364, 0.0375, 0.0354, 0.0339, 0.0332, 0.0328, 0.0316, 0.0309, 0.0312, 0.0303, 0.0295, 0.0286, 0.0283, 0.0272, 0.0267, 0.0263, 0.0268, 0.0256, 0.0248, 0.0251, 0.0513, 0.0564, 0.0537, 0.0547, 0.0585, 0.0609, 0.0649, 0.0715, 0.0785, 0.0806, 0.0854, 0.0903, 0.1011, 0.1038, 0.1048, 0.1109, 0.1114, 0.121, 0.1192, 0.133, 0.1205, 0.1309, 0.1248, 0.1265, 0.1233, 0.1238, 0.1192, 0.1212, 0.117, 0.1201, 0.1181, 0.1209, 0.1271, 0.1085, 0.1156, 0.1095, 0.1112, 0.0953, 0.1063, 0.095, 0.1026, 0.0871, 0.0952, 0.0828, 0.0882, 0.0824, 0.0866, 0.0745, 0.0818, 0.0737, 0.0767, 0.0715, 0.0707, 0.067, 0.0677, 0.0649, 0.0657, 0.0641, 0.0596, 0.0614, 0.0558, 0.0804, 0.0856, 0.0883, 0.0758, 0.0794, 0.0674, 0.0741, 0.0605, 0.0649, 0.0555, 0.0586, 0.0523, 0.0543, 0.0471, 0.0503, 0.0435, 0.0469, 0.0427, 0.0414, 0.0395, 0.0389, 0.037, 0.037, 0.0351, 0.0308, 0.028, 0.0237, 0.022, 0.0172, 0.0156, 0.0121, 0.0102, 0.0074, 0.0056, 0.0029, 0.0012],record={
  "brand": "CueToCue",
  "demo_label": "DEMO · SIMULATED DATA",
  "example_only": true,
  "record_type": "fictional_review_record",
  "case_id": "NF104",
  "episode_id": "North Ferry 104",
  "old_cut": "07",
  "new_cut": "08",
  "timebase": {
    "fps": 24,
    "drop_frame": false,
    "out_point": "exclusive"
  },
  "sources": [
    {
      "source_id": "PIC-104-07",
      "type": "earlier picture",
      "version": "07",
      "date": "2026-11-03",
      "permission_scope": "Fictional reference for local public walkthrough only"
    },
    {
      "source_id": "SHEET-104-07",
      "type": "approved sheet",
      "version": "07",
      "date": "2026-11-03",
      "permission_scope": "Fictional reference for local public walkthrough only"
    },
    {
      "source_id": "PIC-104-08",
      "type": "later picture",
      "version": "08",
      "date": "2026-11-06",
      "permission_scope": "Fictional reference for local public walkthrough only"
    },
    {
      "source_id": "LIST-104-08",
      "type": "editor music list",
      "version": "08",
      "date": "2026-11-06",
      "permission_scope": "Fictional reference for local public walkthrough only"
    },
    {
      "source_id": "CAT-12",
      "type": "authorized demo catalog",
      "version": "12",
      "date": "2026-11-05",
      "permission_scope": "Fictional reference for local public walkthrough only"
    }
  ],
  "cues": [
    {
      "demo_label": "DEMO · SIMULATED DATA",
      "cue_id": "Q11",
      "title": "Harbor Steps",
      "old": {
        "timecode_in": "01:02:10:00",
        "timecode_out_exclusive": "01:02:22:00",
        "duration_frames": 288,
        "duration_seconds": 12,
        "recording_id": "R-021",
        "work_id": "W-08",
        "composer": "Oli Fern",
        "publisher": "Brass Buoy Editions"
      },
      "new": {
        "timecode_in": "01:02:14:00",
        "timecode_out_exclusive": "01:02:26:00",
        "duration_frames": 288,
        "duration_seconds": 12,
        "recording_id": "R-021",
        "work_id": "W-08",
        "composer": "Oli Fern",
        "publisher": "Brass Buoy Editions"
      },
      "source_ids": [
        "PIC-104-07",
        "SHEET-104-07",
        "PIC-104-08",
        "LIST-104-08",
        "CAT-12"
      ],
      "evidence_locator": "Q11",
      "proposed_finding": "Entrance moves four seconds later",
      "evidence_summary": "Both boundaries move 96 frames. Recording ID and duration match.",
      "unresolved_gap": null,
      "assignee": "Ren Vale",
      "authorized_reviewer": "Ren Vale",
      "decision": "Timing confirmed",
      "decision_at": "2026-11-07",
      "history": [
        {
          "actor": "Ren Vale",
          "action": "Timing confirmed",
          "date": "2026-11-07"
        }
      ],
      "next_action": "None",
      "cue_status": "eligible"
    },
    {
      "demo_label": "DEMO · SIMULATED DATA",
      "cue_id": "Q12",
      "title": "Low Water",
      "old": {
        "timecode_in": "01:08:10:00",
        "timecode_out_exclusive": "01:08:28:00",
        "duration_frames": 432,
        "duration_seconds": 18,
        "recording_id": "R-044",
        "work_id": "W-12",
        "composer": "Ida Reed",
        "publisher": "Brass Buoy Editions"
      },
      "new": {
        "timecode_in": "01:08:10:00",
        "timecode_out_exclusive": "01:08:21:00",
        "duration_frames": 264,
        "duration_seconds": 11,
        "recording_id": "R-044",
        "work_id": "W-12",
        "composer": "Ida Reed",
        "publisher": "Brass Buoy Editions"
      },
      "source_ids": [
        "PIC-104-07",
        "SHEET-104-07",
        "PIC-104-08",
        "LIST-104-08",
        "CAT-12"
      ],
      "evidence_locator": "Q12",
      "proposed_finding": "Same recording, earlier out-point",
      "evidence_summary": "Identical entrance. Later picture and editor list agree on the new out-point, 168 frames earlier.",
      "unresolved_gap": null,
      "assignee": "Ren Vale",
      "authorized_reviewer": "Ren Vale",
      "decision": "Timing confirmed",
      "decision_at": "2026-11-08",
      "history": [
        {
          "actor": "Ren Vale",
          "action": "Timing confirmed",
          "date": "2026-11-08"
        }
      ],
      "next_action": "None",
      "cue_status": "eligible"
    },
    {
      "demo_label": "DEMO · SIMULATED DATA",
      "cue_id": "Q13",
      "title": "The Glass Line",
      "old": {
        "timecode_in": "01:14:02:00",
        "timecode_out_exclusive": "01:14:18:00",
        "duration_frames": 384,
        "duration_seconds": 16,
        "recording_id": "R-090",
        "work_id": "W-19",
        "composer": "Lio Arden",
        "publisher": "Salt Banner Music"
      },
      "new": {
        "timecode_in": "01:14:02:00",
        "timecode_out_exclusive": "01:14:18:00",
        "duration_frames": 384,
        "duration_seconds": 16,
        "recording_id": "R-091",
        "work_id": "W-19",
        "composer": null,
        "publisher": "Salt Banner Music"
      },
      "source_ids": [
        "PIC-104-07",
        "SHEET-104-07",
        "PIC-104-08",
        "LIST-104-08",
        "CAT-12"
      ],
      "evidence_locator": "Q13",
      "proposed_finding": "Full Mix replaced with Piano",
      "evidence_summary": "The later list identifies R-091. The prior sheet cites R-090. CAT-12 lacks the required composer entry on the replacement.",
      "unresolved_gap": "Composer missing for R-091 in CAT-12",
      "assignee": "Eda Wynn",
      "authorized_reviewer": "Ren Vale",
      "decision": "Kept open for an authorized credit source",
      "decision_at": "2026-11-07",
      "history": [
        {
          "actor": "Ren Vale",
          "action": "Kept open for an authorized credit source",
          "date": "2026-11-07"
        }
      ],
      "next_action": "Obtain approved composer entry for R-091",
      "cue_status": "held"
    }
  ],
  "case_export_status": "held",
  "blocking_cue_ids": [
    "Q13"
  ],
  "approval_actor": null,
  "approval_time": null,
  "submitted": false
}
;const el=id=>document.getElementById(id);const audio=el('audio');let cut='B',pos=9,sel=1,frame=0,working=false;let state={timing:false,requested:false};
try{const s=JSON.parse(localStorage.getItem('cueToCueListening01'));if(s)state={timing:s.timing===true,requested:s.requested===true}}catch{}
function save(){try{localStorage.setItem('cueToCueListening01',JSON.stringify(state))}catch{}}
function wave(id,short){const cv=el(id),r=cv.getBoundingClientRect(),dpr=Math.min(2,window.devicePixelRatio||1);cv.width=r.width*dpr;cv.height=r.height*dpr;const x=cv.getContext('2d');x.scale(dpr,dpr);let end=short?11/18:1;x.fillStyle=short?'#435a40':'#394a37';x.fillRect(0,0,r.width*end,r.height);x.fillStyle=short?'#bcdf9f':'#9db994';for(let i=0;i<peak.length*end;i++){const v=peak[i]*r.height*2.2+1;x.fillRect(i*r.width/peak.length,(r.height-v)/2,Math.max(1,r.width/peak.length*.65),v)}}
function waves(){wave('wa',false);wave('wb',true)}new ResizeObserver(waves).observe(el('wa').parentElement);
function choose(which){cut=which;el('A').setAttribute('aria-pressed',which==='A');el('B').setAttribute('aria-pressed',which==='B');draw()}
function draw(){audio.muted=cut==='B'&&pos>=11;el('seek').value=pos;el('seek').setAttribute('aria-valuetext',pos.toFixed(2)+' seconds');document.querySelector('.plot').style.setProperty('--pos',pos/18*100+'%');let n=Math.min(432,Math.floor(pos*24+.00001));el('tc').textContent='01:08:'+String(10+Math.floor(n/24)).padStart(2,'0')+':'+String(n%24).padStart(2,'0');el('elapsed').textContent=pos.toFixed(2).padStart(5,'0')+' / 18 s';el('signal').textContent='Cut '+(cut==='A'?'07':'08')+' · '+(audio.muted?'Music has ended':audio.paused?'Paused':'Score playing');el('play').textContent=audio.paused?'▶':'Ⅱ';el('play').setAttribute('aria-label',audio.paused?'Play selected cut':'Pause selected cut')}
function seek(t){pos=Math.min(18,Math.max(0,t));try{audio.currentTime=pos}catch{}draw()}
function tick(){pos=audio.currentTime;draw();if(!audio.paused)frame=requestAnimationFrame(tick)}
async function start(){if(working)return;working=true;try{seek(pos>=17.99?0:pos);await audio.play();cancelAnimationFrame(frame);tick()}catch{el('signal').textContent='Playback unavailable · inspect the two ranges'}finally{working=false}}
el('listen').onclick=()=>{choose('B');seek(9);start();el('desk').scrollIntoView({block:'center',behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'})};el('jump').onclick=()=>seek(10.5);el('A').onclick=()=>choose('A');el('B').onclick=()=>choose('B');el('play').onclick=()=>audio.paused?start():audio.pause();el('seek').oninput=e=>seek(+e.target.value);audio.onpause=()=>{cancelAnimationFrame(frame);pos=audio.currentTime;draw()};audio.onended=()=>{pos=18;draw()};audio.onloadedmetadata=()=>seek(pos);document.addEventListener('visibilitychange',()=>{if(document.hidden)audio.pause()});
const find=['The entrance moved four seconds later. Both cuts still use twelve seconds of the same recording.','The AI suggestion matches recording R-044 in both cuts. The entrance stays fixed. Check the revised out-point against the editor’s list.','The editor’s list identifies the piano recording. Its catalog entry has a publisher but leaves the composer field empty.'];
const subtitles=['Moved · +4 s','Shortened · −7 s','Recording · credit open'];
function render(){const q=record.cues[sel];el('cues').replaceChildren(...record.cues.map((v,i)=>{const b=document.createElement('button');b.className='cue'+(i===sel?' active':'');b.innerHTML='<b>'+v.title+'</b><span>'+subtitles[i]+'</span>';b.setAttribute('aria-pressed',i===sel);b.onclick=()=>{sel=i;render();el('cues').children[i].focus({preventScroll:true})};return b}));el('cid').textContent=q.cue_id+' / Proposed finding';el('name').textContent=q.title;el('finding').textContent=find[sel];el('graphic').innerHTML=sel===2?'<div class="mini"><b>Cut 07</b><span>R-090 · Full Mix</span><b>Cut 08</b><span>R-091 · Piano</span></div>':'<div class="mini">'+['old','new'].map((v,i)=>'<b>Cut 0'+(i+7)+'</b><div class="line"><div class="bar" style="margin-left:'+(sel===0&&i?25:0)+'%;width:'+(sel===0?75:(i?61.111:100))+'%"></div></div>').join('')+'</div>';el('values').innerHTML=['old','new'].map((v,i)=>'0'+(i+7)+' &nbsp; '+q[v].timecode_in+' → '+q[v].timecode_out_exclusive).join('<br>');el('status').textContent=sel===2?'! Composer source needed':sel===0||state.timing?'✓ Timing confirmed':'Awaiting timing review';el('status').className='tag'+(sel===2?' open':'');el('sources').innerHTML=sel===2?'LIST-104-08 · 06 Nov 2026<br>CAT-12 · 05 Nov 2026<br>R-091 · Composer missing':'SHEET-104-07 · 03 Nov 2026<br>PIC-104-08 · 06 Nov 2026<br>LIST-104-08 · 06 Nov 2026';el('decide').textContent=sel===0||sel===1&&state.timing?'Timing confirmed':sel===1?'Confirm 11-second timing':state.requested?'Source request recorded':'Request composer source';el('decide').disabled=sel===0||sel===1&&state.timing||sel===2&&state.requested;el('feedback').textContent=sel===2?(state.requested?'Local request recorded. Eda Wynn owns the follow-up.':'Eda Wynn to obtain the authorized credit.'):sel===1&&state.timing?'Ren Vale confirmed the timing. Q13 still holds the sheet.':'Ren Vale · Music reporting coordinator'}
el('decide').onclick=()=>{if(sel===1)state.timing=true;if(sel===2)state.requested=true;save();render()};el('reset').onclick=()=>{state={timing:false,requested:false};save();render()};el('download').onclick=()=>{const out=JSON.parse(JSON.stringify(record));if(!state.timing){Object.assign(out.cues[1],{decision:'Awaiting timing review',decision_at:null,history:[],next_action:'Verify the revised out-point',cue_status:'open'});out.blocking_cue_ids=['Q12','Q13']}else{out.cues[1].history=[{actor:'Ren Vale',action:'Timing confirmed in local demo',date:'2026-11-08'}]}if(state.requested)out.cues[2].history.push({actor:'Ren Vale',action:'Requested composer source from Eda Wynn in local demo',date:'2026-11-08'});const url=URL.createObjectURL(new Blob([JSON.stringify(out,null,2)],{type:'application/json'})),a=document.createElement('a');a.href=url;a.download='CueToCue-NF104-fictional-review.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),5000)};
render();draw();
