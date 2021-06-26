import React, { useRef, useState, useEffect } from 'react';
import classNames from 'classnames';

import 'open-color/open-color.css';
import styles from './App.module.css';

import { View, Text, Image, Button, Spacer, Divider, List, Heading, Clickable, Window } from './components';
import VideoPlayer from './VideoPlayer';
import Examples from './Examples';

const backgroundUrls = [
  '/images/d1e91a4058a8a1082da711095b4e0163.png',
  '/images/modern_abstract-wallpaper-3440x1440.jpg',
  '/images/781767.jpg',
  '/images/16933.jpg',
  '/images/274355.jpg',
  '/images/1638117.png',
  '/images/2685046.jpg',
  '/images/9Azi4uS.jpg',
  '/images/Star Wars ultra widescreen backgrounds Album on Imgur.jpg',
];

function App() {
  const windowRef = useRef(null);
  const firstMouseRef = useRef(null);
  const [backgroundUrl, setBackgroundUrl] = useState('/images/d1e91a4058a8a1082da711095b4e0163.png');
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

  const handleBackgroundImageClick = (event) => {
    setBackgroundUrl(event.target.src);
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
        { title: 'Video', noPadding: true, style: { left: 950, top: 50 } }
      );

      addWindow(
        <Examples key={3} onWindowFocus={handleWindowFocus} onWindowBlur={handleWindowBlur} />,
        { title: 'Examples', style: { left: 50, top: 50 } }
      );

      addWindow(
        <View style={{ width: 320 }}>
          <List divider level={2} horizontalPadding="medium" spacerSize="none">
            <Heading imageSrc="https://f4.bcbits.com/img/a3221996752_10.jpg" title="Canyons on Fire" subtitle="Wild Nothing" />
            <Heading imageSrc="https://f4.bcbits.com/img/a3221996752_10.jpg" title="What She Came For" subtitle="Franz Ferdinand" />
            <Heading imageSrc="https://f4.bcbits.com/img/a3221996752_10.jpg" title="John Wick Mode" subtitle="Le Castle Vania" />
          </List>
        </View>,
        { title: 'Songs', noPadding: true, style: { left: 50, top: 600 } }
      );

      addWindow(
        <Widget components={{ View, Text, Button, Spacer, Divider, List }} />,
        { title: 'Calculator', xbackground: 'gray-1', style: { left: 500, top: 600 } }
      );

      addWindow(
        <View style={{ width: 500 }}>
          <List horizontal divider wrap spacerSize="none">
            {backgroundUrls.map(url => (
              <Clickable key={url} itemWidth="33.33%" tabIndex="0" onClick={handleBackgroundImageClick}>
                <Image src={url} borderRadius />
              </Clickable>
            ))}
          </List>
          <Divider size="medium" />
          <List horizontal xpadding="small" justifyContent="center" spacerSize="small">
            <Button primary title="Close" />
            <Button primary solid title="Apply" />
          </List>
        </View>,
        { title: 'Backgrounds', xbackground: 'gray-1', style: { left: 950, top: 500 } }
      );
    })();

    return () => {
      setWindowList([]);
    };
  }, []);

  return (
    <View background="gray-3" className={styles.App} style={{ background: `center / cover url(${backgroundUrl})` }} onMouseMove={handleMouseMove}>
      <List horizontal xpadding="medium" horizontalPadding="small" spacerSize="none" background="gray-1">
        <View padding="small" background="blue-5">
          <Text fontWeight="bold" color="white">React WM</Text>
        </View>
        <View padding="small">
          <Text fontWeight="medium">React WM</Text>
        </View>
      </List>
      <View>
        {windowList}
      </View>
      <View verticalPadding="xsmall" background="gray-1" boxShadow style={{ position: 'absolute', zIndex: 1, left: 10, top: 30 }}>
        <View padding="small" horizontalPadding="small" background="blue-5"><Text fontWeight="semibold" color="white">Menu Option One</Text></View>
        <View padding="small" horizontalPadding="small"><Text fontWeight="semibold">Menu Option One</Text></View>
        <View padding="small" horizontalPadding="small"><Text fontWeight="semibold">Menu Option One</Text></View>
      </View>
    </View>
  );
}

export default App;

/*
          <View background="gray-1" style={{ position: 'absolute', top: 21 }}>
            <View padding="small"><Text>Option One</Text></View>
          </View>
*/
