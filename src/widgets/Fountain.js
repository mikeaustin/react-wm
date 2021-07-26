/* eslint no-unused-vars: "off" */

import React, { useEffect, useRef, useMemo } from 'react';

import { View, Text, Image, Button, Spacer, Divider, List, Heading } from '../components';

const createParticles = () => Array.from({ length: 1000 }, (_, index) => (
  {
    ttl: 1000,
    pos: {
      x: 100,
      y: 200,
    },
    vel: {
      x: Math.random() * -2.0 + 1.0,
      y: Math.random() * -4.0 + 3,
    }
  })
);

const Fountain = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const frameRef = useRef(0);
  const particlesRef = useRef(useMemo(() => createParticles()));
  const lastTimestamp = useRef(null);

  const handleAnimationFrame = (timestamp) => {
    if (!canvasRef.current) {
      return;
    }

    if (frameRef.current % 2 === 0) {
      if (lastTimestamp.current === null) {
        lastTimestamp.current = timestamp;
      }

      const delta = (timestamp - lastTimestamp.current) / 16;

      contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      for (let particle of particlesRef.current) {
        contextRef.current.fillStyle = `hsla(30, 100%, 50%, ${particle.ttl / 1000})`;

        contextRef.current.beginPath();
        contextRef.current.arc(particle.pos.x, particle.pos.y, 1, 0, 2 * Math.PI);
        contextRef.current.fill();

        particle.ttl -= 5 * delta;
        particle.pos.x += particle.vel.x * delta;
        particle.pos.y += particle.vel.y * delta;
        particle.vel.y += 0.1 * delta;

        if (particle.pos.y > 250) {
          if (particle.vel.y < 1) {
            particle.ttl = Math.random() * 300 + 700;
            particle.pos.x = 100;
            particle.pos.y = 250;
            particle.vel.x = Math.random() * -2 + 1.0;
            particle.vel.y = Math.random() * -4.0 - 3.0;
          } else {
            particle.pos.y -= particle.pos.y - 250;
            particle.vel.y *= -0.2 * delta;
          }
        }
      }
    }

    frameRef.current++;
    lastTimestamp.current = timestamp;

    window.requestAnimationFrame(handleAnimationFrame);
  };

  useEffect(() => {
    const id = window.requestAnimationFrame(handleAnimationFrame);

    contextRef.current = canvasRef.current.getContext('2d');

    return () => {
      window.cancelAnimationFrame(id);
    };
  }, []);

  return (
    <View ref={canvasRef} tag="canvas" flex width={200} height={250} />
  );
};

export default Fountain;
