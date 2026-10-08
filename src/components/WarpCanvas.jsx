import React, { useEffect, useRef } from 'react';

export default function WarpCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Subtle particles simulating loom threads
    const threadCount = Math.floor(width / 36);
    const threads = Array.from({ length: threadCount }, (_, i) => ({
      x: (i * width) / threadCount,
      speed: 0.15 + Math.random() * 0.25,
      offset: Math.random() * Math.PI * 2,
      opacity: 0.04 + Math.random() * 0.08,
      color: i % 5 === 0 ? 'rgba(227, 163, 43,' : i % 7 === 0 ? 'rgba(200, 72, 60,' : 'rgba(241, 234, 218,'
    }));

    let time = 0;
    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle vertical warp guides
      threads.forEach((t) => {
        const wave = Math.sin(time + t.offset) * 8;
        const currentX = t.x + wave;

        ctx.beginPath();
        ctx.moveTo(currentX, 0);
        ctx.lineTo(currentX, height);
        ctx.strokeStyle = `${t.color} ${t.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Subtle moving pulse node on thread
        const pulseY = ((time * t.speed * 60) + (t.offset * 120)) % height;
        ctx.beginPath();
        ctx.arc(currentX, pulseY, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `${t.color} ${t.opacity * 2.5})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
      aria-hidden="true"
    />
  );
}
