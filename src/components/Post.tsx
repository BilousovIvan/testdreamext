import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface PostProps {
  item: {
    title: string;
    body: string;
    id: string | number;
  };
}
const Post = ({item}: PostProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => console.log('Working...')}>
      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.text}>{item.body}</Text>
    </TouchableOpacity>
  );
};

export default Post;

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
  header: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 24,
    textTransform: 'capitalize',
    marginBottom: 8,
  },
  text: {
    color: '#000',
    fontSize: 12,
  },
});
