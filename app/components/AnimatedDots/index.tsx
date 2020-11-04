import React, { useRef } from 'react';
import { Animated, View } from 'react-native';
import _ from 'lodash';

import { AnimatedDotsProps, AnimatedDotProps } from './animated-dots.props';
import { styles } from './animated-dots.styles';

//TODO: animation
const AnimatedDot: React.FunctionComponent<AnimatedDotProps> = ({
  isFilled,
}) => {
  // const animatedView = useRef(new Animated.Value(0));

  return (
    <Animated.View
      style={[styles.dotContainer, isFilled ? styles.activeDotContainer : null]}
    />
  );
};

export const AnimatedDots: React.FunctionComponent<AnimatedDotsProps> = ({
  dotsAmount,
  filledDotsAmount,
}) => {
  return (
    <View style={styles.container}>
      {_.map(new Array(dotsAmount), (el, index) => (
        <AnimatedDot isFilled={index < filledDotsAmount} key={`dot-${index}`} />
      ))}
    </View>
  );
};
