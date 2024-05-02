import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

// file import's
import FeedController from './FeedController';

class Feed extends FeedController {
  render() {
    return (
      <View>
        <Text>Feed Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default Feed;
