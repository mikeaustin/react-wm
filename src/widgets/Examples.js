/* eslint no-unused-vars: "off" */

import React, { useRef, useState, useEffect } from 'react';

import { View, Text, Image, Button, Spacer, Divider, List, Heading, Clickable } from '../components';

const ExampleWindow = () => {
  const textRef = useRef();

  useEffect(() => {
    textRef.current.style.position = 'absolute';
    textRef.current.style.width = textRef.current.offsetWidth + 'px';
    textRef.current.style.position = null;
  });

  return (
    <View>
      <View horizontal>
        <View justifyContent="center" alignItems="center">
          <Text fontSize="xlarge" style={{ zIndex: 1 }}>Hero (36px)</Text>
          <Spacer background="gray-1" />
          <Text fontSize="large" style={{ zIndex: 1 }}>Large (24px)</Text>
          <Spacer background="gray-1" />
          <Text fontSize="medium" style={{ zIndex: 1 }}>Medium (18px)</Text>
          <Spacer background="gray-1" />
          <Text style={{ zIndex: 1 }}>Small (14px)</Text>
          <Spacer background="gray-1" />
          <Text fontSize="xsmall" style={{ zIndex: 1 }}>Extra Small (12px)</Text>
          <Spacer background="gray-1" />
          <List horizontal spacerSize="small" alignItems="flex-end">
            <Text fontWeight="bold" style={{ zIndex: 1 }}>Bold</Text>
            <Text fontWeight="semibold" style={{ zIndex: 1 }}>Semibold</Text>
            <Text fontWeight="medium" style={{ zIndex: 1 }}>Medium</Text>
            <Text fontWeight="light" style={{ zIndex: 1 }}>Light</Text>
          </List>
          <Spacer background="gray-1" />
          <List horizontal spacerSize="small" alignItems="flex-end">
            <Text color="gray-7" style={{ zIndex: 1, whiteSpace: 'nowrap' }}>Gray 7</Text>
            <Text color="gray-5" style={{ zIndex: 1, whiteSpace: 'nowrap' }}>Gray 5</Text>
            <Text color="gray-3" style={{ zIndex: 1, whiteSpace: 'nowrap' }}>Gray 3</Text>
          </List>
        </View>
        <Spacer />
        <Divider />
        <Spacer />
        <View justifyContent="center" alignItems="center">
          <List horizontal spacerSize="small">
            <Button link primary title="Link" />
            <Button title="Default" />
            <Button solid title="Solid" />
            <Button primary title="Primary" />
            <Button primary solid title="Primary Solid" />
          </List>
          <Spacer />
          <List horizontal alignItems="center" spacerSize="small">
            <Button link primary title="Multiline\nLink" />
            <Button title="Multiline\nDefault" />
            <Button solid title="Multiline\nSolid" />
            <Button primary title="Multiline\nPrimary" />
            <Button primary solid title="Multiline\nPrimary Solid" />
          </List>
          <Spacer />
          <List horizontal alignItems="center" spacerSize="small">
            <Button link primary disabled title="Link" />
            <Button disabled title="Default" />
            <Button disabled solid title="Solid" />
            <Button disabled primary title="Primary" />
            <Button disabled primary solid title="Primary Solid" />
          </List>
          <Spacer />
          <List horizontal alignItems="center" spacerSize="small">
            <Button title="Default" borderRadius="max" />
            <Button solid title="Solid" borderRadius="max" />
            <Button primary title="Primary" borderRadius="max" />
            <Button primary solid title="Primary Solid" borderRadius="max" />
          </List>
        </View>
      </View>
      <Divider size="medium" />
      <View>
        <Text ref={textRef}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </Text>
      </View>
      <Divider size="medium" />
      <View horizontal>
        <Text fontSize="large" xref={textRef} style={{ width: 250 }}>
          Lorem ipsum dolor sit amet, consectetur&hellip;
        </Text>
        <Text fontSize="medium" xref={textRef} style={{ width: 250 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing&hellip;
        </Text>
        <Text fontSize="small" xref={textRef} style={{ width: 250 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do&hellip;
        </Text>
      </View>
    </View>
  );
};

export default ExampleWindow;
