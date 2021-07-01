/* eslint no-unused-vars: "off" */

import React, { useState } from 'react';

import { View, Text, Image, Button, Spacer, Divider, List, Heading, Clickable } from '../components';

import styles from './Field.module.scss';

const Field = () => {
  return (
    <View>
      <Text fontSize="xsmall" color="gray-6">Label</Text>
      <Spacer size="xsmall" />
      <View tag="input" style={{ lineHeight: '20px', paddingBottom: 5, borderBottom: '2px solid var(--primary-color)' }} />
    </View>
  );
};

export default Field;
