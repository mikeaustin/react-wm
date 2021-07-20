/* eslint no-unused-vars: "off" */

import React, { useRef, useState, useEffect } from 'react';

import { View, Text, Image, Button, Spacer, Divider, List, Heading, Clickable } from '.';

const Window = ({
  id,
  title,
  noPadding,
  noBorder,
  zIndex,
  style,
  children,
  onWindowFocus,
  onWindowBlur,
  onWindowActivate,
  onWindowResizeStart,
  onWindowResizeEnd,
  onWindowClose,
  ...props
}) => {
  // console.log('Window()');

  const windowRef = useRef();

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
    onWindowBlur(windowRef.current, event.nativeEvent.offsetX, event.nativeEvent.offsetY);
  };

  const handleResizeMouseDown = (event) => {
    event.preventDefault();

    let resizeMode = [null, null];

    if (event.clientX - windowRef.current.offsetLeft > windowRef.current.offsetWidth) {
      resizeMode[0] = 'right';
    } else if (event.clientX - windowRef.current.offsetLeft < 0) {
      resizeMode[0] = 'left';
    }

    if (event.clientY - windowRef.current.offsetTop > windowRef.current.offsetHeight + 30) {
      resizeMode[1] = 'bottom';
    } else if (event.clientY - windowRef.current.offsetTop < 30) {
      resizeMode[1] = 'top';
    }

    onWindowResizeStart(windowRef.current, resizeMode);
  };

  const handleResizeMouseMove = (event) => {
    const left = event.clientX - windowRef.current.offsetLeft < 0;
    const right = event.clientX - windowRef.current.offsetLeft > windowRef.current.offsetWidth;
    const top = event.clientY - windowRef.current.offsetTop < 30;
    const bottom = event.clientY - windowRef.current.offsetTop > windowRef.current.offsetHeight + 30;

    let cursor = null;

    if (top && left || bottom && right) {
      cursor = 'nwse-resize';
    } else if (top && right || bottom && left) {
      cursor = 'nesw-resize';
    } else if (top || bottom) {
      cursor = 'ns-resize';
    } else if (left || right) {
      cursor = 'ew-resize';
    }

    windowRef.current.children[0].style.cursor = cursor;
  };

  const handleResizeMouseUp = (event) => {
    onWindowResizeEnd();
  };

  const handleWindowCloseClick = () => {
    onWindowClose(id);
  };

  const windowStyle = {
    alignSelf: 'flex-start',
    position: 'absolute',
    zIndex: zIndex + 100,
    // WebkitUserSelect: 'none',
    ...style
  };

  return (
    <View
      ref={windowRef}
      background="white"
      boxShadow
      borderRadius="small"
      style={windowStyle}
      onPointerDown={handleWindowMouseDown}
      {...props}
    >
      <View
        absolute
        style={{ margin: -15, cursor: 'ew-resize', WebkitUserSelect: 'none' }}
        onPointerDown={handleResizeMouseDown}
        onPointerMove={handleResizeMouseMove}
        onPointerUp={handleResizeMouseUp}
      />
      <View
        alignItems="center"
        padding="small"
        background="gray-3"
        // background="gray-0-gradient"
        topBorderRadius="small"
        // style={{ boxShadow: '0 0 0 1px hsla(0, 0%, 0%, 0.2)', zIndex: 10000 }}
        onPointerDown={handleTitleMouseDown}
        onPointerUp={handleTitleMouseUp}
      >
        <Text fontWeight="bold" style={{ top: 1, WebkitUserSelect: 'none' }}>{title}</Text>
      </View>
      <Clickable absolute horizontal alignItems="center" style={{ right: 'auto', height: 30, borderTopLeftRadius: 5 }} onClick={handleWindowCloseClick}>
        <Text style={{ top: 1, width: 30, textAlign: 'center' }}>✖️</Text>
      </Clickable>
      {!noBorder && <Divider size="none" color="gray-4" />}
      <View flex padding={!noPadding && 'medium'} style={{ overflow: 'hidden', borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
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
