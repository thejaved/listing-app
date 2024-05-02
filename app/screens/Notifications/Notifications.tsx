import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

// file import's
import NotificationsController from './NotificationsController';

class Notifications extends NotificationsController {
  render() {
    return (
      <View>
        <Text>Notifications Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default Notifications;
