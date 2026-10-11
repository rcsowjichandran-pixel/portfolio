import React, { useEffect, useRef } from 'react';

export default function WarpCanvas() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const createThreads = () => {
      const threadCount = Math.max(1, Math.floor(width / 36));
      return Array.from({ length: threadCount }, (_, i) => ({
        baseX: (i * width) / threadCount,
        speed: 0.15 + Math.random() * 0.25,
        offset: Math.random() * Math.PI * 2,
        opacity: 0.04 + Math.random() * 0.08,
        color: i % 5 === 0 ? 'rgba(233, 180, 76,' : i % 7 === 0 ? 'rgba(210, 96, 74,' : 'rgba(69, 191, 161,'
      }));
    };

    // Floating particles
    const particleCount = 30;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.3 + 0.1,
      color: Math.random() > 0.6 ? 'rgba(233, 180, 76,' : Math.random() > 0.3 ? 'rgba(69, 191, 161,' : 'rgba(210, 96, 74,'
    }));

    let threads = createThreads();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      threads = createThreads();
    };
    window.addEventListener('resize', handleResize);

    const handlePointerMove = (event) => {
      mouseRef.current.x = event.clientX;
      mouseRef.current.y = event.clientY;
    };
    const handlePointerLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('blur', handlePointerLeave);

    let time = 0;
    const render = () => {
      time += 0.008;
      ctx.clearRect(0, 0, width, height);
      const mouse = mouseRef.current;

      // Draw warp threads that bend toward the pointer and ripple back into place.
      threads.forEach((t) => {
        const ambientWave = Math.sin(time + t.offset) * 5;
        const pointerDx = mouse.x - t.baseX;
        const horizontalDistance = Math.abs(pointerDx);
        const horizontalInfluence = Math.exp(-((horizontalDistance / 150) ** 2));
        const bendDirection = Math.sign(pointerDx);
        const accent = t.offset % 2 > 1 ? 'rgba(233, 180, 76,' : 'rgba(69, 191, 161,';
        const points = [];

        ctx.beginPath();
        for (let y = 0; y <= height; y += 18) {
          const dy = y - mouse.y;
          const verticalInfluence = Math.exp(-((dy / 125) ** 2));
          const ripple = Math.sin(dy * 0.035 - time * 3 + t.offset) * 5 * verticalInfluence;
          const influence = horizontalInfluence * verticalInfluence;
          const displacement = bendDirection * (influence * 30 + ripple * horizontalInfluence);
          const x = t.baseX + ambientWave + displacement;
          points.push({ x, y, influence });

          if (y === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.strokeStyle = `${t.color} ${t.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        points.forEach((point, index) => {
          const nextPoint = points[index + 1];
          if (!nextPoint) return;
          const influence = Math.max(point.influence, nextPoint.influence);
          if (influence < 0.035) return;

          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(nextPoint.x, nextPoint.y);
          ctx.strokeStyle = `${accent} ${influence * 0.62})`;
          ctx.lineWidth = 1 + influence * 1.3;
          ctx.shadowColor = `${accent} ${influence * 0.55})`;
          ctx.shadowBlur = influence * 12;
          ctx.stroke();
          ctx.shadowBlur = 0;
        });

        // Subtle moving pulse node on thread
        const pulseY = (time * t.speed * 60 + t.offset * 120) % height;
        const pulseDx = mouse.x - t.baseX;
        const pulseDy = mouse.y - pulseY;
        const pulseInfluence = Math.exp(-((pulseDx / 150) ** 2) - ((pulseDy / 125) ** 2));
        const pulseX = t.baseX + Math.sin(time + t.offset) * 5
          + Math.sign(pulseDx) * pulseInfluence * 30;
        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 1.5 + pulseInfluence * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = pulseInfluence > 0.05
          ? `${accent} ${t.opacity + pulseInfluence * 0.6})`
          : `${t.color} ${t.opacity * 2.5})`;
        ctx.fill();
      });

      // Draw floating particles with mouse attraction
      particles.forEach((p) => {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const force = Math.max(0, 1 - dist / 300) * 0.012;
        p.vx += (dx / (dist || 1)) * force;
        p.vy += (dy / (dist || 1)) * force;

        p.vx *= 0.98;
        p.vy *= 0.98;
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${p.opacity})`;
        ctx.fill();
      });

      // Draw connection lines between nearby particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const midpointX = (p1.x + p2.x) / 2;
            const midpointY = (p1.y + p2.y) / 2;
            const mouseDistance = Math.hypot(mouse.x - midpointX, mouse.y - midpointY);
            const glow = Math.max(0, 1 - mouseDistance / 190);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(69, 191, 161, ${0.04 * (1 - dist / 150) + glow * 0.24})`;
            ctx.lineWidth = 0.5 + glow * 0.6;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('blur', handlePointerLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="warp-canvas fixed inset-0 pointer-events-none z-0 opacity-70"
      aria-hidden="true"
    />
  );
}
