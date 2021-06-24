import React from 'react';

const CalculatorButton = ({ components, ...props }) => {
  const { View, Text, Button, Spacer, List } = components;

  return (
    <Button flex padding="medium" {...props} />
  );
};

const Calculator = ({ components }) => {
  const { View, Text, Button, Spacer, List } = components;

  return (
    <View>
      <Button title="0" />
      <Spacer />
      <List>
        <List horizontal>
          <CalculatorButton title="7" components={components} />
          <CalculatorButton title="8" components={components} />
          <CalculatorButton title="9" components={components} />
          <CalculatorButton title="×" components={components} />
        </List>
        <List horizontal>
          <CalculatorButton title="4" components={components} />
          <CalculatorButton title="5" components={components} />
          <CalculatorButton title="6" components={components} />
          <CalculatorButton flex title="÷" components={components} />
        </List>
        <List horizontal>
          <CalculatorButton title="1" components={components} />
          <CalculatorButton title="2" components={components} />
          <CalculatorButton title="3" components={components} />
          <CalculatorButton flex title="+" components={components} />
        </List>
        <List horizontal>
          <CalculatorButton title="0" components={components} />
          <CalculatorButton title="." components={components} />
          <CalculatorButton title="=" components={components} />
          <CalculatorButton flex title="–" components={components} />
        </List>
      </List>
    </View>
  );
};

export default Calculator;
