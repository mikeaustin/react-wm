import React from 'react';

import { View, Text, Image, Button, Spacer, Divider, List, Heading } from '../components';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const daysInMonth = (year = new Date().getFullYear(), month = new Date().getMonth()) => {
  return new Date(year, month + 1, 0).getDate();
};

const Calendar = () => {
  const today = new Date();

  return (
    <View flex>
      <View background="gray-1">
        <Spacer size="medium" />
        <View horizontal horizontalPadding="medium" background="gray-1">
          <Button size="xsmall" title="Today" solid borderRadius="max" />
          <Spacer flex />
          <Button size="xsmall" title="❮" solid borderRadius="max" />
          <Spacer size="xsmall" />
          <Button size="xsmall" title="❯" solid borderRadius="max" />
        </View>
        <Spacer size="xsmall" />
        <View horizontal horizontalPadding="small">
          {Array.from({ length: 7 }, (_, index) => (
            <Text key={index} flex fontSize="tiny" fontWeight="bold" color="gray-6" verticalPadding="small" style={{ textAlign: 'right', xpaddingLeft: 5, paddingRight: 7 }}>
              {days[index].toUpperCase()}
            </Text>
          ))}
        </View>
        <Divider size="none" />
      </View>
      <View flex padding="small" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
        {Array.from({ length: 5 - new Date().getDay() }, (_, index) => (
          <Text style={{ textAlign: 'right' }} padding="small"></Text>
        ))}
        {Array.from({ length: daysInMonth() }, (_, index) => (
          <View
            key={index}
            borderRadius
            background={index + 1 === today.getDate() && 'primary'}
          >
            <Text
              style={{ textAlign: 'right' }}
              padding="small"
              color={index + 1 === today.getDate() && 'white'}
              fontWeight={index + 1 === today.getDate() && 'bold'}
            >
              {index + 1}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Calendar;
