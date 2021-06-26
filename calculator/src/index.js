import React from 'react';

const CalculatorButton = ({ components, ...props }) => {
  const { View, Text, Button, Spacer, List } = components;

  return (
    <Button solid itemFlex flex padding="medium" xbackground="white" {...props} />
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
          <CalculatorButton itemFlex title="7" components={components} />
          <CalculatorButton itemFlex title="8" components={components} />
          <CalculatorButton itemFlex title="9" components={components} />
          <CalculatorButton itemFlex title="×" components={components} />
        </List>
        <List horizontal>
          <CalculatorButton itemFlex title="4" components={components} />
          <CalculatorButton itemFlex title="5" components={components} />
          <CalculatorButton itemFlex title="6" components={components} />
          <CalculatorButton itemFlex title="÷" components={components} />
        </List>
        <List horizontal>
          <CalculatorButton itemFlex title="1" components={components} />
          <CalculatorButton itemFlex title="2" components={components} />
          <CalculatorButton itemFlex title="3" components={components} />
          <CalculatorButton itemFlex title="+" components={components} />
        </List>
        <List horizontal>
          <CalculatorButton itemFlex title="0" components={components} />
          <CalculatorButton itemFlex title="." components={components} />
          <CalculatorButton itemFlex title="=" components={components} />
          <CalculatorButton itemFlex title="–" components={components} />
        </List>
      </List>
    </View>
  );
};

export default Calculator;
