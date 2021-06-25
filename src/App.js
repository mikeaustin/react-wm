import React, { useRef, useState, useEffect } from 'react';
import classNames from 'classnames';

import 'open-color/open-color.css';
import styles from './App.module.css';

import { View, Text, Button, Spacer, Divider, List, Heading } from './components';
import VideoPlayer from './VideoPlayer';

const Window = ({ title, noPadding, style, children, onWindowFocus, onWindowBlur, ...props }) => {
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
      <View alignItems="center" padding="small" background="gray-1" topBorderRadius onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
        <Text fontWeight="bold">{title}</Text>
      </View>
      {/* <Divider size="none" /> */}
      <View padding={!noPadding && 'medium'}>
        {children}
      </View>
    </View>
  );
};

const ExampleWindow = ({ onWindowFocus, onWindowBlur }) => {
  const textRef = useRef();

  useEffect(() => {
    textRef.current.style.position = 'absolute';
    textRef.current.style.width = textRef.current.offsetWidth + 'px';
    textRef.current.style.position = null;
  });

  return (
    <View>
      <View horizontal>
        <View justifyContent="center" alignItems="center">
          <Text fontSize="xlarge" style={{ zIndex: 1 }}>Hero (36px)</Text>
          <Spacer background="gray-1" />
          <Text fontSize="large" style={{ zIndex: 1 }}>Large (24px)</Text>
          <Spacer background="gray-1" />
          <Text fontSize="medium" style={{ zIndex: 1 }}>Medium (18px)</Text>
          <Spacer background="gray-1" />
          <Text style={{ zIndex: 1 }}>Small (14px)</Text>
          <Spacer background="gray-1" />
          <Text fontSize="xsmall" style={{ zIndex: 1 }}>Extra Small (12px)</Text>
          <Spacer background="gray-1" />
          <List horizontal spacerSize="small" alignItems="flex-end">
            <Text fontWeight="bold" style={{ zIndex: 1 }}>Bold</Text>
            <Text fontWeight="semibold" style={{ zIndex: 1 }}>Semibold</Text>
            <Text fontWeight="medium" style={{ zIndex: 1 }}>Medium</Text>
            <Text fontWeight="light" style={{ zIndex: 1 }}>Light</Text>
          </List>
          <Spacer background="gray-1" />
          <List horizontal spacerSize="small" alignItems="flex-end">
            <Text color="gray-7" style={{ zIndex: 1, whiteSpace: 'nowrap' }}>Gray 7</Text>
            <Text color="gray-5" style={{ zIndex: 1, whiteSpace: 'nowrap' }}>Gray 5</Text>
            <Text color="gray-3" style={{ zIndex: 1, whiteSpace: 'nowrap' }}>Gray 3</Text>
          </List>
        </View>
        <Spacer />
        <Divider />
        <Spacer />
        <View justifyContent="center" alignItems="center">
          <List horizontal spacerSize="small">
            <Button link primary title="Link" />
            <Button title="Default" />
            <Button solid title="Solid" />
            <Button primary title="Primary" />
            <Button primary solid title="Primary Solid" />
          </List>
          <Spacer />
          <List horizontal alignItems="center" spacerSize="small">
            <Button link primary title="Multiline\nLink" />
            <Button title="Multiline\nDefault" />
            <Button solid title="Multiline\nSolid" />
            <Button primary title="Multiline\nPrimary" />
            <Button primary solid title="Multiline\nPrimary Solid" />
          </List>
          <Spacer />
          <List horizontal alignItems="center" spacerSize="small">
            <Button link primary disabled title="Link" />
            <Button disabled title="Default" />
            <Button disabled solid title="Solid" />
            <Button disabled primary title="Primary" />
            <Button disabled primary solid title="Primary Solid" />
          </List>
        </View>
      </View>
      <Divider size="medium" />
      <View horizontal>
        <View padding="medium" background="gray-1" />
        <View padding="medium" background="gray-3" />
        <View padding="medium" background="gray-5" />
        <View padding="medium" background="gray-7" />
        <View padding="medium" background="gray-9" />
        <View padding="medium" background="blue-1" />
        <View padding="medium" background="blue-3" />
        <View padding="medium" background="blue-5" />
        <View padding="medium" background="blue-7" />
        <View padding="medium" background="blue-9" />
      </View>
      <Divider size="medium" />
      <View horizontal>
        <Text ref={textRef}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </Text>
      </View>
      <Divider size="medium" />
      <View horizontal justifyContent="center">
        <Button primary title="Back" />
        <Spacer />
        <Button solid primary title={"Continue"} />
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

  useEffect(() => {
    (async () => {
      const calculator = await import(/* webpackIgnore: true */ '/widgets/bundle.js');
      const Widget = calculator.default;

      addWindow(
        <VideoPlayer src="videos/trailer.webm" />,
        { title: 'Video', noPadding: true, style: { left: 50, top: 50 } }
      );

      addWindow(
        <ExampleWindow key={3} onWindowFocus={handleWindowFocus} onWindowBlur={handleWindowBlur} />,
        { title: 'Examples', style: { left: 50, top: 400 } }
      );

      addWindow(
        <View style={{ width: 320 }}>
          <List divider level={2} horizontalPadding="medium" spacerSize="none">
            <Heading imageSrc="https://f4.bcbits.com/img/a3221996752_10.jpg" title="Canyons on Fire" subtitle="Wild Nothing" />
            <Heading imageSrc="https://f4.bcbits.com/img/a3221996752_10.jpg" title="What She Came For" subtitle="Franz Ferdinand" />
            <Heading imageSrc="https://f4.bcbits.com/img/a3221996752_10.jpg" title="John Wick Mode" subtitle="Le Castle Vania" />
          </List>
        </View>,
        { title: 'Songs', noPadding: true, style: { left: 50, top: 800 } }
      );

      addWindow(
        <Widget components={{ View, Text, Button, Spacer, Divider, List }} />,
        { title: 'Calculator', background: 'gray-1', style: { left: 500, top: 800 } }
      );
    })();

    return () => {
      setWindowList([]);
    };
  }, []);

  return (
    <View background="gray-3" className={styles.App} onMouseMove={handleMouseMove}>
      {windowList}
    </View>
  );
}

export default App;
