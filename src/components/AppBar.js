/* eslint no-unused-vars: "off" */

import React, { useRef, useState, useEffect, useCallback } from 'react';

import { View, Text, Image, Button, Spacer, Divider, List, Heading, Clickable } from '.';

const Item = ({ windowId, title, active, onWindowActivate }) => {
  const handleClick = () => {
    onWindowActivate(windowId);
  };

  const itemStyle = {
    WebkitUserSelect: 'none',
    ...(active ? { background: 'hsla(0, 0%, 100%, 0.5)', letterSpacing: '-0.5px' } : {})
  };

  return (
    <Clickable
      borderRadius
      padding="medium"
      // className={styles.item}
      style={itemStyle}
      onClick={handleClick}
    >
      <Text fontSize="xsmall" fontWeight={active ? 'bold' : undefined}>{title}</Text>
    </Clickable>
  );
};

const AppBar = ({ windowElements, activeWindowId, onWindowActivate }) => {
  return (
    <List
      horizontal
      spacerSize="xsmall"
      justifyContent="center"
      alignItems="center"
      style={{ zIndex: 1000, height: 50, background: 'hsla(0, 0%, 100%, 0.5)' }}
    >
      {windowElements.map(windowElement => (
        <Item
          key={windowElement.props.id}
          windowId={windowElement.props.id}
          title={windowElement.props.title}
          active={windowElement.props.id === activeWindowId}
          onWindowActivate={onWindowActivate}
        />
      ))}
    </List>
  );
};

export default AppBar;
