import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface CommentsProps {
  item: {
    postId: number | string;
    id: number | string;
    email: string;
    body: string;
  };
}
const Comments = () => {
  return (
    <View>
      <Text>Comments</Text>
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({});
