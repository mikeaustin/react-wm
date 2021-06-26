import React, { useRef, useState, useEffect } from 'react';

import { View, Text, Image, Button, Spacer, Divider, List, Heading, Clickable, Window } from '.';

const MenuBar = () => {
  return (
    <>
      <List horizontal xpadding="medium" horizontalPadding="small" spacerSize="none" background="gray-1">
        <View padding="small" horizontalPadding="medium" background="blue-5">
          <Text fontWeight="bold" color="white">React WM</Text>
        </View>
        <View padding="small" horizontalPadding="medium">
          <Text fontWeight="medium">React WM</Text>
        </View>
        <View padding="small" horizontalPadding="medium">
          <Text fontWeight="medium">React WM</Text>
        </View>
      </List>
      <View verticalPadding="xsmall" background="gray-1" boxShadow style={{ position: 'absolute', zIndex: 2, left: 10, top: 30 }}>
        <View padding="small" horizontalPadding="medium" background="blue-5"><Text fontWeight="semibold" color="white">Menu Option One</Text></View>
        <View padding="small" horizontalPadding="small"><Text fontWeight="semibold">Menu Option One</Text></View>
        <View padding="small" horizontalPadding="small"><Text fontWeight="semibold">Menu Option One</Text></View>
      </View>
    </>
  );
};

export default MenuBar;
