import {
  StyleSheet,
  Text,
  View,
  Modal,
  TextBase,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  FlatList,
  ListRenderItemInfo,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ButtonsComponent from './ButtonsComponent';
import {TextStyles} from '../../styles/TextStyles';
import Comments from '../Comments';
import Snackbar from 'react-native-snackbar';

interface ModalCommentsProps {
  id: number | string;
  close: Function;
}

interface CommentsProperties {
  postId: number | string;
  id: number | string;
  name: string;
  email: string;
  body: string;
}
const ModalWithComments = ({id, close}: ModalCommentsProps) => {
  const GET_COMMENTS =
    'https://jsonplaceholder.typicode.com/comments?postId=' + id;
  const [modalVisible, setModalVisible] = useState(false);

  const [comments, setComments] = useState([]);
  console.log(id);

  const closeBtnHandler = () => {
    console.log('press close in modal');
    close(false);
  };
  useEffect(() => {
    fetchPostData();
  }, []);

  const fetchPostData = () => {
    // TODO Pass request link to env variable
    fetch(GET_COMMENTS)
      .then(response => response.json())
      .then(json => setComments(json))
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
    <Modal visible={true} transparent={true}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.close}
          onPress={() => closeBtnHandler()}></TouchableOpacity>
        <View style={styles.modalWrapper}>
          <View style={styles.headerModal}>
            <ButtonsComponent
              title="close"
              width={70}
              onPress={() => closeBtnHandler()}
            />
          </View>
          <View>
            <Text style={TextStyles.mainHeaderBlack}>
              Post comments with id: {id}
            </Text>
          </View>
          {comments.length >= 1 ? (
            <FlatList
              data={comments}
              renderItem={({item}: ListRenderItemInfo<ItemType>) => (
                <Comments item={item} />
              )}
              keyExtractor={index => index.id}
            />
          ) : (
            <View style={styles.preloaderContainer}>
              <ActivityIndicator size={'large'} />
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default ModalWithComments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    zIndex: 999,
  },
  modalWrapper: {
    height: '50%',
    padding: 12,
    backgroundColor: '#fff',
  },
  headerModal: {
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: 12,
  },
  close: {
    height: '50%',
  },
  preloaderContainer: {
    width: '100%',
    height: '50%',

    alignItems: 'center',
    justifyContent: 'center',
  },
});
