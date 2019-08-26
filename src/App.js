import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
//custom components
//screens
import Events from './screens/Events';
import Welcome from './screens/Welcome';

const App = () => {
  return (
    <AppContainer />
    );

};

//create another stack nav to display in JobsScreen
const EventsStack = createStackNavigator({
  Events:{
    screen: Events,
    navigationOptions: ({navigation})=>{
      return{
        headerTitle: 'Find a Volunteering Event',
        headerLeft:(
          <Icon
            style={{paddingLeft:10}}
            name="bars"
            size={30}
            onPress={() => navigation.openDrawer()}  />
          )
      };
    }
  }
  },{
    defaultNavigationOptions:{
      gesturesEnabled: false
    }
    });


//Create the bottom tabs you see after logging in
const DashboardTabNav = createBottomTabNavigator({
  Home: EventsStack,
  Stories: EventsStack,
  Volunteering: EventsStack
  },{
    navigationOptions:({navigation})=>{
      const {routeName} = navigation.state.routes[navigation.state.index]
      return {
        header: null,
        headerTitle: routeName
      };
    }
    });
//Create a stacked nav to display a header and button to open drawer
const DashboardStackNav = createStackNavigator({
  DashboardTabNav: DashboardTabNav
  },{
    defaultNavigationOptions:({navigation})=>{
      return{
        headerLeft:(
          <Icon
            style={{paddingLeft:10}}
            name="bars"
            size={30}
            onPress={() => navigation.openDrawer()}  />
          )
      };
    }
    });
//create the drawer navigation
const AppDrawerNav = createDrawerNavigator({
  Dashboard:{
    screen: DashboardStackNav
  }
  });
//create the initial switch nav to handle the welcome screen to sign up or log in
const AppSwitchNav = createSwitchNavigator({
    Welcome:{screen: Welcome},
    Dashboard:{screen: AppDrawerNav}
});

const AppContainer = createAppContainer(AppSwitchNav);

export default App;
