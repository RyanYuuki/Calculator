import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

const CalculatorButton = ({ children, onPress }) => {
  if(children == '0') {
    return (
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'white' : 'black',
            transform: pressed ? 'scale(0.8)' : 'scale(1)',
            color: pressed ? 'black' : 'white',
          },
          styles.Button,
          { width: '73%' }
        ]}
        onPress={() => onPress(children)}
      >
        {children}
      </Pressable>
    );
  } else if (children == 'C') {
    return (
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'white' : 'black',
            transform: pressed ? 'scale(0.8)' : 'scale(1)',
            color: pressed ? 'black' : 'white',
          },
          styles.Button,
          { width: '45%' }
        ]}
        onPress={() => onPress(children)}
      >
        {children}
      </Pressable>
    );
  } else {
    return (
      <View>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? 'white' : 'black',
              transform: pressed ? 'scale(0.8)' : 'scale(1)',
              color: pressed ? 'black' : 'white',
            },
            styles.Button,
          ]}
          onPress={() => onPress(children)}
        >
          {children}
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Button: {
    width: 60,
    height: 50,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    color: 'black',
    margin: 0
  },
});

export default CalculatorButton;
