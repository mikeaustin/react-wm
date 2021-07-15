/* eslint no-unused-vars: "off" */

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
    <View
      ref={ref}
      tag="input"
      type="range"
      step="0.1"
      // xborderRadius="rounded"
      style={{ height: 7, background: 'hsla(0, 0%, 100%, 0.25)' }}
      {...props}
    />
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
    if (!overlayIsVisible) {
      return;
    }

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

  const handleVideoPlayClick = (event) => {
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
    <View flex background="black" justifyContent="center" onMouseMove={handleVideoMouseMove}>
      <Video ref={videoRef} src={src} autoPlay muted onLoadedMetadata={handleLoadMetaData} onTimeUpdate={handleTimeUpdate} />
      <View absolute className={classNames(overlayIsVisible && styles.visible)}>
        <View className={styles.background} onClick={handleVideoPlayClick} />
        <View flex>
          <View flex justifyContent="center" alignItems="center" className={styles.playButton} onClick={handleVideoPlayClick}>
            <View padding="medium" />
            <View background="white" borderRadius="rounded" opacity="25" justifyContent="center" alignItems="center" style={{ width: 50, height: 50 }}>
              <Text fontSize="large" style={{ position: 'relative', right: !isPlaying ? -1 : 0, top: 0 }}>
                {isPlaying ? '❙❙' : '▶'}
              </Text>
            </View>
          </View>
          <View padding="small" className={styles.controls}>
            <View horizontal justifyContent="space-between">
              <Text fontSize="xsmall" color="white">
                {`${Math.floor(currentTime / 60)}:${Math.floor(currentTime % 60)?.toString().padStart(2, '0')}`}
              </Text>
              <Text fontSize="xsmall" color="white">
                {`${Math.floor(duration / 60)}:${Math.floor(duration % 60)?.toString().padStart(2, '0')}`}
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
