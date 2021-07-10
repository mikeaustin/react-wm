import React, { useRef, useState, useEffect, useCallback } from 'react';

import { View, Text, Image, Button, Spacer, Divider, List, Heading, Clickable, Window } from '../components';

const Clock = () => {
  const timerRef = useRef(null);
  const [hour, setHour] = useState({ x: 0, y: 0 });
  const [minute, setMinute] = useState({ x: 0, y: 0 });
  const [second, setSecond] = useState({ x: 0, y: 0 });

  useEffect(() => {
    timerRef.current = setInterval(() => {
      const now = new Date();
      const hourAngle = ((now.getHours() + now.getMinutes() / 60) * 30 + 180) * (Math.PI / 180);
      const minuteAngle = ((now.getMinutes() + now.getSeconds() / 60) * 6 + 180) * (Math.PI / 180);
      const secondAngle = (now.getSeconds() * 6 + 180) * (Math.PI / 180);

      const hour = {
        x: Math.cos(hourAngle) * 0 - Math.sin(hourAngle) * 45,
        y: Math.cos(hourAngle) * 45 + Math.sin(hourAngle) * 0,
      };

      const minute = {
        x: Math.cos(minuteAngle) * 0 - Math.sin(minuteAngle) * 80,
        y: Math.cos(minuteAngle) * 80 + Math.sin(minuteAngle) * 0,
      };

      const second = {
        x: Math.cos(secondAngle) * 0 - Math.sin(secondAngle) * 80,
        y: Math.cos(secondAngle) * 80 + Math.sin(secondAngle) * 0,
      };

      setHour(hour);
      setMinute(minute);
      setSecond(second);
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <View tag="svg" viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="98" stroke="#343a40" fill="none" strokeWidth="3" />
      {Array.from({ length: 12 }, (_, index, angle = (index * 30 + 180) * (Math.PI / 180)) => (
        <circle
          key={index}
          cx={Math.cos(angle) * 0 - Math.sin(angle) * 80 + 100}
          cy={Math.cos(angle) * 80 + Math.sin(angle) * 0 + 100}
          r={index % 3 == 0 ? 4 : 2}
          fill="#343a40"
        />
      ))}
      <line
        x1={100}
        y1={100}
        x2={hour.x + 100}
        y2={hour.y + 100}
        stroke="#343a40"
        strokeWidth={12}
        strokeLinecap="round"
      />
      <line
        x1={100}
        y1={100}
        x2={minute.x + 100} y2={minute.y + 100}
        stroke="#343a40"
        strokeWidth={12}
        strokeLinecap="round"
        style={{ filter: 'drop-shadow(0 0 2px hsla(0, 0%, 0%, 0.1))' }}
      />
      <line
        x1={-(second.x / 5) + 100}
        y1={-(second.y / 5) + 100} x2={second.x + 100}
        y2={second.y + 100}
        stroke="#adb5bd"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <circle cx="100" cy="100" r="2" fill="white" />
    </View>
  );
};

export default Clock;
