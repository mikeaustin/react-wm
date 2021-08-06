/* eslint no-unused-vars: "off" */

import React, { useRef, useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';

import 'open-color/open-color.css';
import styles from './App.module.css';
import './styles/spacing.css';

import { View, Text, Image, Button, Spacer, Divider, List, Heading } from './components';
import AppBar from './components/AppBar';

import VideoPlayer from './VideoPlayer';
import Examples from './widgets/Examples';
import Preferences from './widgets/Preferences';
import Clock from './widgets/Clock';
import Calendar from './widgets/Calendar';
import S3Browser from './widgets/S3Browser';
import Editor from './widgets/Editor';
import Places from './widgets/Places';
import Credits from './widgets/Credits';
import Fountain from './widgets/Fountain';
import WebGL from './widgets/WebGL';

import { Window, MenuBar } from './components';

window.React = React;

const importModule = async (name) => {
  const module = await import(/* webpackIgnore: true */ `${window.location.hostname === 'localhost'
    ? ''
    : '../..'}/widgets/${name}`);

  return module.default;
};

const components = { View, Text, Image, Button, Spacer, Divider, List, Heading };

const Module = ({ path }) => {
  const [Component, setComponent] = useState(null);
  importModule(path).then((c) => setComponent(() => c));

  if (!Component) {
    return null;
  }

  return <Component components={components} />;
};

const widgets = [
  { element: <Examples />, props: { title: 'Examples' } },
  { element: <VideoPlayer src="videos/trailer.webm" />, props: { title: 'Video', noPadding: true, noBorder: true, left: 830, top: 15 } },
  { element: <Clock />, props: { title: 'Clock', width: 200, height: 230 } },
  { element: <Module path="calculator.js" />, props: { title: 'Calculator', noPadding: true, noBorder: true, background: 'gray-5' } },
  { element: <Module path="mail.js" />, props: { title: 'Mail', noPadding: true, width: 1000, height: 600 } },
  { element: <Places />, props: { title: 'Places', noPadding: true, width: 900, xheight: 400 } },
  { element: <Credits />, props: { title: 'Credits', noPadding: true, width: 800, height: 400 } },
  { element: <Preferences />, props: { title: 'Preferences', xbackground: 'gray-1', width: 500 } },
  { element: <S3Browser />, props: { title: 'S3 Browser', noPadding: true } },
  { element: <Editor />, props: { title: 'Editor', noPadding: true, width: 640, height: 400 } },
  {
    element: <Fountain />, props: {
      title: 'Fountain', noPadding: true, background: 'black',
    }
  },
];

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

  const handleWindowClose = (windowId) => {
    setWindowElements(windowList => windowList.filter((window) => window.props.id !== windowId));
  };

  const handleSetBackground = useCallback((event) => {
    setBackgroundUrl(event.target.src);
  }, []);

  const addWindow = useCallback((element, { left = 30, top = 60, ...props }) => {
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
        onWindowClose={handleWindowClose}
        left={left}
        top={top}
        {...props}
      >
        {element}
      </Window>
    ]);

    ((windowId) => {
      setWindowIndexes(windowIndexes => [
        ...windowIndexes,
        windowId,
      ]);
    })(nextWindowIdRef.current);

    nextWindowIdRef.current += 1;
  }, [handleWindowBlur, handleWindowFocus]);

  useEffect(() => {
    (async () => {
      addWindow(<Editor />, {
        title: 'Editor', noPadding: true, left: 830, top: 580, width: 640, height: 220,
      });

      const Calculator = await importModule('calculator.js');

      addWindow(<VideoPlayer src="videos/trailer.webm" />, {
        title: 'Video', noPadding: true, noBorder: true, left: 830, top: 15,
      });

      addWindow(<Examples />, {
        title: 'Examples', left: 15, top: 15,
      });

      const Mail = await importModule('mail.js');

      addWindow(<Mail components={components} />, {
        title: 'Mail', noPadding: true, left: 1490, top: 15, width: 1050, height: 490,
      });

      addWindow(<Calculator components={components} />, {
        title: 'Calculator', noPadding: true, noBorder: true, background: 'gray-5', left: 1490, top: 520,
      });

      addWindow(<Preferences onSetBackground={handleSetBackground} />, {
        title: 'Preferences', xbackground: 'gray-1', left: 15, top: 420, width: 500,
      });

      addWindow(<Clock />, {
        title: 'Clock', left: 1705, top: 540, width: 200, height: 230,
      });

      addWindow(<S3Browser />, {
        title: 'S3 Browser', noPadding: true, left: 830, top: 330,
      });

      addWindow(<Calendar />, {
        title: 'Calendar', noPadding: true, left: 530, top: 460,
      });

      addWindow(<Fountain />, {
        title: 'Fountain', noPadding: true, background: 'black', left: 1920, top: 520,
      });

      addWindow(
        <WebGL />, {
        title: 'WebGL', noPadding: true, background: 'black', left: 2290, top: 520,
      });
    })();

    return () => {
      setWindowElements([]);
      setWindowIndexes([]);
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
      <View flex xstyle={{ position: 'absolute', top: 30, right: 0, bottom: 0, left: 0 }}>
        {windowElements.map(windowElement => React.cloneElement(windowElement, {
          zIndex: windowIndexes.indexOf(windowElement.props.id),
          focused: windowIndexes.indexOf(windowElement.props.id) === windowIndexes.length - 1,
        }))}
      </View>
      <View horizontal>
        {widgets.map(widget => (
          <View
            key={widget.props.title}
            alignItems="center"
            verticalPadding="medium"
            style={{ width: 100 }}
            onClick={() => addWindow(widget.element, widget.props)}
          >
            <View background="white" borderRadius style={{ width: 50, height: 50 }} />
            <Spacer />
            <Text fontWeight="medium" color="white" style={{ textShadow: '0 0 1px hsla(0, 0%, 0%, 0.5)' }}>{widget.props.title}</Text>
          </View>
        ))}
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
