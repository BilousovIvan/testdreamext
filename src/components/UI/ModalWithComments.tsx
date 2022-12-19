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
import Comments from '../Comments';

interface ModalCommentsProps {
  id: number | string;
  close: Function;
}
const ModalWithComments = ({id, close}: ModalCommentsProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [comments, setComments] = useState([
    {
      postId: 1,
      id: 1,
      name: 'id labore ex et quam laborum',
      email: 'Eliseo@gardner.biz',
      body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
    },
    {
      postId: 1,
      id: 2,
      name: 'quo vero reiciendis velit similique earum',
      email: 'Jayne_Kuhic@sydney.com',
      body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
    },
    {
      postId: 1,
      id: 3,
      name: 'odio adipisci rerum aut animi',
      email: 'Nikita@garfield.biz',
      body: 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione',
    },
    {
      postId: 1,
      id: 4,
      name: 'alias odio sit',
      email: 'Lew@alysha.tv',
      body: 'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati',
    },
    {
      postId: 1,
      id: 5,
      name: 'vero eaque aliquid doloribus et culpa',
      email: 'Hayden@althea.biz',
      body: 'harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et',
    },
  ]);
  console.log(id);

  const closeBtnHandler = () => {
    console.log('press close in modal');
    close(false);
  };

  return (
    <Modal style={styles.modalWrapper} visible={true}>
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
      <FlatList
        data={comments}
        renderItem={({item}: ListRenderItemInfo<ItemType>) => (
          <Comments item={item} />
        )}
        keyExtractor={index => index.id}
      />
    </Modal>
  );
};

export default ModalWithComments;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#000',
  },
  modalWrapper: {
    height: '100%',
  },
  headerModal: {
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: 12,
  },
});
