// Simple matrix rain background
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

const letters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const fontSize = 16;
let columns = Math.floor(canvas.width / fontSize);
let drops = new Array(columns).fill(1);

function draw(){
  ctx.fillStyle = 'rgba(13,17,23,0.25)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#00C896';
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(draw, 40);

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
