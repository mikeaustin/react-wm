import React, { useEffect, useRef } from 'react';

import { View, Text, Image, Button, Spacer, Divider, List, Heading } from '../components';

const particles = Array.from({ length: 100 }, (_, index) => (
  {
    pos: {
      x: 100,
      y: 200,
    },
    vel: {
      x: Math.random() * -2.0 + 1,
      y: Math.random() * -5.0,
    }
  })
);

const Fountain = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const particlesRef = useRef(particles);
  const lastTimestamp = useRef(null);

  const handleAnimationFrame = (timestamp) => {
    // console.log(timestamp);

    if (lastTimestamp === null) {
      lastTimestamp = timestamp;
    }

    const delta = timestamp - lastTimestamp.current;

    // console.log(delta);

    contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    for (let particle of particlesRef.current) {
      contextRef.current.beginPath();
      contextRef.current.arc(particle.pos.x, particle.pos.y, 1, 0, 2 * Math.PI);
      contextRef.current.fill();

      particle.pos.x += particle.vel.x;
      particle.pos.y += particle.vel.y;
      particle.vel.y += 0.1;

      if (particle.pos.y > 250) {
        particle.pos.x = 100;
        particle.pos.y = 250;
        particle.vel.x = Math.random() * -2 + 1;
        particle.vel.y = Math.random() * -7.0;
      }
    }

    lastTimestamp.current = timestamp;

    window.requestAnimationFrame(handleAnimationFrame);
  };

  useEffect(() => {
    const id = window.requestAnimationFrame(handleAnimationFrame);

    contextRef.current = canvasRef.current.getContext('2d');
    contextRef.current.fillStyle = 'white';

    return () => {
      window.cancelAnimationFrame(id);
    };
  }, []);

  return (
    <View ref={canvasRef} tag="canvas" width={200} height={250} />
  );
};

export default Fountain;
