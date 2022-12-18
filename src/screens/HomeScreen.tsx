import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Post from '../components/Post';

const HomeScreen = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(json => setPost(json))
      .catch(error => {});
  }, []);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={post}
          renderItem={Post}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
