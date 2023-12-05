/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Home from './public/pages/app_View/Home';
import Dashboard from './public/pages/app_View/Dashboard';

function App() {


  return (
    <SafeAreaView style={styles.SafeAreaView}>
     <Dashboard/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 SafeAreaView:{
  backgroundColor:"#EDEDED",width:"100%",
  height:"100%"
 }
});

export default App;
