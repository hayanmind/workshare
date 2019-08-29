import React from 'react';
import { View, SafeAreaView, StatusBar, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Text, TextInput, Image, Button, StyleSheet } from 'react-native';
import LoginFormInput from '../components/LoginFormInput';
import colorConstant from '../constants/Colors';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image 
                style={styles.logo}
                source={require('../assets/images/LOGO.png')}
              />
              <Text style={styles.title}>Share your working hours and status with colleagues.</Text>
            </View>
            <LoginFormInput />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorConstant.mainColor,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    color: '#ffffff',
    marginTop: 10,
    width: 200,
    textAlign: 'center',
    opacity: 0.7 ,
  },
});

export default LoginScreen;
