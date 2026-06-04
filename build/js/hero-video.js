/* hero-video.js — invisible crossfade loop between two overlapping <video> elements */
(function() {
  const a = document.querySelector('.vid-a');
  const b = document.querySelector('.vid-b');
  if (!a || !b) return;

  let active = a;
  let next = b;
  b.style.opacity = '0';

  function crossfade() {
    const duration = active.duration || 10;
    setTimeout(() => {
      next.currentTime = 0;
      next.play();
      next.style.opacity = '1';
      active.style.opacity = '0';
      setTimeout(() => {
        active.currentTime = 0;
        [active, next] = [next, active];
        crossfade();
      }, 1500);
    }, (duration - 2) * 1000);
  }

  a.addEventListener('loadedmetadata', crossfade, { once: true });
})();
