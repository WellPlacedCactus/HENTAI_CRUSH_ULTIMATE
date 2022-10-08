
const rands = () => Math.random() < 0.5 ? -1 : 1;
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const mouse = {
  x: 0,
  y: 0
};
const stats = {
  waifus: 0
};
const pp = [];

const clicked = () => {
  stats.waifus += 1;
  pp.push({
    x: mouse.x,
    y: mouse.y,
    vx: Math.random() * rands(),
    vy: Math.random() * -5,
    a: 1
  });
};

const loop = () => {

  document.querySelector('.ui h1').innerHTML = `Waifus: ${stats.waifus}`;

  c.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = pp.length - 1; i >= 0; --i) {

    const p = pp[i];

    p.x += p.vx;
    p.y += p.vy;

    c.font = 'bold 32px sans-serif';
    c.fillStyle = `rgba(255, 255, 255, ${p.a})`;
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.fillText('+1', p.x, p.y);

    p.a -= 0.01;
    if (p.a < 0) pp.splice(i, 1);
  }

  requestAnimationFrame(loop);
};

addEventListener('load', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  requestAnimationFrame(loop);
});

addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});

addEventListener('mousemove', ({
  x,
  y
}) => {
  mouse.x = x;
  mouse.y = y;
});