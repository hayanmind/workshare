import React from 'react';
import { View, SafeAreaView, StatusBar, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import LoginFormInput from '../components/LoginFormInput';
import colorConstant from '../constants/Colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }} enableOnAndroid={true} keyboardShouldPersistTaps={'handled'}>
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
      </KeyboardAwareScrollView>
      <TouchableOpacity style={styles.registerButtonContainer} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>No account?
          <Text style={styles.boldText}> Click here, </Text>{"\n"}
          to register yourself!
        </Text>
      </TouchableOpacity>
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
    width: 140,
    height: 140,
  },
  title: {
    color: '#ffffff',
    marginTop: 10,
    width: 200,
    textAlign: 'center',
    opacity: 0.7,
  },
  registerButtonContainer: {
    paddingVertical: 15,
    marginBottom: 10,
  },
  buttonText: {
    fontWeight: '700',
    textAlign: 'center',
    color: '#fff',
  },
  registerText: {
    textAlign: 'center',
    color: '#fff',
  },
  boldText: {
    fontWeight: '700',
  },
});

export default LoginScreen;
