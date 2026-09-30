(function(){
if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;
var c=document.createElement('canvas');c.style.cssText='position:fixed;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:0';document.body.insertBefore(c,document.body.firstChild);
var x=c.getContext('2d'),W,H,D,drops=[];
function mk(init){return{x:Math.random()*(W+240)-120,y:init?Math.random()*H:-20,l:6+Math.random()*9,s:10+Math.random()*9,a:.12+Math.random()*.35}}
function size(){D=Math.min(window.devicePixelRatio||1,2);W=innerWidth;H=innerHeight;c.width=W*D;c.height=H*D;x.setTransform(D,0,0,D,0,0);var n=Math.min(260,Math.round(W*H/8000));while(drops.length<n)drops.push(mk(true));drops.length=n}
size();addEventListener('resize',size);
var last=performance.now();
function f(t){
var dt=Math.min((t-last)/16.7,3);last=t;
var wind=Math.sin(t/7000)*4+Math.sin(t/2300);
x.clearRect(0,0,W,H);x.lineCap='round';x.lineWidth=1.2;
for(var i=0;i<drops.length;i++){
var d=drops[i],vx=wind*(d.s/14);
d.x+=vx*dt;d.y+=d.s*dt;
if(d.y>H+20||d.x<-130||d.x>W+130){drops[i]=mk(false);continue}
var k=d.l/d.s;
x.strokeStyle='rgba(170,215,235,'+d.a+')';
x.beginPath();x.moveTo(d.x,d.y);x.lineTo(d.x-vx*k,d.y-d.s*k);x.stroke()}
requestAnimationFrame(f)}
requestAnimationFrame(f)})();
