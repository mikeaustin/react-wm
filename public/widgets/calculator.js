import React, { useRef, useEffect } from 'react';

import { View, Text, Button, Spacer, Divider, List, Heading } from '../components';

const CalculatorButton = ({ ...props }) => {
  return (
    <Button flex padding="medium" {...props} />
  );
};

const Calculator = () => {
  return (
    <View>
      <Button title="0" />
      <Spacer />
      <List>
        <List horizontal>
          <CalculatorButton title="7" />
          <CalculatorButton title="8" />
          <CalculatorButton title="9" />
          <CalculatorButton title="×" />
        </List>
        <List horizontal>
          <CalculatorButton title="4" />
          <CalculatorButton title="5" />
          <CalculatorButton title="6" />
          <CalculatorButton flex title="÷" />
        </List>
        <List horizontal>
          <CalculatorButton title="1" />
          <CalculatorButton title="2" />
          <CalculatorButton title="3" />
          <CalculatorButton flex title="+" />
        </List>
        <List horizontal>
          <CalculatorButton title="0" />
          <CalculatorButton title="." />
          <CalculatorButton title="=" />
          <CalculatorButton flex title="–" />
        </List>
      </List>
    </View>
  );
};

export default Calculator;
