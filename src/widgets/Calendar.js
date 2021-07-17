import React from 'react';

import { View, Text, Image, Button, Spacer, Divider, List, Heading } from '../components';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const daysInMonth = (year = new Date().getFullYear(), month = new Date().getMonth()) => {
  return new Date(year, month + 1, 0).getDate();
};

const Calendar = () => {
  const today = new Date();

  return (
    <View>
      <View background="gray-1">
        <Spacer size="xsmall" />
        <View horizontal horizontalPadding="small">
          {Array.from({ length: 7 }, (_, index) => (
            <Text flex fontSize="tiny" fontWeight="bold" color="gray-6" style={{ textAlign: 'right', paddingLeft: 0 }} padding="small">
              {days[index].toUpperCase()}
            </Text>
          ))}
        </View>
        <Divider size="none" />
      </View>
      <View padding="small" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
        {Array.from({ length: new Date().getDay() }, (_, index) => (
          <Text style={{ textAlign: 'right' }} padding="small"></Text>
        ))}
        {Array.from({ length: daysInMonth() }, (_, index) => (
          <View
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
