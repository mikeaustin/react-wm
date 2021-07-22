/* eslint no-unused-vars: "off" */

import React, { useRef, useState, useEffect } from 'react';
import { LoremIpsum } from 'lorem-ipsum';

import { View, Text, Image, Button, Spacer, Divider, List, Heading, Clickable } from '../components';

const placesLorem = new LoremIpsum({
  sentencesPerParagraph: {
    min: 4,
    max: 8,
  },
  wordsPerSentence: {
    min: 4,
    max: 16,
  }
});

const capitalize = words => {
  return words.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
};

const styles = {};

const Places = () => {
  return (
    <View flex padding="medium" background="gray-1">
      <List horizontal wrap spacerSize="medium">
        {Array.from({ length: 3 }, (_, index) => (
          <List divider spacerSize="medium" itemFlex itemMinWidth={350} flex padding="medium" background="white" border borderRadius>
            <View itemFlex>
              <Text fontSize="medium" fontWeight="semibold">{capitalize(placesLorem.generateWords(3))}</Text>
              <Spacer />
              <List horizontal>
                <Text color="yellow-5">★★★★✩</Text>
                <Text xcolor="yellow-5">$$</Text>
              </List>
              <Spacer size="medium" />
              <Text>{placesLorem.generateSentences(2)}</Text>
            </View>
            <View>
              <Text fontWeight="semibold">Reserve a Table</Text>
              <Spacer />
              <List horizontal spacerSize="small" horizontalPadding="medium" style={{ overflowX: 'auto', marginLeft: -15, marginRight: -15 }} className={styles.noScrollbar}>
                <Button fontWeight="normal" borderRadius="max" solid title="10:00 AM" />
                <Button fontWeight="normal" borderRadius="max" solid title="10:30 AM" />
                <Button fontWeight="normal" borderRadius="max" solid title="10:00 AM" />
                <Button fontWeight="normal" borderRadius="max" solid title="10:30 AM" />
              </List>
            </View>
          </List>
        ))}
        <View itemFlex itemMinWidth={350} xstyle={{ minWidth: 350 }} />
      </List>
    </View>
  );
};

export default Places;
