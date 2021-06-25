import React, { useRef, useState, useEffect } from 'react';
import classNames from 'classnames';

import styles from './VideoPlayer.module.css';

import { View, Text, Button, Spacer, Divider, List, Heading } from './components';

const Video = React.forwardRef(({ ...props }, ref) => {
  return (
    <View tag="video" ref={ref} {...props} />
  );
});

const Slider = React.forwardRef(({ ...props }, ref) => {
  return (
    <View ref={ref} tag="input" type="range" step="0.1" borderRadius="rounded" style={{ height: 4, background: 'hsla(0, 0%, 100%, 0.25)', xoverflow: 'hidden' }} {...props} />
  );
});

const VideoPlayer = ({ src }) => {
  const [overlayIsVisible, setOverlayIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState('0');
  const [duration, setDuration] = useState('0');
  const videoRef = useRef(null);
  const sliderRef = useRef(null);
  const timeoutRef = useRef(null);

  console.log('VideoPlayer()');

  const handleLoadMetaData = (event) => {
    console.log(videoRef.current.duration);

    setDuration(videoRef.current.duration);
  };

  const handleTimeUpdate = (event) => {
    setCurrentTime(videoRef.current.currentTime);

    sliderRef.current.style.setProperty(
      '--slider-width',
      (videoRef.current.currentTime / videoRef.current.duration) * sliderRef.current.offsetWidth + 'px'
    );
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

      setIsPlaying(true);
    } else {
      videoRef.current.pause();

      setIsPlaying(false);
    }
  };

  const handleSliderMouseDown = (event) => {
    if (isPlaying) {
      videoRef.current.pause();
    }
  };

  const handleSliderMouseUp = (event) => {
    if (isPlaying) {
      videoRef.current.play();
    }
  };

  const handleSliderInput = (event) => {
    videoRef.current.currentTime = sliderRef.current.value;
  };

  return (
    <View onMouseMove={handleVideoMouseMove} style={{ position: 'relative', overflow: 'hidden' }}>
      <Video ref={videoRef} src={src} onLoadedMetadata={handleLoadMetaData} onTimeUpdate={handleTimeUpdate} />
      <View absolute className={classNames(overlayIsVisible && styles.visible)}>
        <View className={styles.background} onClick={handleVideoPlayClick} />
        <View flex>
          <View flex justifyContent="center" alignItems="center" className={styles.playButton} onClick={handleVideoPlayClick}>
            <View padding="medium" />
            <Text background="white" padding="small" horizontalPadding="medium" borderRadius opacity="25">
              ▶️
            </Text>
          </View>
          <View padding="small" className={styles.controls}>
            <View horizontal justifyContent="space-between">
              <Text fontSize="xsmall" color="white">
                {`${Math.floor(currentTime / 60)}:${Math.floor(currentTime % 60).toString().padStart(2, '0')}`}
              </Text>
              <Text fontSize="xsmall" color="white">
                {`${Math.floor(duration / 60)}:${Math.floor(duration % 60).toString().padStart(2, '0')}`}
              </Text>
            </View>
            <Spacer />
            <Slider
              ref={sliderRef}
              max={videoRef.current?.duration}
              className={styles.slider}
              onMouseDown={handleSliderMouseDown}
              onMouseUp={handleSliderMouseUp}
              onInput={handleSliderInput}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default VideoPlayer;
