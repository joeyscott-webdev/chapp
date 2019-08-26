import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Events extends Component {
  render() {
    return (
      <View style={ styles.screenContainer }>
        <Text>Events!</Text>
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
export default Events;
