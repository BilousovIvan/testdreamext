import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface CommentsProps {
  item: {
    postID: number | string;
    id: number | string;
    email: string;
    body: string;
  };
}
const Comments = ({item}: CommentsProps) => {
  return (
    <View style={styles.container}>
      <Text>Comments id: {item.id}</Text>
      <Text>Email: {item.email}</Text>
      <Text>Body: {item.body}</Text>
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({
  container: {
    margin: '5%',
    width: '90%',
    // height: 120,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
  },
});
