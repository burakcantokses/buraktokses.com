"use client";

import React, { useEffect } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
}

const ParticleBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById(
      "particle-canvas"
    ) as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    // Ana renk paleti
    const colors = [
      "#4f46e5", // indigo-600
      "#6366f1", // indigo-500
      "#7c3aed", // violet-600
      "#8b5cf6", // violet-500
      "#9333ea", // purple-600
    ];

    let particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const particleCount = 12;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 8 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          speed: 1,
        });
      }
    };

    const animate = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = 0.3;
        ctx.fill();

        particle.x += particle.speed;

        if (particle.x > canvas.width) {
          particle.x = 0;
        }
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    createParticles();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      id="particle-canvas"
      className="fixed inset-0 -z-10"
      style={{
        background: "linear-gradient(120deg, #f8f9fa, #eef2ff)",
      }}
    />
  );
};

export default ParticleBackground;
