import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ListRenderItemInfo,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Post from '../components/Post';
import {useLinkTo} from '@react-navigation/native';
import ButtonsComponent from '../components/UI/ButtonsComponent';
import Snackbar from 'react-native-snackbar';
import ModalWithComments from '../components/UI/ModalWithComments';
import NetInfo, {useNetInfo} from '@react-native-community/netinfo';
import {TextStyles} from '../styles/TextStyles';

const HomeScreen = () => {
  const linkTo = useLinkTo();

  const [post, setPost] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(Number);
  const [isConnect, setConnection] = useState('');

  const netInfo = useNetInfo();

  useEffect(() => {
    fetchPostData();
    // Subscribe to internet state
    const internetInfo = NetInfo.addEventListener(state => {
      setConnection(`Is connected: ${state.isConnected}`);
      console.log(state.isConnected);

      console.log(isConnect);
    });
    internetInfo();
  }, []);

  const fetchPostData = () => {
    // TODO Pass request link to env variable
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPost(json))
      .catch(error => {
        Snackbar.show({
          text: 'loading error...',
          duration: Snackbar.LENGTH_INDEFINITE,
          action: {
            text: 'Repeat request',
            textColor: 'green',
            onPress: () => {
              fetchPostData();
            },
          },
        });
      });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          {netInfo.isConnected ? (
            <Text></Text>
          ) : (
            <Text style={TextStyles.mainHeaderBlack}>
              No internet connection
            </Text>
          )}

          <ButtonsComponent
            title="Log Out"
            onPress={() => linkTo({screen: 'Login'})}
            width={90}
          />
        </View>

        {post.length >= 1 ? (
          <>
            <FlatList
              data={post}
              renderItem={({item}: ListRenderItemInfo<ItemType>) => (
                <Post
                  item={item}
                  onPress={setModalVisible}
                  setId={setSelectedPostId}
                />
              )}
              keyExtractor={index => index.id}
            />
            {modalVisible ? (
              <ModalWithComments id={selectedPostId} close={setModalVisible} />
            ) : (
              <></>
            )}
          </>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    height: '7%',
    flexDirection: 'row',
  },
  preloader: {
    height: '93%',
    justifyContent: 'center',
  },
});
