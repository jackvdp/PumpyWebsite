"use client";
import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Container, ISourceOptions } from "@tsparticles/engine";

interface BackgroundParticlesProps {
  className?: string;
  density?: number;
  id: string;
}

export default function BackgroundParticles({ className = "", id, density }: BackgroundParticlesProps) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const particlesOptions: ISourceOptions = {
    fpsLimit: 120,
    particles: {
      color: {
        value: ["#a5b4fc", "#d8b4fe", "#f9a8d4", "#93c5fd", "#c4b5fd"],
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: density || 5
      },
      opacity: {
        value: 0.4,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 50, max: 150 },
      },
    },
    detectRetina: true,
    fullScreen: {
      enable: false,
      zIndex: -1,
    },
  };

  return (
    <div className={`absolute inset-0 ${className}`}>
      {init && (
        <Particles
          id={id}
          particlesLoaded={particlesLoaded}
          options={particlesOptions}
          className="absolute inset-0"
        />
      )}
      <div className="absolute inset-0 backdrop-filter backdrop-blur-md"></div>
    </div>
  );
}