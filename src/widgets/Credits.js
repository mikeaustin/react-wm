/* eslint no-unused-vars: "off" */

import React, { useRef, useState, useEffect } from 'react';
import { LoremIpsum } from 'lorem-ipsum';

import { View, Text, Image, Button, Spacer, Divider, List, Heading, Clickable } from '../components';

import styles from '../App.module.css';

const creditsLorem = new LoremIpsum({
  sentencesPerParagraph: {
    min: 4,
    max: 8,
  },
  wordsPerSentence: {
    min: 2,
    max: 3,
  }
});

const textProps = {
  fontSize: 'large',
  color: 'white',
  style: { whiteSpace: 'nowrap', flex: '1 0 50%' }
};

const Credits = () => {
  return (
    <View flex background="black">
      <List spacerSize="medium" style={{ paddingTop: '400px', animation: `${styles.scroll} 40s linear` }}>
        {Array.from({ length: 30 }, (_, index) => (
          <View horizontal itemFlex flex alignItems="flex-end">
            <Text {...textProps} fontSize="small" style={{ ...textProps.style, textAlign: 'right' }}>
              {creditsLorem.generateWords(2).toUpperCase()}
            </Text>
            <Spacer size="large" />
            <Text  {...textProps}>{creditsLorem.generateWords(2).toUpperCase()}</Text>
          </View>
        ))}
      </List>
    </View>
  );
};

export default Credits;
