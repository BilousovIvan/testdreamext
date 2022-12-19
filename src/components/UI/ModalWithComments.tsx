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
} from 'react-native';
import React, {useState} from 'react';
import ButtonsComponent from './ButtonsComponent';
import {TextStyles} from '../../styles/TextStyles';

interface ModalCommentsProps {
  id: number | string;
  close: Function;
}
const ModalWithComments = ({id, close}: ModalCommentsProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [comments, setComments] = useState([
    {postID: '1', id: 1, name: 'id labore ex et quam laborum'},
    {postID: '1', id: 2, name: 'id labore ex et quam laborum'},
  ]);
  console.log(id);

  const closeBtnHandler = () => {
    console.log('press close in modal');
    close(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={() => closeBtnHandler()}>
        <View style={styles.modalWrapper}>
          <View style={styles.headerModal}>
            <ButtonsComponent
              title="close"
              width={70}
              onPress={() => closeBtnHandler()}
            />
          </View>
          <View>
            <Text style={TextStyles.mainHeaderBlack}>{id} id </Text>
          </View>
          <FlatList
            data={comments}
            renderItem={({item}: ListRenderItemInfo<ItemType>) => (
              <RenderComments item={item} />
            )}
            keyExtractor={index => index.id}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ModalWithComments;

const styles = StyleSheet.create({
  container: {
    height: '93%',
    width: '100%',
  },
  modalWrapper: {
    alignItems: 'center',
    width: '100%',
    height: '70%',
  },
  headerModal: {
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: 12,
  },
});
