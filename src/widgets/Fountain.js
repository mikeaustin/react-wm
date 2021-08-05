/* eslint no-unused-vars: "off" */

import React, { useEffect, useRef, useMemo, useState } from 'react';

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
  console.log('Fountain()');

  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const frameRef = useRef(0);
  const particlesRef = useRef(useMemo(() => createParticles()));
  const lastTimestamp = useRef(null);
  const velocityRef = useRef(5);
  const hueRef = useRef(30);
  const sizeRef = useRef(1);
  const ttlRef = useRef(700);
  const spreadRef = useRef(2);

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
        contextRef.current.fillStyle = `hsla(${hueRef.current}, 100%, 50%, ${particle.ttl / 1000})`;

        contextRef.current.beginPath();
        contextRef.current.arc(particle.pos.x, particle.pos.y, sizeRef.current, 0, 2 * Math.PI);
        contextRef.current.fill();

        particle.ttl -= 5 * delta;
        particle.pos.x += particle.vel.x * delta;
        particle.pos.y += particle.vel.y * delta;
        particle.vel.y += 0.1 * delta;

        if (particle.pos.y > 250) {
          if (particle.vel.y < 1 || particle.ttl < 0) {
            particle.ttl = Math.random() * ttlRef.current + 300;
            particle.pos.x = 100;
            particle.pos.y = 250;
            particle.vel.x = Math.random() * -spreadRef.current + spreadRef.current / 2;
            particle.vel.y = Math.random() * (0 - velocityRef.current) - 3.0;
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

  const handleVelocitySliderChange = (event) => {
    velocityRef.current = event.target.value;
  };

  const handleHueSliderChange = (event) => {
    hueRef.current = event.target.value;
  };

  const handleSizeSliderChange = (event) => {
    sizeRef.current = event.target.value;
  };

  const handleTtlSliderChange = (event) => {
    ttlRef.current = event.target.value;
  };

  const handleSpreadSliderChange = (event) => {
    spreadRef.current = event.target.value;
  };

  useEffect(() => {
    console.log('useEffect()');

    const id = window.requestAnimationFrame(handleAnimationFrame);

    contextRef.current = canvasRef.current.getContext('2d');

    return () => {
      window.cancelAnimationFrame(id);
    };
  }, []);

  return (
    <View horizontal>
      <View ref={canvasRef} tag="canvas" flex width={200} height={250} />
      <View padding="small">
        <Text fontSize="xsmall" color="white">Velocity</Text>
        <Spacer size="xsmall" />
        <input type="range" min={0} max={10} step={0.01} defaultValue={velocityRef.current} onInput={handleVelocitySliderChange} />
        <Spacer />
        <Text fontSize="xsmall" color="white">Particle Hue</Text>
        <Spacer size="xsmall" />
        <input type="range" min={0} max={360} step={0.01} defaultValue={hueRef.current} onInput={handleHueSliderChange} />
        <Spacer />
        <Text fontSize="xsmall" color="white">Particle Size</Text>
        <Spacer size="xsmall" />
        <input type="range" min={1} max={5} step={0.01} defaultValue={sizeRef.current} onInput={handleSizeSliderChange} />
        <Spacer />
        <Text fontSize="xsmall" color="white">Time to Live</Text>
        <Spacer size="xsmall" />
        <input type="range" min={1} max={1500} step={0.01} defaultValue={ttlRef.current} onInput={handleTtlSliderChange} />
        <Spacer />
        <Text fontSize="xsmall" color="white">Spread</Text>
        <Spacer size="xsmall" />
        <input type="range" min={1} max={3} step={0.01} defaultValue={spreadRef.current} onInput={handleSpreadSliderChange} />
      </View>
    </View>
  );
};

export default Fountain;
