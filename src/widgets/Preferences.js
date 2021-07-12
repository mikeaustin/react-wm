/* eslint no-unused-vars: "off" */

import React, { useState } from 'react';

import { View, Text, Image, Button, Spacer, Divider, List, Heading, Clickable } from '../components';
import { MenuBar, Panel, Field } from '../components';

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

const colors = [
  'red',
  'pink',
  'grape',
  'violet',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'green',
  'lime',
  'yellow',
  'orange'
];

const Swatch = ({ color, onColorSelect, ...props }) => {
  const handleClick = () => {
    onColorSelect(color);
  };

  return (
    <Clickable flex style={{ height: 25 }} background={color} onMouseDown={handleClick} {...props} />
  );
};

const SwatchRow = ({ hue, onColorSelect }) => {
  return (
    <View horizontal>
      {Array.from({ length: 10 }, (_, index) => (
        <Swatch key={index} color={`${hue}-${index}`} onColorSelect={onColorSelect} />
      ))}
    </View>
  );
};
const Preferences = ({ onSetBackground }) => {
  const handleColorSelect = (color) => {
    document.documentElement.style.setProperty('--primary-color', `var(--oc-${color})`);
  };

  return (
    <View>
      <Panel tabs={['Background', 'Primary Color', 'User Info']}>
        <View>
          <List horizontal wrap spacerSize="none">
            {backgroundUrls.map(url => (
              <Clickable key={url} itemWidth="33.33%" tabIndex="0" onClick={onSetBackground}>
                <Image src={url} width="100%" borderRadius />
              </Clickable>
            ))}
          </List>
        </View>
        <View>
          {colors.map((color, index) => (
            <SwatchRow key={index} hue={color} onColorSelect={handleColorSelect} />
          ))}
        </View>
        <View horizontal alignItems="center">
          <View flex padding="medium" style={{ xwidth: '100%', maxWidth: 300 }}>
            <Field itemFlex title="Username" options={['john@example.com']} />
            <Spacer size="large" />
            <Field itemFlex title="Password" />
          </View>
          <View flex padding="medium" style={{ xwidth: '100%', maxWidth: 300 }}>
            <Field variant="document" title="Username" options={['john@example.com']} />
            <Spacer size="large" />
            <Field variant="document" title="Password" />
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
