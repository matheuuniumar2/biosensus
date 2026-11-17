const datasets = {
  '03': [
    ['13/Mai - 14:30','28.4 °C','62%','8.2 km/h','720 W/m²','1.8 kPa','FAVORÁVEL'],
    ['13/Mai - 12:00','30.1 °C','58%','11.0 km/h','890 W/m²','2.1 kPa','ALERTA'],
    ['13/Mai - 09:30','26.2 °C','68%','6.5 km/h','510 W/m²','1.4 kPa','FAVORÁVEL'],
    ['12/Mai - 16:00','29.8 °C','55%','9.0 km/h','640 W/m²','2.3 kPa','ESTRESSE'],
    ['12/Mai - 13:30','31.5 °C','49%','12.4 km/h','920 W/m²','2.6 kPa','ESTRESSE'],
    ['12/Mai - 11:00','27.9 °C','60%','7.1 km/h','780 W/m²','1.9 kPa','FAVORÁVEL']
  ],
  '04': [
    ['13/Mai - 14:30','27.2 °C','66%','7.4 km/h','690 W/m²','1.6 kPa','FAVORÁVEL'],
    ['13/Mai - 12:00','29.4 °C','60%','10.2 km/h','850 W/m²','2.0 kPa','ALERTA'],
    ['13/Mai - 09:30','25.8 °C','71%','5.8 km/h','490 W/m²','1.2 kPa','FAVORÁVEL'],
    ['12/Mai - 16:00','28.9 °C','57%','8.7 km/h','620 W/m²','2.0 kPa','FAVORÁVEL'],
    ['12/Mai - 13:30','30.2 °C','52%','11.8 km/h','900 W/m²','2.4 kPa','ALERTA']
  ],
  '05': [
    ['13/Mai - 14:30','30.8 °C','54%','9.1 km/h','760 W/m²','2.2 kPa','ALERTA'],
    ['13/Mai - 12:00','32.0 °C','48%','12.0 km/h','940 W/m²','2.7 kPa','ESTRESSE'],
    ['13/Mai - 09:30','27.1 °C','65%','6.0 km/h','530 W/m²','1.5 kPa','FAVORÁVEL'],
    ['12/Mai - 16:00','31.0 °C','51%','9.8 km/h','670 W/m²','2.4 kPa','ESTRESSE']
  ],
  '06': [
    ['13/Mai - 14:30','26.9 °C','70%','7.0 km/h','710 W/m²','1.5 kPa','FAVORÁVEL'],
    ['13/Mai - 12:00','29.1 °C','63%','10.0 km/h','880 W/m²','1.9 kPa','FAVORÁVEL'],
    ['13/Mai - 09:30','24.8 °C','75%','5.2 km/h','500 W/m²','1.1 kPa','FAVORÁVEL'],
    ['12/Mai - 16:00','28.7 °C','59%','8.5 km/h','650 W/m²','2.0 kPa','ALERTA']
  ]
};
const plotNames = {'03':'Talhão 03','04':'Talhão 04','05':'Talhão 05','06':'Talhão 06'};
const plotInfo = {'03':'Soja | V5 | 42,5 ha','04':'Soja | V3 | 38,2 ha','05':'Milho | V6 | 56,7 ha','06':'Soja | R1 | 29,4 ha'};
let selectedPlot = '03';
let selectedDays = 7;
let customDates = false;
const body = document.getElementById('readingsBody');
const search = document.getElementById('searchInput');
const canvas = document.getElementById('historyChart');
const ctx = canvas.getContext('2d');

