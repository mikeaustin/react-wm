/* eslint no-unused-vars: "off" */

import React, { useRef, useState, useEffect } from 'react';

import { View, Text, Image, Button, Spacer, Divider, List, Heading, Clickable } from '.';

const Window = ({ id, title, noPadding, style, children, onWindowFocus, onWindowBlur, ...props }) => {
  console.log('Window()');

  const windowRef = useRef();

  const handleMouseDown = (event) => {
    event.preventDefault();

    const boundingClientRect = windowRef.current.getBoundingClientRect();

    onWindowFocus(
      windowRef.current,
      event.clientX - boundingClientRect.left,
      event.clientY - boundingClientRect.top,
      id,
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
      <View
        alignItems="center"
        padding="small"
        background="gray-3"
        topBorderRadius="small"

        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <Text fontWeight="bold" style={{ top: 1 }}>{title}</Text>
      </View>
      <Divider size="none" color="gray-4" />
      <View padding={!noPadding && 'medium'}>
        {children}
      </View>
    </View>
  );
};

export default Window;

/*
      <View horizontal justifyContent="space-between" alignItems="center" padding="small" background="gray-3" topBorderRadius="small" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
        <Text fontSize="medium" style={{ margin: '-5px 5px' }}>×</Text>
        <Text fontWeight="bold">{title}</Text>
        <Text>     </Text>
      </View>
*/
