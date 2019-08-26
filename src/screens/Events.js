import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Events extends Component {
  state = { events: [] };

  componentDidMount() {
    fetch('http://hardingdevelopment.nexisit.net/harding_api/api_event_search.php?page_num=0&per_page=20&buckets=Volunteering&timezone=25200&app_server_version=3.2&app_version=2&app_build=1&user_id=2&token=70aedda35dca9c192ef551c9f7b570e0&salt=309a9bea4d2695656e83f4fe7b340ee0&app=1&version=3.2')
    .then((response) => response.json())
    .then((responseJson) => this.setState({ events: responseJson }))
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    console.log(this.state);
    return (
      <View style={ styles.screenContainer }>
        <View style={ styles.eventsHead }>
          <Text>Events Header</Text>
        </View>
        <View style={ styles.eventsBody }>
          <Text>Events Body</Text>
        </View>
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
  eventsHead: {
    flex: 1,
    backgroundColor: '#ccc',
    alignSelf: 'stretch',
    textAlign: 'center',
    borderBottomColor: '#999',
    borderBottomWidth: 12,
  },
  eventsBody: {
    flex: 8,
    alignSelf: 'stretch',
    textAlign: 'center',
  }
});
export default Events;
