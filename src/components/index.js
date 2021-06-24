import React from 'react';

import styles from '../App.module.css';
import justifyContentStyles from '../styles/justifyContent.module.css';
import alignItemsStyles from '../styles/alignItems.module.css';
import backgroundColorStyles from '../styles/backgroundColor.module.css';
import paddingStyles from '../styles/padding.module.css';
import verticalPaddingStyles from '../styles/verticalPadding.module.css';
import horizontalPaddingStyles from '../styles/horizontalPadding.module.css';
import textStyles from '../styles/text.module.css';
import borderRadiusStyles from '../styles/borderRadius.module.css';
import topBorderRadiusStyles from '../styles/topBorderRadius.module.css';
import boxShadowStyles from '../styles/boxShadow.module.css';

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
    className
  ].filter(className => !!className).join(' ');

  return (
    <Tag ref={ref} className={viewClassName} style={style} {...props}>
      {children}
    </Tag>
  );
});

const Text = ({ children, fontSize, fontWeight, color }) => {
  const textClassName = [
    textStyles.small,
    fontSize && textStyles[fontSize],
    fontWeight && textStyles[fontWeight],
    color && textStyles[color]
  ].filter(className => !!className).join(' ');

  return (
    <View tag="div">
      <span className={textClassName}>{children}</span>
    </View>
  );
};

const Image = ({ src, width, height, ...props }) => {
  return (
    <View tag="img" src={src} style={{ width, height }} {...props} />
  );
};

const Button = ({ title, primary, secondary, ...props }) => {
  const textColor = primary
    ? 'white'
    : secondary ? 'blue' : undefined;

  const buttonClassName = [
    buttonStyles.button,
    primary && buttonStyles.primary,
    secondary && buttonStyles.secondary,
  ].filter(className => !!className).join(' ');

  return (
    <View
      tag="button"
      padding="small"
      alignItems="center"
      borderRadius
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
      {React.Children.map(children, child => (
        <View tag="li" flex>
          {child}
        </View>
      ))}
    </View>
  );
};

const Heading = ({ imageSrc, title, subtitle }) => {
  return (
    <View horizontal alignItems="center" verticalPadding="xxsmall">
      {imageSrc && (
        <>
          <View>
            <Image src={imageSrc} height={40} borderRadius />
          </View>
          <Spacer />
        </>
      )}
      <View>
        <Text fontWeight="medium">{title}</Text>
        {subtitle && (
          <>
            <Spacer />
            <Text fontSize="xsmall">{subtitle}</Text>
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
