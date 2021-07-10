import React from 'react';

// import styles from './index.css';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  buttons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: 1,
    padding: 1,
  }
});

const CalculatorButton = ({ components, style, ...props }) => {
  const { View, Text, Button, Spacer, List } = components;

  const buttonStyle = {
    minWidth: 50,
    minHeight: 40,
    ...style,
  };

  return (
    <Button solid itemFlex flex borderRadius="none" style={buttonStyle} {...props} />
  );
};

const Calculator = ({ components }) => {
  const styles = useStyles();

  const { View, Text, Button, Spacer, List } = components;

  return (
    <View>
      <Text fontSize="xlarge" fontWeight="light" padding="small" style={{ textAlign: 'right' }}>3.14159</Text>
      <View className={styles.buttons} xstyle={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridGap: 1, padding: 1 }}>
        <CalculatorButton itemFlex title="C" components={components} />
        <CalculatorButton itemFlex title="×" components={components} />
        <CalculatorButton itemFlex title="÷" components={components} />
        <CalculatorButton itemFlex title="M" components={components} />
        <CalculatorButton itemFlex title="7" components={components} />
        <CalculatorButton itemFlex title="8" components={components} />
        <CalculatorButton itemFlex title="9" components={components} />
        <CalculatorButton itemFlex title="+" components={components} />
        <CalculatorButton itemFlex title="4" components={components} />
        <CalculatorButton itemFlex title="5" components={components} />
        <CalculatorButton itemFlex title="6" components={components} />
        <CalculatorButton itemFlex title="–" components={components} />
        <CalculatorButton itemFlex title="1" components={components} />
        <CalculatorButton itemFlex title="2" components={components} />
        <CalculatorButton itemFlex title="3" components={components} />
        <CalculatorButton itemFlex title="=" components={components} style={{ gridColumnStart: 4, gridRow: '4 / 6', xgridRowStart: 4, xgridRowEnd: 6 }} />
        <CalculatorButton itemFlex title="0" components={components} style={{ gridColumn: '1 / 3' }} />
        <CalculatorButton itemFlex title="." components={components} />
      </View>
    </View>
  );
};

export default Calculator;
