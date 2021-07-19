/* eslint no-unused-vars: "off" */

import React, { useRef, useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';

import 'open-color/open-color.css';
import styles from './App.module.css';
import './styles/spacing.css';

import { View, Text, Image, Button, Spacer, Divider, List, Heading } from './components';
import VideoPlayer from './VideoPlayer';
import Examples from './widgets/Examples';
import Preferences from './widgets/Preferences';
import Clock from './widgets/Clock';
import Calendar from './widgets/Calendar';
import S3Browser from './widgets/S3Browser';
import Editor from './widgets/Editor';
import AppBar from './components/AppBar';

import { Window, MenuBar } from './components';

import { LoremIpsum } from 'lorem-ipsum';

const creditsLorem = new LoremIpsum({
  sentencesPerParagraph: {
    min: 4,
    max: 8,
  },
  wordsPerSentence: {
    min: 2,
    max: 3,
  }
});

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

window.React = React;

const components = { View, Text, Image, Button, Spacer, Divider, List, Heading };

function App() {
  const windowElementRef = useRef(null);
  const mouseModeRef = useRef(null);
  const firstMouseRef = useRef(null);
  const lastMouseRef = useRef(null);
  const [backgroundUrl, setBackgroundUrl] = useState('./images/d1e91a4058a8a1082da711095b4e0163.jpg');
  const [windowElements, setWindowElements] = useState([]);
  const [windowIndexes, setWindowIndexes] = useState([]);
  const nextWindowIdRef = useRef(0);

  console.log('App()', windowElements);

  const handleWindowActivate = (windowId) => {
    setWindowIndexes((windowIndexes) => {
      if (windowId === windowIndexes[windowIndexes.length - 1]) {
        return windowIndexes;
      }

      return [...windowIndexes.filter(id => id !== windowId), windowId];
    });
  };

  const handleWindowFocus = useCallback((windowElement, mouseX, mouseY, id) => {
    windowElementRef.current = windowElement;
    firstMouseRef.current = { mouseX, mouseY };
    mouseModeRef.current = ['move'];

    windowElement.style.willChange = 'left, top';
  }, []);

  const handleWindowBlur = useCallback(() => {
    windowElementRef.current.style.willChange = '';

    windowElementRef.current = null;
    mouseModeRef.current = null;
  }, []);

  const handleMouseDown = (event) => {
    console.log('handleMouseDown()');

    lastMouseRef.current = { clientX: event.clientX, clientY: event.clientY };
  };

  const handleMouseMove = useCallback((event) => {
    // console.log('handleMouseMove()');

    if (!mouseModeRef.current) {
      return;
    }

    const movementX = event.movementX !== null
      ? event.movementX
      : event.clientX - lastMouseRef.current.clientX;
    const movementY = event.movementY !== null
      ? event.movementY
      : event.clientY - lastMouseRef.current.clientY;

    lastMouseRef.current = { clientX: event.clientX, clientY: event.clientY };

    if (mouseModeRef.current[0] === 'move') {
      event.preventDefault();

      windowElementRef.current.style.left = `${event.clientX - firstMouseRef.current.mouseX}px`;
      windowElementRef.current.style.top = `${event.clientY - firstMouseRef.current.mouseY - 30}px`;

      return;
    }

    if (mouseModeRef.current[0] === 'right') {
      windowElementRef.current.style.width = `${windowElementRef.current.offsetWidth + movementX}px`;
    } else if (mouseModeRef.current[0] === 'left') {
      windowElementRef.current.style.left = `${windowElementRef.current.offsetLeft + movementX}px`;
      windowElementRef.current.style.width = `${windowElementRef.current.offsetWidth - movementX}px`;
    }

    if (mouseModeRef.current[1] === 'bottom') {
      windowElementRef.current.style.height = `${windowElementRef.current.offsetHeight + movementY}px`;
    } else if (mouseModeRef.current[1] === 'top') {
      windowElementRef.current.style.top = `${windowElementRef.current.offsetTop + movementY}px`;
      windowElementRef.current.style.height = `${windowElementRef.current.offsetHeight - movementY}px`;
    }
  }, []);

  const handleWindowResizeStart = (windowElement, mode) => {
    windowElementRef.current = windowElement;
    mouseModeRef.current = mode;
  };

  const handleWindowResizeEnd = () => {
    windowElementRef.current = null;
    mouseModeRef.current = null;
  };

  const handleSetBackground = useCallback((event) => {
    setBackgroundUrl(event.target.src);
  }, []);

  const addWindow = useCallback((element, props) => {
    setWindowElements((windowElements) => [
      ...windowElements,
      <Window
        key={nextWindowIdRef.current}
        id={nextWindowIdRef.current}
        title={props.title}
        onWindowActivate={handleWindowActivate}
        onWindowFocus={handleWindowFocus}
        onWindowBlur={handleWindowBlur}
        onWindowResizeStart={handleWindowResizeStart}
        onWindowResizeEnd={handleWindowResizeEnd}
        {...props}
      >
        {element}
      </Window>
    ]);

    setWindowIndexes(windowIndexes => [
      ...windowIndexes,
      nextWindowIdRef.current
    ]);

    nextWindowIdRef.current += 1;
  }, [handleWindowFocus, handleWindowBlur]);

  const importModule = async (name) => {
    const module = await import(/* webpackIgnore: true */ `${window.location.hostname === 'localhost' ? '' : '../..'}/widgets/${name}`);

    return module.default;
  };

  useEffect(() => {
    (async () => {
      addWindow(<Editor />, {
        title: 'Editor', noPadding: true, background: 'gray-1', style: {
          left: 950, top: 100, width: 550, height: 300
        }
      });

      const Calculator = await importModule('calculator.js');

      // addWindow(<VideoPlayer src="videos/trailer.webm" />, {
      //   title: 'Video', noPadding: true, noBorder: true, style: { left: 890, top: 15 }
      // });

      addWindow(<Examples />, {
        title: 'Examples', style: { left: 15, top: 15 }
      });

      const Mail = await importModule('mail.js');

      addWindow(<Mail components={components} />, {
        title: 'Mail', noPadding: true, style: { left: 15, top: 420, width: 900, height: 400 }
      });

      addWindow(<Calculator components={components} />, {
        title: 'Calculator', noPadding: true, noBorder: true, background: 'gray-4', style: { left: 1600, top: 60 }
      });

      addWindow(<Preferences onSetBackground={handleSetBackground} />, {
        title: 'Preferences', xbackground: 'gray-1', style: { left: 1000, top: 450, width: 500 }
      });

      addWindow(<Clock />, {
        title: 'Clock', style: { left: 1600, top: 450, width: 200, height: 230 }
      }
      );

      addWindow(<S3Browser />, {
        title: 'S3 Browser', noPadding: true, style: { left: 850, top: 70 }
      }
      );

      addWindow(<Calendar />, {
        title: 'Calendar', noPadding: true
      });

      const textProps = {
        fontSize: 'large',
        color: 'white',
        style: { whiteSpace: 'nowrap', flex: '1 0 50%' }
      };

      const capitalize = words => {
        return words.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
      };

      // addWindow(
      //   <View flex background="black">
      //     <List spacerSize="medium" style={{ paddingTop: '400px', animation: `${styles.scroll} 40s linear` }}>
      //       {Array.from({ length: 30 }, (_, index) => (
      //         <View horizontal itemFlex flex alignItems="flex-end">
      //           <Text {...textProps} fontSize="small" style={{ ...textProps.style, textAlign: 'right' }}>
      //             {creditsLorem.generateWords(2).toUpperCase()}
      //           </Text>
      //           <Spacer size="large" />
      //           <Text  {...textProps}>{creditsLorem.generateWords(2).toUpperCase()}</Text>
      //         </View>
      //       ))}
      //     </List>
      //   </View>,
      //   { title: 'Credits', noPadding: true, style: { width: 800, height: 400 } }
      // );

      addWindow(
        <View flex padding="medium" background="gray-1">
          <List horizontal wrap spacerSize="medium">
            {Array.from({ length: 3 }, (_, index) => (
              <List divider spacerSize="medium" itemFlex itemMinWidth={350} flex padding="medium" background="white" border borderRadius>
                <View itemFlex>
                  <Text fontSize="medium" fontWeight="semibold">{capitalize(creditsLorem.generateWords(3))}</Text>
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
                    <Button fontWeight="normal" borderRadius="rounded" solid title="10:00 AM" />
                    <Button fontWeight="normal" borderRadius="rounded" solid title="10:30 AM" />
                    <Button fontWeight="normal" borderRadius="rounded" solid title="10:00 AM" />
                    <Button fontWeight="normal" borderRadius="rounded" solid title="10:30 AM" />
                  </List>
                </View>
              </List>
            ))}
            <View itemFlex itemMinWidth={350} xstyle={{ minWidth: 350 }} />
          </List>
        </View>,
        { title: 'Places', noPadding: true, style: { width: 900, xheight: 400 } }
      );
    })();

    return () => {
      setWindowElements([]);
    };
  }, [addWindow, handleSetBackground]);

  return (
    <View
      flex
      background="gray-3"
      className={styles.App}
      style={{ background: `center / cover url(${backgroundUrl})`, WebkitUserSelect: 'none' }}
      onPointerDown={handleMouseDown}
      onPointerMove={handleMouseMove}
    >
      <MenuBar />
      <View flex>
        {windowElements.map(windowElement => React.cloneElement(windowElement, {
          zIndex: windowIndexes.indexOf(windowElement.props.id)
        }))}
      </View>
      <View horizontal>
        <View alignItems="center" verticalPadding="medium" style={{ width: 100 }}>
          <View background="white" borderRadius style={{ width: 50, height: 50 }} />
          <Spacer />
          <Text>Clock</Text>
        </View>
        <View alignItems="center" verticalPadding="medium" style={{ width: 100 }}>
          <View background="white" borderRadius style={{ width: 50, height: 50 }} />
          <Spacer />
          <Text>Calculator</Text>
        </View>
        <View alignItems="center" verticalPadding="medium" style={{ width: 100 }}>
          <View background="white" borderRadius style={{ width: 50, height: 50 }} />
          <Spacer />
          <Text>Preferences</Text>
        </View>
      </View>
      <AppBar
        windowElements={windowElements}
        activeWindowId={windowIndexes[windowIndexes.length - 1]}
        onWindowActivate={handleWindowActivate}
      />
    </View>
  );
}

export default App;
