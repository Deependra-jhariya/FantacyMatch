import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {colors, _COLORS} from '../../Themes/CommonColors/CommonColor';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
export const navigationRef = createNavigationContainerRef();
import Splash from '../../Screens/SplashScreen/Splash';
import HomeScreen from '../../Screens/HomeScreen/HomeScreen';
import ScheduleMatch from '../../Screens/ScheduleMatch/ScheduleMatch';
const Stack = createNativeStackNavigator();
const AllStackRouts = props => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        options={{headerShown: false}}
        initialRouteName={'Splash'}>
        <Stack.Screen
          name={'Splash'}
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'HomeScreen'}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'ScheduleMatch'}
          component={ScheduleMatch}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({});
export default AllStackRouts;
