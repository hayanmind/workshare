import React, { useState } from 'react';
import { Alert, View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import styleConst from '../constants/Layout';
import * as firebase from 'firebase';

const LoginFormInput = ({ navigation }) => {

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const validateLogin = () => {
    firebase.auth().signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        navigation.navigate('Main');
      }, (error) => {
        Alert.alert(error.message);
        setPassword('');
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styleConst.inputTextFieldLabel}>Email address:</Text>
      <TextInput
        style={styleConst.inputTextField}
        placeholder="example@domain.com"
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        returnKeyType="next"
        onSubmitEditing={() => this.passwordInput.focus()}
        onChangeText={(text) => setEmailAddress(text)}
        value={emailAddress}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text style={styleConst.inputTextFieldLabel}>Password:</Text>
      <TextInput
        style={styleConst.inputTextField}
        placeholder="********"
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        returnKeyType="go"
        secureTextEntry
        onSubmitEditing={validateLogin}
        onChangeText={(text) => setPassword(text)}
        value={password}
        ref={(input) => { this.passwordInput = input }}
      />
      <TouchableOpacity style={styles.loginButtonContainer} onPress={validateLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  loginButtonContainer: {
    backgroundColor: '#2ecc71',
    paddingVertical: 15,
    marginBottom: 10,
  },
  buttonText: {
    fontWeight: '700',
    textAlign: 'center',
    color: '#fff',
  },
});

export default withNavigation(LoginFormInput);
