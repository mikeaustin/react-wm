/* eslint no-unused-vars: "off" */

import React, { useRef, useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';

import 'open-color/open-color.css';
import styles from './App.module.css';

import { View, Text, Image, Button, Spacer, Divider, List, Heading, Clickable, Window } from './components';
import VideoPlayer from './VideoPlayer';
import Examples from './widgets/Examples';
import Preferences from './widgets/Preferences';
import Mail from './widgets/Mail';

import { MenuBar, Panel } from './components';

function App() {
  const windowElementRef = useRef(null);
  const firstMouseRef = useRef(null);
  const [backgroundUrl, setBackgroundUrl] = useState('./images/d1e91a4058a8a1082da711095b4e0163.png');
  const [windowList, setWindowList] = useState([]);
  const nextWindowIdRef = useRef(0);

  console.log('App()', windowList);

  const handleWindowFocus = useCallback((windowElement, mouseX, mouseY, id) => {
    windowElementRef.current = windowElement;
    firstMouseRef.current = { mouseX, mouseY };

    setWindowList((windowList) => {
      const activeWindow = windowList.find(window => window.props.id === id);

      return [
        ...windowList.filter(window => window.props.id !== id),
        activeWindow,
      ];
    });

  }, [setWindowList]);

  const handleWindowBlur = useCallback((window, mouseX, mouseY) => {
    windowElementRef.current = null;
  }, []);

  const handleMouseMove = useCallback((event) => {
    if (windowElementRef.current) {
      event.preventDefault();

      windowElementRef.current.style.left = `${event.clientX - firstMouseRef.current.mouseX}px`;
      windowElementRef.current.style.top = `${event.clientY - firstMouseRef.current.mouseY - 30}px`;
    }
  }, []);

  const handleSetBackground = useCallback((event) => {
    setBackgroundUrl(event.target.src);
  }, []);

  const addWindow = useCallback((element, props) => {
    setWindowList((windowList) => [
      ...windowList,
      <Window
        key={nextWindowIdRef.current}
        id={nextWindowIdRef.current}
        onWindowFocus={handleWindowFocus}
        onWindowBlur={handleWindowBlur}
        {...props}
      >
        {element}
      </Window>
    ]);

    nextWindowIdRef.current = nextWindowIdRef.current + 1;
  }, [handleWindowFocus, handleWindowBlur]);

  useEffect(() => {
    (async () => {
      const calculator = await import(/* webpackIgnore: true */ '/widgets/bundle.js');
      const Widget = calculator.default;

      addWindow(<VideoPlayer src="videos/trailer.webm" />, {
        title: 'Video', noPadding: true, style: { left: 890, top: 15 }
      });

      addWindow(<Examples />, {
        title: 'Examples', style: { left: 15, top: 15 }
      });

      addWindow(<Mail />, {
        title: 'Mail', noPadding: true, style: { left: 15, top: 480 }
      });

      addWindow(
        <Widget components={{ View, Text, Button, Spacer, Divider, List }} />, {
        title: 'Calculator', background: 'gray-1', style: { left: 490, top: 540 }
      });

      addWindow(<Preferences onSetBackground={handleSetBackground} />, {
        title: 'Preferences', xbackground: 'gray-1', style: { left: 950, top: 400 }
      });
    })();

    return () => {
      setWindowList([]);
    };
  }, [addWindow, handleSetBackground]);

  return (
    <View
      flex
      background="gray-3"
      className={styles.App}
      style={{ background: `center / cover url(${backgroundUrl})` }}
      onMouseMove={handleMouseMove}
    >
      <MenuBar />
      <View flex>
        {windowList}
      </View>
    </View>
  );
}

export default App;
