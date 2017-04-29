window.onload = start;

let last = performance.now(),
    fps = 60,
    slomo = 1, // slow motion multiplier
    step = 1 / fps,
    slowStep = slomo * step,
    dt = 0,
    now;

let frame = () => {
  now = performance.now();
  dt = dt + Math.min(1, (now - last) / 1000);
  while(dt > slowStep) {
    dt = dt - slowStep;
    update(step);
  }
  last = now;

  update(dt / slomo * fps);
  requestAnimationFrame(frame);
}

requestAnimationFrame(frame);
