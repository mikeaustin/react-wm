/* eslint no-unused-vars: "off" */

import React, { useState } from 'react';

import { View, Text, Image, Button, Spacer, Divider, List, Heading, Clickable } from '../components';

const Tab = ({ title, index, active, onSelectTab }) => {
  console.log('Tab()', index);

  const handleClick = () => {
    onSelectTab(index);
  };

  return (
    <View padding="small" horizontalPadding="medium" style={{ borderBottom: active && '2px solid var(--primary-color)', marginBottom: -1 }} onMouseDown={handleClick}>
      <Text fontWeight={active && 'bold'} style={{ letterSpacing: active && -0.6 }}>{title}</Text>
    </View>
  );
};

const TabBar = ({ data, activeTabIndex, onSelectTab }) => {
  if (!data) {
    return null;
  }

  return (
    <View horizontal style={{ borderBottom: '1px solid #dee2e6' }}>
      {data.map((name, index) => (
        <Tab
          key={index}
          title={name}
          index={index}
          active={index === activeTabIndex}
          onSelectTab={onSelectTab}
        />
      ))}
    </View>
  );
};

const Panel = ({ tabs, children }) => {
  const [activeTabIndex, setCurrentTabIndex] = useState(0);

  const handleSelectTab = (index) => {
    setCurrentTabIndex(index);
  };

  const content = React.Children.toArray(children)[activeTabIndex];

  return (
    <View style={{ marginTop: -5 }}>
      <TabBar data={tabs} activeTabIndex={activeTabIndex} onSelectTab={handleSelectTab} />
      <Spacer size="medium" />
      <View>
        {content?.props.lazy ? React.cloneElement(content, { force: true }) : content}
      </View>
    </View>
  );
};

export default Panel;
