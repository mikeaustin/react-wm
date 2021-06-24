import React, { useRef, useState, useEffect } from 'react';
import classNames from 'classnames';

import styles from './App.module.css';

import { View, Text, Button, Spacer, Divider, List, Heading } from './components';

const Video = React.forwardRef(({ ...props }, ref) => {
  return (
    <View tag="video" ref={ref} {...props} />
  );
});

const SliderRaw = ({ ...props }) => {
  return (
    <input type="range" {...props} />
  );
};

const Slider = React.forwardRef(({ ...props }, ref) => {
  return (
    <SliderRaw tag="video" ref={ref} {...props} />
  );
});

const VideoPlayer = ({ src }) => {
  const [overlayIsVisible, setOverlayIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState('xxx');
  const videoRef = useRef(null);
  const timeoutRef = useRef(null);

  console.log('VideoPlayer()');

  const handleLoadMetaData = (data) => {
    console.log(videoRef.current.duration);

    setCurrentTime(videoRef.current.duration);
  };

  const handleVideoMouseMove = () => {
    setOverlayIsVisible(true);

    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setOverlayIsVisible(false);
    }, 3000);
  };

  const handleVideoPlayClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <View onMouseMove={handleVideoMouseMove} style={{ position: 'relative', overflow: 'hidden' }}>
      <Video ref={videoRef} src={src} onLoadedMetadata={handleLoadMetaData} />
      <View absolute className={classNames(styles.xoverlay, overlayIsVisible && styles.visible)}>
        <View className={styles.background} />
        <View flex>
          <View padding="small">
            <Text color="white">Title</Text>
          </View>
          <View flex justifyContent="center" alignItems="center" className={styles.playButton}>
            <Button solid title="Play" onClick={handleVideoPlayClick} />
          </View>
          <View padding="small" className={styles.controls}>
            <View horizontal justifyContent="space-between">
              <Text fontSize="xsmall" color="white">{currentTime}</Text>
              <Text fontSize="xsmall" color="white">{currentTime}</Text>
            </View>
            <Spacer />
            <Slider max="100" />
            {/* <View horizontal justifyContent="center" >
              <Button primary title="Play" onClick={handleVideoPlayClick} />
            </View> */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default VideoPlayer;