function showToast(message){const toast=document.getElementById('toast');toast.textContent=message;toast.classList.add('show');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove('show'),2600)}
function renderTable(){
  const query=search.value.trim().toLocaleLowerCase('pt-BR');
  const rows=(datasets[selectedPlot]||[]).filter(row=>row.join(' ').toLocaleLowerCase('pt-BR').includes(query));
  body.innerHTML=rows.map(row=>{const status=row[6].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');return `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td>${row[3]}</td><td>${row[4]}</td><td>${row[5]}</td><td><span class="status ${status}">${row[6]}</span></td></tr>`}).join('');
  document.getElementById('rowCount').textContent=`${rows.length} ${rows.length===1?'registro':'registros'}`;
  document.getElementById('tableTitle').textContent=`Histórico de Leituras - ${plotNames[selectedPlot]}`;
}
function renderDate(){document.getElementById('dateLabel').textContent=selectedDays===7?'07/05/2026 - 13/05/2026':selectedDays===15?'29/04/2026 - 13/05/2026':'14/04/2026 - 13/05/2026'}
function drawChart(){
  const rect=canvas.getBoundingClientRect();const dpr=window.devicePixelRatio||1;canvas.width=Math.max(1,Math.floor(rect.width*dpr));canvas.height=Math.max(1,Math.floor(rect.height*dpr));ctx.setTransform(dpr,0,0,dpr,0,0);
  const w=rect.width,h=rect.height;ctx.clearRect(0,0,w,h);const pad={l:28,r:8,t:10,b:25};const cw=w-pad.l-pad.r,ch=h-pad.t-pad.b;
  ctx.font='9px Segoe UI, Arial';ctx.textBaseline='middle';
  for(let i=0;i<5;i++){const y=pad.t+ch*i/4;ctx.beginPath();ctx.strokeStyle='#223044';ctx.setLineDash([3,4]);ctx.moveTo(pad.l,y);ctx.lineTo(w-pad.r,y);ctx.stroke();ctx.setLineDash([]);ctx.fillStyle='#718198';ctx.textAlign='left';ctx.fillText(`${40-i*10}°C`,2,y)}
  const labels=selectedDays===7?['06/Mai','07/Mai','08/Mai','09/Mai','10/Mai','11/Mai','12/Mai','13/Mai']:selectedDays===15?['29/Abr','02/Mai','05/Mai','08/Mai','11/Mai','13/Mai']:['14/Abr','19/Abr','24/Abr','29/Abr','04/Mai','09/Mai','13/Mai'];
  labels.forEach((label,i)=>{const x=pad.l+cw*i/(labels.length-1);ctx.fillStyle='#718198';ctx.textAlign='center';ctx.fillText(label,x,h-9)});
  const sets=selectedPlot==='05'?[[18,23,16,25,29,21,26,16],[20,15,24,10,25,21,34,19],[14,28,24,31,17,19,8,22]]:selectedPlot==='04'?[[17,22,15,24,28,20,24,17],[19,16,23,12,24,20,32,18],[13,26,22,29,16,18,9,21]]:selectedPlot==='06'?[[16,20,14,22,25,19,23,16],[18,14,22,11,22,19,29,17],[12,24,21,27,15,17,8,20]]:[[18,23,16,25,29,21,26,16],[20,15,24,10,25,21,34,19],[14,28,24,31,17,19,8,22]];
  const colors=['#16c767','#ffad0a','#06c5df'];sets.forEach((data,s)=>{ctx.beginPath();ctx.strokeStyle=colors[s];ctx.lineWidth=1.7;ctx.lineJoin='round';ctx.lineCap='round';data.forEach((v,i)=>{const x=pad.l+cw*i/(data.length-1);const y=pad.t+ch*(1-(v/40));if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y)});ctx.stroke()});
}
function selectPlot(id){if(!datasets[id])return;selectedPlot=id;document.querySelectorAll('.plot').forEach(btn=>btn.classList.toggle('active',btn.dataset.plot===id));search.value='';renderTable();drawChart()}
document.querySelectorAll('.plot').forEach(btn=>btn.addEventListener('click',()=>selectPlot(btn.dataset.plot)));
document.querySelectorAll('.period[data-days]').forEach(btn=>btn.addEventListener('click',()=>{selectedDays=Number(btn.dataset.days);customDates=false;document.querySelectorAll('.period[data-days]').forEach(b=>b.classList.toggle('active',b===btn));document.getElementById('customPeriod').classList.remove('active');renderDate();drawChart()}));
document.getElementById('customPeriod').addEventListener('click',()=>{const start=prompt('Informe a data inicial (DD/MM/AAAA):','01/05/2026');if(!start)return;const end=prompt('Informe a data final (DD/MM/AAAA):','13/05/2026');if(!end)return;document.getElementById('dateLabel').textContent=`${start} - ${end}`;customDates=true;document.querySelectorAll('.period').forEach(b=>b.classList.remove('active'));document.getElementById('customPeriod').classList.add('active');showToast('Período personalizado aplicado à visualização.')});
search.addEventListener('input',renderTable);
document.getElementById('exportCsv').addEventListener('click',()=>{const rows=datasets[selectedPlot]||[];const csv=[['Data/Hora','Temperatura do ar','Umidade','Velocidade do vento','Radiação solar','VPD','Status'],...rows].map(r=>r.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(';')).join('\r\n');const blob=new Blob(['\ufeff'+csv],{type:'text/csv;charset=utf-8;'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`biosensus_historico_talhao_${selectedPlot}.csv`;document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);showToast('Relatório CSV exportado.')});
document.getElementById('newPlot').addEventListener('click',()=>showToast('O cadastro de novos talhões será implementado em uma próxima etapa.'));
const mobileMenu=document.getElementById('mobileMenu');
if(mobileMenu){mobileMenu.addEventListener('click',()=>document.querySelector('.nav-links')?.classList.toggle('open'));}
window.addEventListener('resize',drawChart);renderTable();renderDate();drawChart();
