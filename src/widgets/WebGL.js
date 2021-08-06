/* eslint no-unused-vars: "off" */

import React, { useEffect, useRef, useMemo, useState } from 'react';

import { View, Text, Image, Button, Spacer, Divider, List, Heading } from '../components';

const WebGL = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const handleAnimationFrame = (timestamp) => {
    const gl = contextRef.current;

    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.clearColor(0.0, 0.5, 0.0, 1.0);

    gl.clear(gl.COLOR_BUFFER_BIT);
  };

  useEffect(() => {
    console.log('useEffect()');

    const id = window.requestAnimationFrame(handleAnimationFrame);

    contextRef.current = canvasRef.current.getContext('webgl');

    return () => {
      window.cancelAnimationFrame(id);
    };
  }, []);

  return (
    <View ref={canvasRef} tag="canvas" flex width={250} height={250} />
  );
};

export default WebGL;
