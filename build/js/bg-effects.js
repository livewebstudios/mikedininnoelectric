/* bg-effects.js — BG02 Circuit Board · BG04 Voltage Sparks · BG05 Thermal Power
   Each function guards on its target element so unused pages don't error. */

document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('circuit-canvas'))   initCircuit();
  if (document.getElementById('sparks-container')) initSparks();
  if (document.getElementById('heat-nodes'))       initThermal();
});

function initCircuit() {
  const canvas = document.getElementById('circuit-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, nodes = [], lines = [], pulses = [];
  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    init();
  }
  function init() {
    nodes = []; lines = []; pulses = [];
    const cols = Math.floor(W / 80);
    const rows = Math.floor(H / 80);
    for (let r = 0; r <= rows; r++) {
      for (let c = 0; c <= cols; c++) {
        if (Math.random() > 0.35) {
          nodes.push({
            x: c * 80 + (Math.random() - 0.5) * 30,
            y: r * 80 + (Math.random() - 0.5) * 30,
            r: Math.random() > 0.8 ? 5 : 3
          });
        }
      }
    }
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const d  = Math.sqrt(dx*dx + dy*dy);
        if (d < 120 && Math.random() > 0.5) {
          lines.push({ a: i, b: j });
          if (Math.random() > 0.6) {
            pulses.push({ line: lines.length - 1, t: Math.random(), speed: 0.003 + Math.random() * 0.005 });
          }
        }
      }
    }
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    lines.forEach(l => {
      const a = nodes[l.a], b = nodes[l.b];
      const mx = (a.x + b.x) / 2;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(mx, a.y);
      ctx.lineTo(mx, b.y);
      ctx.lineTo(b.x, b.y);
      ctx.strokeStyle = 'rgba(57,255,20,0.12)';
      ctx.lineWidth = 1;
      ctx.stroke();
    });
    pulses.forEach(p => {
      const l  = lines[p.line];
      const a  = nodes[l.a], b = nodes[l.b];
      const mx = (a.x + b.x) / 2;
      const totalLen = Math.abs(mx - a.x) + Math.abs(b.y - a.y) + Math.abs(b.x - mx);
      const travel   = p.t * totalLen;
      let px, py;
      const seg1 = Math.abs(mx - a.x);
      const seg2 = Math.abs(b.y - a.y);
      if (travel < seg1) {
        px = a.x + (mx - a.x) * (travel / seg1); py = a.y;
      } else if (travel < seg1 + seg2) {
        px = mx; py = a.y + (b.y - a.y) * ((travel - seg1) / seg2);
      } else {
        px = mx + (b.x - mx) * ((travel - seg1 - seg2) / Math.abs(b.x - mx)); py = b.y;
      }
      const grad = ctx.createRadialGradient(px, py, 0, px, py, 8);
      grad.addColorStop(0, 'rgba(57,255,20,1)');
      grad.addColorStop(1, 'rgba(57,255,20,0)');
      ctx.beginPath();
      ctx.arc(px, py, 5, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
      p.t = (p.t + p.speed) % 1;
    });
    nodes.forEach(n => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = n.r > 3 ? 'rgba(57,255,20,0.8)' : 'rgba(57,255,20,0.3)';
      if (n.r > 3) { ctx.shadowBlur = 15; ctx.shadowColor = '#39FF14'; }
      ctx.fill();
      ctx.shadowBlur = 0;
    });
    requestAnimationFrame(draw);
  }
  window.addEventListener('resize', resize);
  resize();
  draw();
}

function initSparks() {
  const container = document.getElementById('sparks-container');
  function spawnSpark() {
    const s = document.createElement('div');
    s.className = 'spark';
    s.style.left = Math.random() * 100 + '%';
    s.style.top  = (20 + Math.random() * 70) + '%';
    s.style.setProperty('--dx', (Math.random() - 0.5) * 60 + 'px');
    s.style.setProperty('--dy', -(20 + Math.random() * 80) + 'px');
    s.style.animationDuration = (1 + Math.random()) + 's';
    s.style.animationDelay    = Math.random() * 0.5 + 's';
    container.appendChild(s);
    setTimeout(() => s.remove(), 2500);
  }
  setInterval(() => {
    const n = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < n; i++) setTimeout(spawnSpark, i * 150);
  }, 600);
}

function initThermal() {
  const nodesEl = document.getElementById('heat-nodes');
  const linesEl = document.getElementById('power-lines');
  const colors  = [
    'rgba(255,69,0,.6)',
    'rgba(255,140,0,.5)',
    'rgba(255,215,0,.4)',
    'rgba(0,212,255,.4)'
  ];
  for (let i = 0; i < 12; i++) {
    const n    = document.createElement('div');
    n.className = 'node';
    const size  = 40 + Math.random() * 80;
    const color = colors[Math.floor(Math.random() * colors.length)];
    n.style.cssText = `
      left:${Math.random()*90}%;
      top:${Math.random()*90}%;
      width:${size}px;
      height:${size}px;
      background:${color};
      box-shadow:0 0 ${size}px ${color};
      animation-delay:${Math.random()*3}s;
      animation-duration:${2+Math.random()*3}s;
    `;
    nodesEl.appendChild(n);
  }
  for (let i = 0; i < 4; i++) {
    const l    = document.createElement('div');
    l.className = 'pline';
    l.style.cssText = `
      top:${15 + i * 20}%;
      width:60%;
      animation-delay:${i * 1.5}s;
      animation-duration:${5 + Math.random() * 3}s;
    `;
    linesEl.appendChild(l);
  }
}
