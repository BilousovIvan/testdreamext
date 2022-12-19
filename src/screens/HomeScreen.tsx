import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Post from '../components/Post';
import {useLinkTo} from '@react-navigation/native';
import ButtonsComponent from '../components/UI/ButtonsComponent';
import Snackbar from 'react-native-snackbar';

const HomeScreen = () => {
  const linkTo = useLinkTo();

  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPost(json))
      .catch(error => {
        Snackbar.show({
          text: 'loading error...',
          duration: Snackbar.LENGTH_LONG,
        });
      });
  }, []);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <ButtonsComponent
            title="Log Out"
            onPress={() => linkTo({screen: 'Login'})}
            width={90}
          />
        </View>

        {post.length >= 1 ? (
          <FlatList
            data={post}
            renderItem={Post}
            keyExtractor={index => index.id}
          />
        ) : (
          <View style={styles.preloader}>
            <ActivityIndicator size={'large'} />
          </View>
        )}
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
  header: {
    alignItems: 'flex-end',
    paddingHorizontal: 24,
    height: '7%',
  },
  preloader: {
    height: '93%',
    justifyContent: 'center',
  },
});
