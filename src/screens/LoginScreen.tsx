import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {TextStyles} from '../styles/TextStyles';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import ButtonsComponent from '../components/UI/ButtonsComponent';
import {USERSDATA} from '../../DATA';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  // Приветствие
  const Greetings: string = 'Hello!';

  // Email and Pass
  const [login, setLogin] = useState('email@email.com');
  const [pass, setPass] = useState('12345678');

  //status variable for loading indicator
  const [loading, setloading] = useState(false);

  const navigation = useNavigation();

  const loginHendler = () => {
    checkUsers();
  };

  const checkUsers = () => {
    let curentLogin = USERSDATA.find(users => users.login === login);
    console.log(curentLogin);
    if (curentLogin !== undefined) {
      if (curentLogin.password == pass) {
        navigation.navigate('Home');
      } else {
        Alert.alert('Invalid password');
      }
    } else {
      Alert.alert('User with this email does not exist');
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.formWrapper}>
        <Text style={TextStyles.mainHeaderBlack}>{Greetings}</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={login}
          onChangeText={value => setLogin(value)}
        />
        <TextInput
          value={pass}
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={value => setPass(value)}
        />
        {login.length > 4 && pass.length > 6 ? (
          <ButtonsComponent title="Login" onPress={loginHendler} width={120} />
        ) : (
          <></>
        )}
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  formWrapper: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  input: {
    height: 48,
    width: '80%',
    paddingHorizontal: 12,
    marginVertical: 6,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 4,
  },
  btn: {
    width: '50%',
    height: 48,
    paddingHorizontal: 12,
    marginVertical: 6,
    borderRadius: 4,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
