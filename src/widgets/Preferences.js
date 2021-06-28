/* eslint no-unused-vars: "off" */

import React, { useState } from 'react';

import { View, Text, Image, Button, Spacer, Divider, List, Heading, Clickable } from '../components';
import { MenuBar, Panel } from '../components';

const backgroundUrls = [
  './images/d1e91a4058a8a1082da711095b4e0163.png',
  './images/modern_abstract-wallpaper-3440x1440.jpg',
  './images/781767.jpg',
  './images/16933.jpg',
  './images/274355.jpg',
  './images/1638117.png',
  './images/2685046.jpg',
  './images/9Azi4uS.jpg',
  './images/Star Wars ultra widescreen backgrounds Album on Imgur.jpg',
];

const Swatch = ({ color, onColorSelect, ...props }) => {
  const handleClick = () => {
    onColorSelect(color);
  };

  return (
    <Clickable flex style={{ height: 25 }} background={color} onMouseDown={handleClick} {...props} />
  );
};

const Preferences = ({ onSetBackground }) => {
  const handleColorSelect = (color) => {
    document.documentElement.style.setProperty('--primary-color', `var(--oc-${color})`);
  };

  return (
    <View style={{ width: 500 }}>
      <Panel tabs={['Background', 'Primary Color']}>
        <View>
          <List horizontal divider wrap spacerSize="none">
            {backgroundUrls.map(url => (
              <Clickable key={url} itemWidth="33.33%" tabIndex="0" onClick={onSetBackground}>
                <Image src={url} borderRadius />
              </Clickable>
            ))}
          </List>
        </View>
        <View>
          <View horizontal>
            {Array.from({ length: 10 }, (_, index) => (
              <Swatch key={index} color={`red-${index}`} onColorSelect={handleColorSelect} />
            ))}
          </View>
          <View horizontal>
            {Array.from({ length: 10 }, (_, index) => (
              <Swatch key={index} color={`pink-${index}`} onColorSelect={handleColorSelect} />
            ))}
          </View>
          <View horizontal>
            {Array.from({ length: 10 }, (_, index) => (
              <Swatch key={index} color={`grape-${index}`} onColorSelect={handleColorSelect} />
            ))}
          </View>
          <View horizontal>
            {Array.from({ length: 10 }, (_, index) => (
              <Swatch key={index} color={`violet-${index}`} onColorSelect={handleColorSelect} />
            ))}
          </View>
          <View horizontal>
            {Array.from({ length: 10 }, (_, index) => (
              <Swatch key={index} color={`indigo-${index}`} onColorSelect={handleColorSelect} />
            ))}
          </View>
          <View horizontal>
            {Array.from({ length: 10 }, (_, index) => (
              <Swatch key={index} color={`blue-${index}`} onColorSelect={handleColorSelect} />
            ))}
          </View>
          <View horizontal>
            {Array.from({ length: 10 }, (_, index) => (
              <Swatch key={index} color={`cyan-${index}`} onColorSelect={handleColorSelect} />
            ))}
          </View>
          <View horizontal>
            {Array.from({ length: 10 }, (_, index) => (
              <Swatch key={index} color={`teal-${index}`} onColorSelect={handleColorSelect} />
            ))}
          </View>
          <View horizontal>
            {Array.from({ length: 10 }, (_, index) => (
              <Swatch key={index} color={`green-${index}`} onColorSelect={handleColorSelect} />
            ))}
          </View>
          <View horizontal>
            {Array.from({ length: 10 }, (_, index) => (
              <Swatch key={index} color={`lime-${index}`} onColorSelect={handleColorSelect} />
            ))}
          </View>
          <View horizontal>
            {Array.from({ length: 10 }, (_, index) => (
              <Swatch key={index} color={`yellow-${index}`} onColorSelect={handleColorSelect} />
            ))}
          </View>
          <View horizontal>
            {Array.from({ length: 10 }, (_, index) => (
              <Swatch key={index} color={`orange-${index}`} onColorSelect={handleColorSelect} />
            ))}
          </View>
        </View>
      </Panel>
      <Divider size="medium" />
      <List horizontal justifyContent="center" spacerSize="small">
        <Button primary title="Close" />
        <Button primary solid title="Apply" />
      </List>
    </View>
  );
};

export default Preferences;
