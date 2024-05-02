import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

// file import's
import SettingsController from './SettingsController';

class Settings extends SettingsController {
  render() {
    return (
      <View>
        <Text>Settings Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default Settings;
