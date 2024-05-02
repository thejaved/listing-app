import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

// file import's
import HomeController from './HomeController';

class Home extends HomeController {
  render() {
    return (
      <View>
        <Text>Home Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default Home;
