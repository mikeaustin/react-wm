import React from 'react';

import styles from '../App.module.css';
import justifyContentStyles from '../styles/justifyContent.module.css';
import alignItemsStyles from '../styles/alignItems.module.css';
import backgroundColorStyles from '../styles/backgroundColor.module.css';
import paddingStyles from '../styles/padding.module.css';
import verticalPaddingStyles from '../styles/verticalPadding.module.css';
import horizontalPaddingStyles from '../styles/horizontalPadding.module.css';
import textStyles from '../styles/text.module.css';
import fontWeightStyles from '../styles/fontWeight.module.css';
import borderRadiusStyles from '../styles/borderRadius.module.css';
import topBorderRadiusStyles from '../styles/topBorderRadius.module.css';
import boxShadowStyles from '../styles/boxShadow.module.css';
import opacityStyles from '../styles/opacity.module.css';

import buttonStyles from './button.module.css';
import spacerStyles from './spacer.module.css';
import dividerStyles from './divider.module.css';
import listStyles from './list.module.css';

const View = React.forwardRef(({
  tag: Tag = 'div',
  flex,
  justifyContent,
  alignItems,
  background,
  padding,
  verticalPadding,
  horizontalPadding,
  horizontal,
  borderRadius,
  topBorderRadius,
  boxShadow,
  absolute,
  opacity,
  style,
  className,
  children,
  ...props
}, ref) => {
  let viewStyles = [];
  let viewClassName = [
    styles.View,
    horizontal && 'horizontal' || 'vertical',
    flex && alignItemsStyles[flex],
    justifyContent && justifyContentStyles[justifyContent],
    alignItems && alignItemsStyles[alignItems],
    background && backgroundColorStyles[background],
    padding && paddingStyles[padding],
    verticalPadding && verticalPaddingStyles[verticalPadding],
    horizontalPadding && horizontalPaddingStyles[horizontalPadding],
    borderRadius && borderRadiusStyles[borderRadius],
    topBorderRadius && topBorderRadiusStyles[topBorderRadius],
    boxShadow && boxShadowStyles[boxShadow],
    absolute && styles.absolute,
    opacity && opacityStyles[`opacity-${opacity}`],
    className
  ].filter(className => !!className).join(' ');

  return (
    <Tag ref={ref} className={viewClassName} style={style} {...props}>
      {children}
    </Tag>
  );
});

const Text = React.forwardRef(({ children, fontSize, fontWeight, color, ...props }, ref) => {
  const textClassName = [
    textStyles.small,
    fontSize && textStyles[fontSize],
    fontWeight && fontWeightStyles[fontWeight],
    color && textStyles[color]
  ].filter(className => !!className).join(' ');
  const childrenArray = React.Children.toArray(children)[0].toString().split(/\n|\\n/);
  const formattedText = childrenArray.length > 1 ? childrenArray.reduce((array, str, index) => [
    ...array,
    ...(index > 0 ? [<br />] : []), str
  ], []) : children;

  return (
    <View ref={ref} tag="div" {...props}>
      <span className={textClassName}>{formattedText}</span>
    </View>
  );
});

const Image = ({ src, width, height, ...props }) => {
  return (
    <View tag="img" src={src} style={{ width, height }} {...props} />
  );
};

const Button = ({ title, link, primary, solid, secondary, disabled, ...props }) => {
  const textColor = primary && solid
    ? 'white'
    : primary ? 'blue' : undefined;

  const buttonClassName = [
    buttonStyles.button,
    link && buttonStyles.link,
    primary && buttonStyles.primary,
    solid && buttonStyles.solid,
    disabled && buttonStyles.disabled,
  ].filter(className => !!className).join(' ');

  return (
    <View
      tag="button"
      padding="small"
      horizontalPadding="medium"
      justifyContent="center"
      alignItems="center"
      borderRadius
      disabled={disabled}
      className={buttonClassName}
      {...props}
    >
      <Text fontWeight="bold" color={textColor}>{title}</Text>
    </View>
  );
};

const Spacer = ({ size, ...props }) => {
  return (
    <View xpadding="small" className={spacerStyles.small} {...props} />
  );
};

const Divider = ({ size, level, ...props }) => {
  const dividerClassName = [
    dividerStyles.divider,
    size && dividerStyles[size],
    level && dividerStyles[`level-${level}`]
  ].filter(className => !!className).join(' ');

  return (
    <View className={dividerClassName} {...props} />
  );
};

const List = ({ horizontal, divider, level, spacerSize, children, ...props }) => {
  const listClassName = [
    listStyles.list,
    horizontal && 'horizontal' || 'vertical',
    divider && listStyles.divider,
    level && listStyles[`level-${level}`],
    spacerSize && listStyles[spacerSize],
  ].filter(className => !!className).join(' ');

  return (
    <View tag="ul" horizontal={horizontal} className={listClassName} {...props}>
      {React.Children.map(children, (child, index) => (
        <View key={index} tag="li" flex>
          {child}
        </View>
      ))}
    </View>
  );
};

const Heading = ({ imageSrc, title, subtitle }) => {
  return (
    <View horizontal alignItems="center" verticalPadding="xsmall">
      {imageSrc && (
        <>
          <View>
            <Image src={imageSrc} height={40} borderRadius />
          </View>
          <Spacer />
        </>
      )}
      <View>
        <Text fontWeight="semibold">{title}</Text>
        {subtitle && (
          <>
            <Spacer />
            <Text fontSize="xsmall" color="gray-6">{subtitle}</Text>
          </>
        )}
      </View>
    </View>
  );
};

export {
  View,
  Text,
  Button,
  Spacer,
  Divider,
  List,
  Heading
};
