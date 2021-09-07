import React, {useState} from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import Animated, {Keyframe, Easing} from 'react-native-reanimated';

const EASING_BEZIER = Easing.bezier(0.22, 1, 0.36, 1);

const App = () => {
  const [visibility, setVisibility] = useState(false);

  const enteringAnimation = new Keyframe({
    0: {
      borderRadius: 0,
      transform: [{rotate: '0deg'}],
      easing: EASING_BEZIER,
    },
    33: {
      borderRadius: 20,
      transform: [{rotate: '0deg'}],
      easing: EASING_BEZIER,
    },
    66: {
      borderRadius: 50,
      transform: [{rotate: '45deg'}],
      easing: EASING_BEZIER,
    },
    100: {
      borderRadius: 100,
      transform: [{rotate: '90deg'}],
      easing: EASING_BEZIER,
    },
  });

  const exitAnimation = new Keyframe({
    0: {
      opacity: 1,
      transform: [{scale: 1}],
      easing: EASING_BEZIER,
    },
    100: {
      opacity: 0,
      transform: [{scale: 6}],
      easing: EASING_BEZIER,
    },
  });

  return (
    <>
      <Animated.View style={styles.root}>
        {visibility && (
          <Animated.View
            entering={enteringAnimation.duration(2000)}
            exiting={exitAnimation.duration(1000)}
            style={[styles.dot]}
          />
        )}
        <Pressable
          android_ripple={{
            color: '#aaa',
            radius: 100,
            borderless: false,
          }}
          style={styles.button}
          onPress={() => setVisibility(currentState => !currentState)}>
          <Text style={styles.buttonText}>
            {!visibility ? 'Mount' : 'Un-Mount'}
          </Text>
        </Pressable>
      </Animated.View>
    </>
  );
};

const DOT_SIZE = 200;
const styles = StyleSheet.create({
  root: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
    height: '100%',
  },
  dot: {
    height: DOT_SIZE,
    width: DOT_SIZE,
    borderRadius: DOT_SIZE,
    backgroundColor: '#fafafa',
    margin: 10,
  },
  button: {
    alignItems: 'center',
    minWidth: 130,
    position: 'absolute',
    backgroundColor: '#651fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    transform: [
      {
        translateY: -200,
      },
    ],
  },
  buttonText: {
    color: '#fff',
    fontWeight: '300',
    fontSize: 20,
  },
});

export default App;
