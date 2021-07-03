/* eslint no-unused-vars: "off" */

import React, { useRef, useState, useEffect } from 'react';

import { View, Text, Image, Button, Spacer, Divider, List, Heading, Clickable } from '.';

const Window = ({
  id,
  title,
  noPadding,
  style,
  children,
  onWindowFocus,
  onWindowBlur,
  onWindowActivate,
  ...props
}) => {
  console.log('Window()');

  const windowRef = useRef();
  const mouseIsDownRef = useRef(false);

  const handleWindowMouseDown = (event) => {
    onWindowActivate(id);
  };

  const handleTitleMouseDown = (event) => {
    event.preventDefault();

    const boundingClientRect = windowRef.current.getBoundingClientRect();

    onWindowFocus(
      windowRef.current,
      event.clientX - boundingClientRect.left,
      event.clientY - boundingClientRect.top,
      id,
    );
  };

  const handleTitleMouseUp = (event) => {
    console.log('here', event);

    onWindowBlur(windowRef.current, event.nativeEvent.offsetX, event.nativeEvent.offsetY);
  };

  const handleResizeMouseDown = (event) => {
    event.preventDefault();

    mouseIsDownRef.current = true;
  };

  const handleResizeMouseMove = (event) => {
    console.log(event);
    if (mouseIsDownRef.current) {
      windowRef.current.style.width = windowRef.current.offsetWidth + event.movementX + 'px';
    }
  };

  const handleResizeMouseUp = (event) => {
    mouseIsDownRef.current = false;
  };

  const windowStyle = {
    alignSelf: 'flex-start',
    position: 'absolute',
    zIndex: 1,
    ...style
  };

  return (
    <View ref={windowRef} background="white" boxShadow borderRadius="small" style={windowStyle} onMouseDown={handleWindowMouseDown} {...props}>
      <View
        absolute
        style={{ margin: -15, cursor: 'ew-resize' }}
        onMouseDown={handleResizeMouseDown}
        onMouseMove={handleResizeMouseMove}
        onMouseUp={handleResizeMouseUp}
      />
      <View
        alignItems="center"
        padding="small"
        background="gray-3"
        topBorderRadius="small"
        onMouseDown={handleTitleMouseDown}
        onMouseUp={handleTitleMouseUp}
      >
        <Text fontWeight="bold" style={{ top: 1 }}>{title}</Text>
      </View>
      <Divider size="none" color="gray-4" />
      <View flex padding={!noPadding && 'medium'} style={{ overflowX: 'clip', overflowY: 'auto' }}>
        {children}
      </View>
    </View>
  );
};

export default Window;

/*
      <View horizontal justifyContent="space-between" alignItems="center" padding="small" background="gray-3" topBorderRadius="small" onMouseDown={handleTitleMouseDown} onMouseUp={handleTitleMouseUp}>
        <Text fontSize="medium" style={{ margin: '-5px 5px' }}>×</Text>
        <Text fontWeight="bold">{title}</Text>
        <Text>     </Text>
      </View>
*/
