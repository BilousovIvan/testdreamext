import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {TextStyles} from '../styles/TextStyles';
import {useSafeAreaFrame} from 'react-native-safe-area-context';

const LoginScreen = () => {
  // Приветствие
  const Greetings: string = 'Hello!';

  // Email and Pass
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <SafeAreaView>
      <View style={styles.formWrapper}>
        <Text style={TextStyles.mainHeaderBlack}>{Greetings}</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <TextInput
          value={pass}
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={value => setPass(value)}
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={TextStyles.subHeaderWhite}>Login</Text>
        </TouchableOpacity>
        <TextInput />
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
