import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
// This is my custom button Component
// When using this component you must pass
// onPress prop, buttonText prop

const MyButton = (props) => {
  return (
      <TouchableOpacity
        style={ styles.buttonContainer }
        onPress={ props.onPress }
      >
        <Text
          style={ styles.buttonText }
        >{ props.buttonText }</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 5,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#0066CC',
    height: 50,
    width: 170,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  },
});
export default MyButton;
