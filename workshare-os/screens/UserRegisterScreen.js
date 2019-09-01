import React from 'react';
import { View, SafeAreaView, StatusBar, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Text, TextInput, StyleSheet } from 'react-native';
import colorConstant from '../constants/Colors';
import styleConst from '../constants/Layout';
import ButtonCustom from '../components/ButtonCustom';

const UserRegisterScreen = ({navigation}) => {

  // now it leads the user to login screen but later it should call register function
  const validateRegister = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>
          <View style={styles.viewContainer}>
            <Text style={styleConst.inputTextFieldLabel}>Email address:</Text>
            <TextInput
              style={styleConst.inputTextField}
              placeholder="example@domain.com"
              placeholderTextColor= "rgba(255, 255, 255, 0.5)"  
              returnKeyType="next"
              onSubmitEditing={() => this.passwordInput.focus()}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <Text style={styleConst.inputTextFieldLabel}>Password:</Text>
            <TextInput
              placeholder="********"
              placeholderTextColor= "rgba(255, 255, 255, 0.5)"
              returnKeyType="next"
              secureTextEntry
              onSubmitEditing={() => this.passwordInputAgain.focus()}
              ref={(input) => this.passwordInput = input}
              style={styleConst.inputTextField}
            />
            <Text style={styleConst.inputTextFieldLabel}>Password again:</Text>
            <TextInput
              placeholder="********"
              placeholderTextColor= "rgba(255, 255, 255, 0.5)"
              returnKeyType="go"
              secureTextEntry
              onSubmitEditing={validateRegister}
              ref={(input) => this.passwordInputAgain = input}
              style={styleConst.inputTextField}
            />
            <ButtonCustom style="register" onPress={validateRegister}/>
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
  viewContainer: {
    flex: 1,
    padding: 20,
  },
  registerButtonContainer: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    marginBottom: 10,
  },
});

export default UserRegisterScreen;
