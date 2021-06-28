/* eslint no-unused-vars: "off" */

import React, { useRef, useState, useEffect } from 'react';

import { View, Text, Image, Button, Spacer, Divider, List, Heading, Clickable, Window } from '.';
import styles from './MenuBar.module.css';

const MenuItem = ({ title, ...props }) => {
  return (
    <View padding="small" xhorizontalPadding="medium" className={styles.menuItem} tabIndex="0" {...props}>
      <Text fontWeight="semibold">{title}</Text>
    </View>
  );
};

const SubMenuItem = ({ title, ...props }) => {
  return (
    <View padding="small" horizontalPadding="medium" className={styles.menuItem} tabIndex="0" {...props}>
      <Text fontWeight="semibold">{title}</Text>
    </View>
  );
};

const MenuBar = () => {
  const menuRef = useRef(null);
  const targetRef = useRef(null);
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const handleMouseDown = (event) => {
    if (!menuIsVisible || event.currentTarget !== targetRef.current) {
      targetRef.current = event.currentTarget;

      setMenuIsVisible(Math.random());
    } else {
      setMenuIsVisible(false);
    }
  };

  const handleMouseEnter = (event) => {
    if (menuIsVisible) {
      targetRef.current = event.currentTarget;

      setMenuIsVisible(Math.random());
    }
  };

  useEffect(() => {
    if (menuIsVisible) {
      menuRef.current.style.left = targetRef.current.getBoundingClientRect().x + 'px';
      menuRef.current.style.top = targetRef.current.getBoundingClientRect().height + 'px';
    }
  }, [menuIsVisible]);

  return (
    <>
      <List horizontal horizontalPadding="small" spacerSize="none" background="gray-1" boxShadow style={{ zIndex: 2 }}>
        <MenuItem title="React WM" onMouseDown={handleMouseDown} onMouseEnter={handleMouseEnter} />
        <MenuItem title="File" onMouseDown={handleMouseDown} onMouseEnter={handleMouseEnter} />
      </List>
      {menuIsVisible && (
        <View ref={menuRef} verticalPadding="xsmall" background="gray-1" bottomBorderRadius="small" boxShadow style={{ position: 'absolute', zIndex: 2, left: 10, top: 30 }}>
          <SubMenuItem title="Menu Item One" />
          <SubMenuItem title="Menu Item Two" />
          <SubMenuItem title="Menu Item Three" />
        </View>
      )}
    </>
  );
};

export default MenuBar;
