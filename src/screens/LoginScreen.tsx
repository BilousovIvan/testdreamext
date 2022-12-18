import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.formWrapper}>
        <Text>Login</Text>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />

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
});
