/* eslint no-unused-vars: "off" */

import React, { useState } from 'react';
import classNames from 'classnames';

import { View, Text, Image, Button, Spacer, Divider, List, Heading, Clickable } from '../components';

import styles from './Field.module.scss';

const Field = ({ title, options, variant }) => {
  const inputClassName = classNames(
    styles.input,
    variant === 'document' && styles.document,
  );

  return (
    <View>
      <View horizontal alignItems="center">
        <Text fontSize="xsmall" color="gray-6">{title}</Text>
        {options && (
          <>
            <Spacer size="xxsmall" />
            <View tag="svg" xviewBox="0 0 10 10" style={{ width: 5, height: 5, marginTop: 2 }}>
              <polygon points="0,0 5,0 2.5,5" style={{ fill: '#adb5bd' }} />
            </View>
          </>
        )}
      </View>
      <Spacer size="small" />
      <View tag="input" placeholder={variant === 'document' && '—'} className={inputClassName} />
    </View>
  );
};

export default Field;
