import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TextInput } from 'react-native';
import CalculatorButton from './Components/CalculatorButton';
import { useFonts , Poppins_400Regular }  from "@expo-google-fonts/poppins";
export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  const [value, setValue] = useState('');

  const handlePress = (input:string) => {
    if (input === 'C') {
      setValue('');
    } else if (input === 'D') {
      setValue((prevValue) => prevValue.slice(0, prevValue.length - 1));
    } else if (input === '=') {
      setValue((prevValue) => eval(prevValue).toString());
    } else {
      setValue((prevValue) => prevValue + input);
    }
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={require('../assets/blur.png')}
        />
        <View style={styles.calculator}>
          <TextInput
            style={styles.display}
            value={value}
            onChangeText={setValue}
            editable={false}
          />
          <View style={styles.row}>
            <CalculatorButton onPress={handlePress}>C</CalculatorButton>
            <CalculatorButton onPress={handlePress}>D</CalculatorButton>
            <CalculatorButton onPress={handlePress}>/</CalculatorButton>
          </View>
          <View style={styles.row}>
            <CalculatorButton onPress={handlePress}>1</CalculatorButton>
            <CalculatorButton onPress={handlePress}>2</CalculatorButton>
            <CalculatorButton onPress={handlePress}>3</CalculatorButton>
            <CalculatorButton onPress={handlePress}>-</CalculatorButton>
          </View>
          <View style={styles.row}>
            <CalculatorButton onPress={handlePress}>4</CalculatorButton>
            <CalculatorButton onPress={handlePress}>5</CalculatorButton>
            <CalculatorButton onPress={handlePress}>6</CalculatorButton>
            <CalculatorButton onPress={handlePress}>+</CalculatorButton>
          </View>
          <View style={styles.row}>
            <CalculatorButton onPress={handlePress}>7</CalculatorButton>
            <CalculatorButton onPress={handlePress}>8</CalculatorButton>
            <CalculatorButton onPress={handlePress}>9</CalculatorButton>
            <CalculatorButton onPress={handlePress}>*</CalculatorButton>
          </View>
          <View style={styles.row}>
            <CalculatorButton onPress={handlePress}>0</CalculatorButton>
            <CalculatorButton onPress={handlePress}>=</CalculatorButton>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginVertical: 5,
  },
  calculator: {
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: 400,
    height: 500,
    padding: 40,
    gap: 10,
    fontFamily: 'Poppins_400Regular'
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  display: {
    width: '100%',
    height: '15%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    color: 'black',
    fontSize: 30,
    textAlign: 'right',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
});
