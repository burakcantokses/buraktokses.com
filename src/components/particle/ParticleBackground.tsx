"use client";

import React, { useEffect } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  opacity: number;
  growth: number;
}

const ParticleBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById(
      "particle-canvas"
    ) as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    const colors = [
      "#4f46e5",
      "#6366f1",
      "#7c3aed",
      "#8b5cf6",
      "#9333ea",
      "#4338ca",
      "#6d28d9",
      "#5b21b6",
    ];

    let particles: Particle[] = [];
    let mouse = { x: 0, y: 0 };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const particleCount = 20;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 5 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          speedX: (Math.random() - 0.5) * 1.5,
          speedY: (Math.random() - 0.5) * 1.5,
          opacity: Math.random() * 0.5 + 0.3,
          growth: Math.random() * 0.02 - 0.01,
        });
      }
    };

    const connectParticles = () => {
      if (!ctx) return;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            ctx.beginPath();
            ctx.strokeStyle = particles[i].color;
            ctx.globalAlpha = (1 - distance / 200) * 0.2;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.x -= dx * force * 0.02;
          particle.y -= dy * force * 0.02;
        }

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        particle.size += particle.growth;
        if (particle.size < 2 || particle.size > 7) {
          particle.growth = -particle.growth;
        }

        if (particle.x < 0 || particle.x > canvas.width)
          particle.speedX = -particle.speedX;
        if (particle.y < 0 || particle.y > canvas.height)
          particle.speedY = -particle.speedY;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        ctx.shadowBlur = 15;
        ctx.shadowColor = particle.color;
      });

      connectParticles();

      ctx.shadowBlur = 0;

      requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    resizeCanvas();
    createParticles();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      id="particle-canvas"
      className="fixed inset-0 -z-10"
      style={{
        background: "linear-gradient(135deg, #f8f9fa, #eef2ff, #f5f3ff)",
      }}
    />
  );
};

export default ParticleBackground;
