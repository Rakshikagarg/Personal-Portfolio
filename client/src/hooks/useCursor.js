import { useEffect } from 'react';

export default function useCursor() {
  useEffect(() => {
    const cur = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!cur || !ring) return;

    const move = (e) => {
      cur.style.left = e.clientX + 'px';
      cur.style.top = e.clientY + 'px';
      ring.style.left = e.clientX + 'px';
      ring.style.top = e.clientY + 'px';
    };

    const grow = () => {
      ring.style.transform = 'translate(-50%, -50%) scale(1.6)';
      ring.style.opacity = '0.8';
    };

    const shrink = () => {
      ring.style.transform = 'translate(-50%, -50%) scale(1)';
      ring.style.opacity = '0.5';
    };

    document.addEventListener('mousemove', move);

    const targets = document.querySelectorAll('a, button, .proj-card, .cert-card, .soft-badge');
    targets.forEach((el) => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });

    return () => {
      document.removeEventListener('mousemove', move);
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', grow);
        el.removeEventListener('mouseleave', shrink);
      });
    };
  }, []);
}
