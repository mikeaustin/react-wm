/* eslint no-unused-vars: "off" */

import React, { useRef, useState, useEffect } from 'react';

import { View, Text, Image, Button, Spacer, Divider, List, Heading, Clickable } from '.';

const Window = ({ title, noPadding, style, children, onWindowFocus, onWindowBlur, ...props }) => {
  console.log('Window()');

  const windowRef = useRef();

  const handleMouseDown = (event) => {
    console.log('here', event);

    event.preventDefault();

    const boundingClientRect = windowRef.current.getBoundingClientRect();

    onWindowFocus(
      windowRef.current,
      event.clientX - boundingClientRect.left,
      event.clientY - boundingClientRect.top
    );
  };

  const handleMouseUp = (event) => {
    console.log('here', event);

    onWindowBlur(windowRef.current, event.nativeEvent.offsetX, event.nativeEvent.offsetY);
  };

  const windowStyle = {
    alignSelf: 'flex-start',
    position: 'absolute',
    zIndex: 1,
    ...style
  };

  return (
    <View ref={windowRef} background="white" boxShadow borderRadius="small" style={windowStyle} {...props}>
      <View alignItems="center" padding="small" background="gray-1" topBorderRadius="small" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
        <Text fontWeight="bold">{title}</Text>
      </View>
      <Divider size="none" />
      <View padding={!noPadding && 'medium'}>
        {children}
      </View>
    </View>
  );
};

export default Window;
