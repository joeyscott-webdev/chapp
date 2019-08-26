import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MyButton from '../components/MyButton';

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={ styles.screenContainer }>
          <MyButton
            buttonText="Log In"
            onPress={() => this.props.navigation.navigate('Events')}
          />
          <MyButton
            buttonText="Sign Up"
            onPress={alert('Click Log In!')}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default WelcomeScreen;
