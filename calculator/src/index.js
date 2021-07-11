import React from 'react';

// import styles from './index.css';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  buttons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: 1,
  },
  button: {
    minWidth: '50px',
    minHeight: 40,
  },
  '=': { gridColumnStart: 4, gridRow: '4 / 6' },
  '0': { gridColumn: '1 / 3' },
});

const buttons = [
  'C', '×', '÷', 'M',
  '7', '8', '9', '+',
  '4', '5', '6', '-',
  '1', '2', '3', '=',
  '0', '.',
];

const CalculatorButton = ({ components, className, ...props }) => {
  const { View, Text, Button, Spacer, List } = components;

  const styles = useStyles();

  const buttonClassName = [
    styles.button,
    className,
  ].filter(className => !!className).join(' ');

  return (
    <Button solid flex borderRadius="none" className={buttonClassName} {...props} />
  );
};

const Calculator = ({ components }) => {
  const { View, Text, Button, Spacer, List } = components;

  const styles = useStyles();

  return (
    <View>
      <Text fontSize="xlarge" fontWeight="light" color="white" padding="small" style={{ textAlign: 'right', textShadow: '0 0 1px hsla(0, 0%, 0%, 0.1)' }}>3.14159</Text>
      <View className={styles.buttons}>
        {buttons.map(button => (
          <CalculatorButton key={button} title={button} className={styles[button]} components={components} />
        ))}
      </View>
    </View>
  );
};

export default Calculator;
