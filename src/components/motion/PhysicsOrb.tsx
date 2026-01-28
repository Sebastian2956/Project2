"use client";

import { useEffect, useRef } from "react";

export default function PhysicsOrb() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    let targetX = width * 0.7;
    let targetY = height * 0.3;
    let x = width * 0.3;
    let y = height * 0.6;
    let vx = 0;
    let vy = 0;

    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
      targetX = width * 0.7;
      targetY = height * 0.3;
    };

    const handleMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetX = event.clientX - rect.left;
      targetY = event.clientY - rect.top;
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMove);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const spring = 0.02;
      const friction = 0.88;
      vx += (targetX - x) * spring;
      vy += (targetY - y) * spring;
      vx *= friction;
      vy *= friction;
      x += vx;
      y += vy;

      ctx.beginPath();
      ctx.strokeStyle = "rgba(111, 140, 255, 0.4)";
      ctx.lineWidth = 2;
      ctx.moveTo(width * 0.5, height * 0.7);
      ctx.quadraticCurveTo(x, y, targetX, targetY);
      ctx.stroke();

      const gradient = ctx.createRadialGradient(x, y, 4, x, y, 40);
      gradient.addColorStop(0, "rgba(158, 123, 255, 0.9)");
      gradient.addColorStop(1, "rgba(15, 15, 20, 0)");

      ctx.beginPath();
      ctx.fillStyle = gradient;
      ctx.arc(x, y, 40, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
      ctx.arc(x, y, 6, 0, Math.PI * 2);
      ctx.fill();

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full" />;
}
