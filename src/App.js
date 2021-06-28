/* eslint no-unused-vars: "off" */

import React, { useRef, useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';

import 'open-color/open-color.css';
import styles from './App.module.css';

import { View, Text, Image, Button, Spacer, Divider, List, Heading, Clickable, Window } from './components';
import VideoPlayer from './VideoPlayer';
import Examples from './Examples';
import Preferences from './Preferences';

import { MenuBar, Panel } from './components';

function App() {
  const windowRef = useRef(null);
  const firstMouseRef = useRef(null);
  const [backgroundUrl, setBackgroundUrl] = useState('./images/d1e91a4058a8a1082da711095b4e0163.png');
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
      windowRef.current.style.top = `${event.clientY - firstMouseRef.current.mouseY - 30}px`;
    }
  };

  const handleSetBackground = (event) => {
    setBackgroundUrl(event.target.src);
  };

  const addWindow = useCallback((element, props) => {
    setWindowList((windowList) => [
      ...windowList,
      <Window key={Math.random()} {...props} onWindowFocus={handleWindowFocus} onWindowBlur={handleWindowBlur}>
        {element}
      </Window>
    ]);
  }, []);

  useEffect(() => {
    (async () => {
      const calculator = await import(/* webpackIgnore: true */ '/widgets/bundle.js');
      const Widget = calculator.default;

      addWindow(
        <VideoPlayer src="videos/trailer.webm" />,
        { title: 'Video', noPadding: true, style: { left: 890, top: 15 } }
      );

      addWindow(
        <Examples key={3} onWindowFocus={handleWindowFocus} onWindowBlur={handleWindowBlur} />,
        { title: 'Examples', style: { left: 15, top: 15 } }
      );

      addWindow(
        <View style={{ width: 375 }}>
          <View padding="small" horizontalPadding="medium" background="gray-1">
            <Spacer size="small" />
            <Text fontSize="xxsmall" fontWeight="semibold" color="gray-6">TODAY</Text>
          </View>
          <Divider size="none" />
          <List divider="gray-2" level={2} spacerSize="none">
            <Heading
              image={<View background="primary" borderRadius="rounded" style={{ width: 10, height: 10 }} />}
              title="Tech for Less Order Confirmation TL1896893"
              subtitle="Tech for Less Orders"
              note="📎 ★"
              label="Jun 26, 2021"
              padding="medium"
            >
              <Text fontSize="xsmall">Thank you for the payment confirmation. I’ve uploaded</Text>
            </Heading>
            <Heading
              image={<View background="primary" borderRadius="rounded" style={{ width: 10, height: 10 }} />}
              subtitle="Tech for Less Order Confirmation TL1896893"
              title="Tech for Less Orders"
              label="📎 ★"
              note="Jun 26, 2021"
              padding="medium"
            >
              <Text fontSize="xsmall" style={{ height: 30, overflow: 'hidden' }}>
                Thank you for the payment confirmation. I’ve uploaded the declaration page of my car insurance, as requested.
              </Text>
            </Heading>
          </List>
          <Divider size="none" />
          <View padding="small" horizontalPadding="medium" background="gray-1">
            <Spacer size="small" />
            <Text fontSize="xxsmall" fontWeight="semibold" color="gray-6">YESTERDAY</Text>
          </View>
          <Divider size="none" />
          <List divider="gray-2" level={2} spacerSize="none">
            <Heading
              image={<View background="primary" borderRadius="rounded" style={{ width: 10, height: 10 }} />}
              title="Tech for Less Order Confirmation TL1896893"
              subtitle="Tech for Less Orders"
              padding="medium"
            />
            <Heading
              image={<View background="primary" borderRadius="rounded" style={{ width: 10, height: 10 }} />}
              title="Tech for Less Order Confirmation TL1896893"
              subtitle="Tech for Less Orders"
              padding="medium"
            />
          </List>
        </View>,
        { title: 'Mail', noPadding: true, style: { left: 15, top: 480 } }
      );

      addWindow(
        <Widget components={{ View, Text, Button, Spacer, Divider, List }} />,
        { title: 'Calculator', background: 'gray-1', style: { left: 490, top: 540 } }
      );

      addWindow(
        <Preferences onSetBackground={handleSetBackground} />,
        { title: 'Preferences', xbackground: 'gray-1', style: { left: 950, top: 400 } }
      );
    })();

    return () => {
      setWindowList([]);
    };
  }, [addWindow]);

  return (
    <View flex background="gray-3" className={styles.App} style={{ background: `center / cover url(${backgroundUrl})` }} onMouseMove={handleMouseMove}>
      <MenuBar />
      <View flex>
        {windowList}
      </View>
    </View>
  );
}

export default App;
