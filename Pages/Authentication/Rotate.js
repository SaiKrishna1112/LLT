import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Animated, { Easing, withTiming, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

const App = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipValue = useSharedValue(0);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    flipValue.value = withTiming(isFlipped ? 0 : 1, { duration: 500, easing: Easing.linear });
  };

  const frontInterpolate = flipValue.value.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = flipValue.value.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '360deg'],
  });

  const frontAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateY: frontInterpolate }],
    };
  });

  const backAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateY: backInterpolate }],
    };
  });

  return (
    <TouchableOpacity style={styles.container} onPress={handleFlip}>
      <Animated.View style={[styles.card, frontAnimatedStyle]}>
        <Text style={styles.text}>Front</Text>
      </Animated.View>

      <Animated.View style={[styles.card, styles.backCard, backAnimatedStyle]}>
        <Text style={styles.text}>Back</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 200,
    height: 300,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: 'hidden',
  },
  backCard: {
    position: 'absolute',
    backgroundColor: 'green',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default App;
