import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

// file import's
import ArticleController from './ArticleController';

class Article extends ArticleController {
  render() {
    return (
      <View>
        <Text>Article Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default Article;
