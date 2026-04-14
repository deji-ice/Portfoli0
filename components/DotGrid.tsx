"use client";
import { useEffect, useRef, useCallback } from "react";

const DotGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const smoothMouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>(0);
  const dprRef = useRef(1);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // 0 = hidden, 1 = fully visible
  const visibilityRef = useRef(0);
  const isMovingRef = useRef(false);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = dprRef.current;
    const width = canvas.width / dpr;
    const height = canvas.height / dpr;
    const mouse = mouseRef.current;
    const smooth = smoothMouseRef.current;

    // Fade visibility in/out
    const target = isMovingRef.current ? 1 : 0;
    visibilityRef.current += (target - visibilityRef.current) * 0.04;

    // Lerp smooth mouse toward actual mouse
    smooth.x += (mouse.x - smooth.x) * 0.07;
    smooth.y += (mouse.y - smooth.y) * 0.07;

    const visibility = visibilityRef.current;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Skip drawing if effectively invisible
    if (visibility < 0.005) {
      animationRef.current = requestAnimationFrame(draw);
      return;
    }

    const gap = 30;
    const baseRadius = 1.5;
    const maxRadius = 4;
    const influenceRadius = 150;
    const influenceRadiusSq = influenceRadius * influenceRadius;

    ctx.save();
    ctx.scale(dpr, dpr);

    for (let x = gap; x < width; x += gap) {
      for (let y = gap; y < height; y += gap) {
        const dx = x - smooth.x;
        const dy = y - smooth.y;
        const distSq = dx * dx + dy * dy;

        if (distSq > influenceRadiusSq) {
          ctx.beginPath();
          ctx.arc(x, y, baseRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(100, 116, 139, ${0.08 * visibility})`;
          ctx.fill();
          continue;
        }

        const dist = Math.sqrt(distSq);
        const influence = 1 - dist / influenceRadius;
        const eased = influence * influence;

        const radius = baseRadius + (maxRadius - baseRadius) * eased;
        const alpha = (0.08 + eased * 0.52) * visibility;

        const pullX = -eased * dx * 0.06;
        const pullY = -eased * dy * 0.06;

        ctx.beginPath();
        ctx.arc(x + pullX, y + pullY, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(71, 85, 105, ${alpha})`;
        ctx.fill();
      }
    }

    ctx.restore();
    animationRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      dprRef.current = dpr;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      isMovingRef.current = true;

      // Reset idle timer — fade out after 1.5s of no movement
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(() => {
        isMovingRef.current = false;
      }, 1500);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    animationRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      cancelAnimationFrame(animationRef.current);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default DotGrid;
