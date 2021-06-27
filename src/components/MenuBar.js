/* eslint no-unused-vars: "off" */

import React, { useRef, useState, useEffect } from 'react';

import { View, Text, Image, Button, Spacer, Divider, List, Heading, Clickable, Window } from '.';
import styles from './MenuBar.module.css';

const MenuBar = () => {
  const menuRef = useRef(null);

  const handleClick = (event) => {
    console.log(event.target.offsetParent.offsetParent.getBoundingClientRect().x);

    menuRef.current.style.left = event.target.offsetParent.offsetParent.getBoundingClientRect().x + 'px';
  };

  return (
    <>
      <List horizontal xpadding="medium" horizontalPadding="small" spacerSize="none" background="gray-1">
        <View padding="small" horizontalPadding="medium" className={styles.menuItem} tabIndex="0" onClick={handleClick}>
          <Text fontWeight="bold">React WM</Text>
        </View>
        <View padding="small" horizontalPadding="medium" className={styles.menuItem} tabIndex="0" onClick={handleClick}>
          <Text fontWeight="medium">React WM</Text>
        </View>
        <View padding="small" horizontalPadding="medium" className={styles.menuItem} tabIndex="0" onClick={handleClick}>
          <Text fontWeight="medium">React WM</Text>
        </View>
      </List>

      <View ref={menuRef} verticalPadding="xsmall" background="gray-1" boxShadow style={{ position: 'absolute', zIndex: 2, left: 10, top: 30 }}>
        <View padding="small" horizontalPadding="medium" className={styles.menuItem} tabIndex="0">
          <Text fontWeight="semibold">Menu Option One</Text>
        </View>
        <View padding="small" horizontalPadding="medium" className={styles.menuItem}>
          <Text fontWeight="semibold">Menu Option One</Text>
        </View>
        <View padding="small" horizontalPadding="medium" className={styles.menuItem}>
          <Text fontWeight="semibold">Menu Option One</Text>
        </View>
      </View>
    </>
  );
};

export default MenuBar;
