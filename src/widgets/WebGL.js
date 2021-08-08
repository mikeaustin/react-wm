/* eslint no-unused-vars: "off" */

import React, { useEffect, useRef, useMemo, useState } from 'react';
import X, { Scene } from 'x3dom';
import * as Z from 'x3dom';

import { View, Text, Image, Button, Spacer, Divider, List, Heading } from '../components';

console.log('WebGL', Z);

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

    // const id = window.requestAnimationFrame(handleAnimationFrame);

    // contextRef.current = canvasRef.current.getContext('webgl');

    return () => {
      // window.cancelAnimationFrame(id);
    };
  }, []);

  return (
    <x3d is="x3d" width="100%" height="100%">
      <scene is="scene">
        <navigationInfo is="navigationInfo" id='nav' type='turntable' />
        <shape is="shape">
          <appearance is="appearance">
            <material is="material" diffuseColor='1 0 0' />
          </appearance>
          <box is="box" size="100,100,100" />
        </shape>
      </scene>
    </x3d>
  );

  return (
    <View ref={canvasRef} tag="canvas" flex width={250} height={250} />
  );
};

export default WebGL;
