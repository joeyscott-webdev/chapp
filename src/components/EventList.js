import React, {Component} from 'react';
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';

class EventList extends Component {
  render() {
    return (
      <FlatList
        data={this.props.events}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return(
            <View style={styles.listItem}>
              <Text style={{paddingTop: 3, paddingBottom: 10,}}>{item.content_name}</Text>
              <Image style={{flex: 1, height: 220, alignSelf: 'stretch'}} source={require('../assets/images/campus-ss.png')} />
              <Text style={{paddingTop: 3, paddingBottom: 10,}}>{item.content_social_description}</Text>
              <View style={styles.listItemFooter}>
                <Text style={{flex:3}}>{item.content_date_literal_range}</Text>
                <Image style={{height: 20, width: 20,}} source={require('../assets/images/NavigationIcon_Volunteer_Color.png')} />
                <Text style={{flex:1}}>Learn More</Text>
              </View>
            </View>
            );
          }
        }
        keyExtractor={item => item.content_slug}
      />
    );
  }
}
const styles = StyleSheet.create({
  listItem: {
    borderBottomColor: '#999',
    borderBottomWidth: 12,
    paddingLeft: 15,
    paddingRight: 15,

  },
  listItemFooter: {
    flexDirection: 'row',
    paddingBottom: 15,
  }
});
export default EventList;
