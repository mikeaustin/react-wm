import React, { useState } from 'react';

import './App.css';

const View = ({ horizontal, style, lazy, force, children, ...props }) => {
  if (lazy && !force) {
    return null;
  }

  return (
    <div {...props} style={{ padding: 10, display: 'flex', flexDirection: horizontal ? '' : 'column', ...style }}>
      {children}
    </div>
  );
};

const Text = ({ children }) => {
  return (
    <div>{children}</div>
  );
};

const Tab = ({ title, index, active, onSelectTab }) => {
  console.log('Tab()', index);

  const handleClick = () => {
    onSelectTab(index);
  };

  return (
    <View style={{ borderBottom: active && '2px solid blue' }} onClick={handleClick}>
      <Text>{title}</Text>
    </View>
  );
};

const Tabbar = ({ data, activeTabIndex, onSelectTab }) => {
  return (
    <View horizontal style={{ borderBottom: '1px solid black' }}>
      {data.map((name, index) => (
        <Tab key={index} title={name} index={index} active={index === activeTabIndex} onSelectTab={onSelectTab} />
      ))}
    </View>
  );
};

const Tabs = ({ labels, children }) => {
  console.log('Tabs()');

  const [activeTabIndex, setCurrentTabIndex] = useState(0);

  const handleSelectTab = (index) => {
    setCurrentTabIndex(index);
  };

  const content = React.Children.toArray(children)[activeTabIndex];

  return (
    <View>
      <Tabbar data={labels} activeTabIndex={activeTabIndex} onSelectTab={handleSelectTab} />
      <View>
        {content.props.lazy ? React.cloneElement(content, { force: true }) : content}
      </View>
    </View>
  );
};

function App() {
  return (
    <div className="App">
      <Tabs labels={['Tab 1', 'Tab 2', 'Tab 3']}>
        <View lazy>
          <Text>Tab 1 Content</Text>
        </View>
        <View lazy>
          <Text>Tab 2 Content</Text>
        </View>
        <View lazy>
          <Text>Tab 3 Content</Text>
        </View>
      </Tabs>
    </div>
  );
}

export default App;
