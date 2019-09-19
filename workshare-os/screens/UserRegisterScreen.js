import React, { useState } from 'react';
import { View, SafeAreaView, StatusBar, Platform, TouchableWithoutFeedback, Keyboard, Text, TextInput, Alert, StyleSheet } from 'react-native';
import colorConstant from '../constants/Colors';
import styleConst from '../constants/Layout';
import ButtonCustom from '../components/ButtonCustom';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as firebase from 'firebase';

const UserRegisterScreen = ({ navigation }) => {

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const validateRegister = () => {
    if (password !== passwordConfirm) {
      Alert.alert("Passwords do not match.");
      return;
    }
    firebase.auth().createUserWithEmailAndPassword(emailAddress, password)
      .then(() => {
        firebase.auth().signInWithEmailAndPassword(emailAddress, password)
          .then(() => {
            navigation.navigate('Main');
          }, (error) => {
            Alert.alert(error.message);
          })
      }, (error) => {
        Alert.alert(error.message);
      });
  };

  const extraScrollHeightPlatform = (Platform.OS === 'ios' ? 70 : 120);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={Platform.OS === 'ios' ? "dark-content" : "light-content"} />
      <KeyboardAwareScrollView extraScrollHeight={extraScrollHeightPlatform} enableOnAndroid={true} keyboardShouldPersistTaps={'handled'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.viewContainer}>
            <Text style={styleConst.inputTextFieldLabel}>First Name:</Text>
            <TextInput
              style={styleConst.inputTextField}
              placeholder="John"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              returnKeyType="next"
              onSubmitEditing={() => this.userLastName.focus()}
              autoCorrect={false}
            />
            <Text style={styleConst.inputTextFieldLabel}>Last Name:</Text>
            <TextInput
              style={styleConst.inputTextField}
              placeholder="Doe"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              returnKeyType="next"
              onSubmitEditing={() => this.userEmailAddress.focus()}
              ref={(input) => { this.userLastName = input; }}
              autoCorrect={false}
            />
            <Text style={styleConst.inputTextFieldLabel}>Email Address:</Text>
            <TextInput
              style={styleConst.inputTextField}
              placeholder="example@domain.com"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              returnKeyType="next"
              onSubmitEditing={() => this.userPasswordInput.focus()}
              onChangeText={(text) => setEmailAddress(text)}
              value={emailAddress}
              ref={(input) => { this.userEmailAddress = input; }}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="always"
            />
            <Text style={styleConst.inputTextFieldLabel}>Password:</Text>
            <TextInput
              placeholder="********"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              returnKeyType="next"
              secureTextEntry
              onSubmitEditing={() => this.userPasswordInputAgain.focus()}
              onChangeText={(text) => setPassword(text)}
              value={password}
              ref={(input) => { this.userPasswordInput = input; }}
              style={styleConst.inputTextField}
              clearButtonMode="always"
            />
            <Text style={styleConst.inputTextFieldLabel}>Password Again:</Text>
            <TextInput
              placeholder="********"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              returnKeyType="go"
              secureTextEntry
              onSubmitEditing={validateRegister}
              onChangeText={(text) => setPasswordConfirm(text)}
              value={passwordConfirm}
              ref={(input) => { this.userPasswordInputAgain = input }}
              style={styleConst.inputTextField}
              clearButtonMode="always"
            />
            <ButtonCustom style="register" onPress={validateRegister} buttonText="Register" />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
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
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  registerButtonContainer: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    marginBottom: 10,
  },
});

export default UserRegisterScreen;
