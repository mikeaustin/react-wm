/* eslint no-unused-vars: "off" */

import React, { useState } from 'react';

import { View, Text, Image, Button, Spacer, Divider, List, Heading, Clickable } from '../components';

import styles from './Field.module.scss';

const Field = ({ title }) => {
  return (
    <View>
      <Text fontSize="xsmall" color="gray-6">{title}</Text>
      <Spacer size="small" />
      <View tag="input" placeholder="—" className={styles.field} xstyle={{ lineHeight: '20px', paddingBottom: 5, borderBottom: '2px solid var(--primary-color)' }} />
    </View>
  );
};

export default Field;
