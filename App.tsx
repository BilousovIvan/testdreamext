import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {RootNavigation} from './src/navigation/RootNavigation';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';

const App = () => {
  return <RootNavigation />;
};

const styles = StyleSheet.create({});

export default App;
