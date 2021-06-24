import React, { useRef, useState, useEffect } from 'react';
import classNames from 'classnames';

import 'open-color/open-color.css';
import styles from './App.module.css';

import { View, Text, Button, Spacer, Divider, List, Heading } from './components';
import VideoPlayer from './VideoPlayer';

const Window = ({ noPadding, style, children, onWindowFocus, onWindowBlur, ...props }) => {
  console.log('Window()');

  const windowRef = useRef();

  const handleMouseDown = (event) => {
    console.log('here', event);

    event.preventDefault();

    const boundingClientRect = windowRef.current.getBoundingClientRect();

    onWindowFocus(
      windowRef.current,
      event.clientX - boundingClientRect.left,
      event.clientY - boundingClientRect.top
    );
  };

  const handleMouseUp = (event) => {
    console.log('here', event);

    onWindowBlur(windowRef.current, event.nativeEvent.offsetX, event.nativeEvent.offsetY);
  };

  const windowStyle = {
    alignSelf: 'flex-start',
    position: 'absolute',
    ...style
  };

  return (
    <View ref={windowRef} background="white" boxShadow borderRadius style={windowStyle} {...props}>
      <View alignItems="center" padding="medium" background="gray-1" topBorderRadius onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
        <Text fontWeight="bold">Title</Text>
      </View>
      {/* <Divider size="none" /> */}
      <View padding={!noPadding && 'medium'}>
        {children}
      </View>
    </View>
  );
};

const ExampleWindow = ({ onWindowFocus, onWindowBlur }) => {
  return (
    <View>
      <View horizontal>
        <View justifyContent="center" alignItems="center">
          <Spacer background="gray-1" />
          <Text>TEXT TEXT</Text>
          <Spacer background="gray-1" />
          <Text>TEXT TEXT TEXT</Text>
          <Spacer background="gray-1" />
        </View>
        <Spacer />
        <Divider />
        <Spacer />
        <View justifyContent="center" alignItems="center">
          <Text>TEXT TEXT</Text>
          <Spacer background="gray-1" />
          <Text>TEXT TEXT</Text>
          <Spacer background="gray-1" />
          <View horizontal>
            <Button title="Secondary" />
            <Spacer />
            <Button primary title="Primary" />
          </View>
        </View>
      </View>
      <Divider size="medium" />
      <View horizontal justifyContent="center">
        <Button secondary title="Back" />
        <Spacer />
        <Button primary title="Continue" />
      </View>
    </View>
  );
};

function App() {
  const windowRef = useRef(null);
  const firstMouseRef = useRef(null);
  const [windowList, setWindowList] = useState([]);

  const handleWindowFocus = (window, mouseX, mouseY) => {
    windowRef.current = window;
    firstMouseRef.current = { mouseX, mouseY };
  };

  const handleWindowBlur = (window, mouseX, mouseY) => {
    windowRef.current = null;
  };

  const handleMouseMove = (event) => {
    if (windowRef.current) {
      event.preventDefault();

      windowRef.current.style.left = `${event.clientX - firstMouseRef.current.mouseX}px`;
      windowRef.current.style.top = `${event.clientY - firstMouseRef.current.mouseY}px`;
    }
  };

  const addWindow = (element, props) => {
    setWindowList((windowList) => [
      ...windowList,
      <Window key={Math.random()} {...props} onWindowFocus={handleWindowFocus} onWindowBlur={handleWindowBlur}>
        {element}
      </Window>
    ]);
  };

  useEffect(async () => {
    const calculator = await import(/* webpackIgnore: true */ '/widgets/bundle.js');
    const Widget = calculator.default;

    addWindow(
      <VideoPlayer src="videos/trailer.webm" />,
      { noPadding: true, style: { left: 100, top: 50 } }
    );

    addWindow(
      <ExampleWindow key={3} onWindowFocus={handleWindowFocus} onWindowBlur={handleWindowBlur} />,
      { style: { left: 100, top: 400 } }
    );

    addWindow(
      <View style={{ width: 320 }}>
        <List divider level={2} horizontalPadding="medium" spacerSize="none">
          <Heading imageSrc="https://f4.bcbits.com/img/a3221996752_10.jpg" title="Canyons on Fire" subtitle="Wild Nothing" />
          <Heading imageSrc="https://f4.bcbits.com/img/a3221996752_10.jpg" title="What She Came For" subtitle="Franz Ferdinand" />
          <Heading imageSrc="https://f4.bcbits.com/img/a3221996752_10.jpg" title="John Wick Mode" subtitle="Le Castle Vania" />
        </List>
      </View>,
      { noPadding: true, style: { left: 100, top: 650 } }
    );

    addWindow(
      <Widget components={{ View, Text, Button, Spacer, Divider, List }} />,
      { style: { left: 550, top: 450 } }
    );
  }, []);

  return (
    <View background="gray-1" className={styles.App} onMouseMove={handleMouseMove}>
      {windowList}
    </View>
  );
}

export default App;
