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
import Clock from './widgets/Clock';

import { MenuBar, Panel } from './components';

function App() {
  const windowElementRef = useRef(null);
  const firstMouseRef = useRef(null);
  const [backgroundUrl, setBackgroundUrl] = useState('./images/d1e91a4058a8a1082da711095b4e0163.jpg');
  const [windowList, setWindowList] = useState([]);
  const nextWindowIdRef = useRef(0);
  const editorRef = useRef();

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

  const handleInput = event => {
    console.log(event.currentTarget.childNodes.length);
  };

  useEffect(() => {
    (async () => {
      const calculator = await import(/* webpackIgnore: true */ `${window.location.hostname === 'localhost' ? '' : '.'}/widgets/calculator.js`);
      const Widget = calculator.default;

      addWindow(<VideoPlayer src="videos/trailer.webm" />, {
        title: 'Video', noPadding: true, style: { left: 890, top: 15 }
      });

      addWindow(<Examples />, {
        title: 'Examples', style: { left: 15, top: 15 }
      });

      addWindow(<Mail />, {
        title: 'Mail', noPadding: true, style: { left: 15, top: 450 }
      });

      addWindow(
        <Widget components={{ View, Text, Button, Spacer, Divider, List }} />, {
        title: 'Calculator', background: 'gray-1', style: { left: 950, top: 60 }
      });

      addWindow(<Preferences onSetBackground={handleSetBackground} />, {
        title: 'Preferences', xbackground: 'gray-1', style: { left: 1050, top: 450 }
      });

      addWindow(
        <View flex>
          <View flex horizontal>
            <View style={{ margin: '0 10px' }} verticalPadding="medium">
              <Text style={{ fontFamily: 'monospace', textAlign: 'right' }}>
                1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />10<br />
                11<br />12<br />13<br />14<br />15<br />16<br />17<br />18<br />19<br />20
              </Text>
            </View>
            <Divider size="none" />
            <View flex horizontalPadding="small" padding="medium" background="white" style={{ overflowX: 'auto' }}>
              <View
                ref={editorRef}
                tag="pre"
                flex
                contentEditable
                spellCheck="false"
                style={{ margin: '-5px 0', lineHeight: '20px' }}
                onInput={handleInput}
                onPaste={event => { event.preventDefault(); document.execCommand("inserttext", false, event.clipboardData.getData("text/plain")); }}
              >
                {`const Image = ({ src, width, height, ...props }) => {
  return (
    <View tag="img" src={src} style={{ width, height }} {...props} />
  );
};

`}
              </View>
            </View>
          </View>
        </View>, {
        title: 'Editor', noPadding: true, background: 'gray-1', style: {
          left: 1000, top: 100, width: 500, height: 300
        }
      });

      addWindow(
        <Clock />,
        { title: 'Clock', style: { left: 1100, top: 140, width: 200, height: 230 } }
      );
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
