/* eslint no-unused-vars: "off" */

import React, { useRef, useState, useEffect } from 'react';

import { View, Text, Image, Button, Spacer, Divider, List, Heading, Clickable, Window } from '.';
import styles from './MenuBar.module.css';

const MenuBar = () => {
  const menuRef = useRef(null);
  const targetRef = useRef(null);
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const handleClick = (event) => {
    if (!menuIsVisible || event.target !== targetRef.current) {
      targetRef.current = event.target;

      setMenuIsVisible(Math.random());
    } else {
      setMenuIsVisible(false);
    }
  };

  useEffect(() => {
    if (menuIsVisible) {
      menuRef.current.style.left = targetRef.current.offsetParent.offsetParent.getBoundingClientRect().x + 'px';
      menuRef.current.style.top = targetRef.current.offsetParent.offsetParent.getBoundingClientRect().height + 'px';
    }
  }, [menuIsVisible]);

  return (
    <>
      <List horizontal xpadding="medium" horizontalPadding="small" spacerSize="none" background="gray-1">
        <View padding="small" horizontalPadding="medium" className={styles.menuItem} tabIndex="0" onMouseDown={handleClick}>
          <Text fontWeight="bold">React WM</Text>
        </View>
        <View padding="small" horizontalPadding="medium" className={styles.menuItem} tabIndex="0" onMouseDown={handleClick}>
          <Text fontWeight="medium">React WM</Text>
        </View>
        <View padding="small" horizontalPadding="medium" className={styles.menuItem} tabIndex="0" onMouseDown={handleClick}>
          <Text fontWeight="medium">React WM</Text>
        </View>
      </List>
      {menuIsVisible && (
        <View ref={menuRef} verticalPadding="xsmall" background="gray-1" boxShadow style={{ position: 'absolute', zIndex: 2, left: 10, top: 30 }}>
          <View padding="small" horizontalPadding="medium" className={styles.menuItem} tabIndex="0">
            <Text fontWeight="semibold">Menu Option One</Text>
          </View>
          <View padding="small" horizontalPadding="medium" className={styles.menuItem}>
            <Text fontWeight="semibold">Menu Option One</Text>
          </View>
          <Divider size="xsmall" />
          <View padding="small" horizontalPadding="medium" className={styles.menuItem}>
            <Text fontWeight="semibold">Menu Option One</Text>
          </View>
        </View>
      )}
    </>
  );
};

export default MenuBar;
