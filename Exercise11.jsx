import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { createStaticNavigation, useNavigation, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function ScreenOne () {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Screen One</Text>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Second')
      }}>
        <Text style={styles.textButton}>Go to Screen Two</Text>
      </TouchableOpacity>
    </View>
  )
}

function ScreenTwo () {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Screen Two</Text>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Third', {text: 'This is the last screen'})
      }}>
        <Text style={styles.textButton}>Go to Screen Three</Text>
      </TouchableOpacity>
    </View>
  )
}

function ScreenThree ({route}) {
  const {text} = route.params

  return (
    <View style={styles.container}>
      <Text>Screen Three</Text>
      <Text>{text}</Text>
    </View>
  )
}

function ScreenFour () {
  return (
    <View style={styles.container}>
      <Text>Screen Four</Text>
    </View>
  )
}

const HomeTabs = createBottomTabNavigator({
  screens: {
    First: ScreenOne,
    Fourth: ScreenFour
  }
})

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: HomeTabs,
      options: {
        headerShown: false,
      }
    },
    Second: ScreenTwo,
    Third: ScreenThree,
  },
});

const Navigation = createStaticNavigation(RootStack);

class App extends React.Component {
  render () {
    return(
      <Navigation/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: 'blue',
  }
});

export default App;