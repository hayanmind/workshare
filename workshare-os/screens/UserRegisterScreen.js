import React, { useState } from 'react';
import { View, SafeAreaView, StatusBar, Platform, TouchableWithoutFeedback, Keyboard, Text, TextInput, Alert, StyleSheet } from 'react-native';
import colorConstant from '../constants/Colors';
import styleConst from '../constants/Layout';
import ButtonCustom from '../components/ButtonCustom';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useAuth } from '../customHook/useAuth';

const UserRegisterScreen = ({ navigation }) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastname] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const auth = useAuth();

  const addUserToFirestore = (userId) => {
    auth.db.collection('users').add({
      name: {
        firstName: firstName,
        lastName: lastName,
      },
      orgId: "",
      pushNotiEnabled: false,
      status: {
        eventId: "",
        from: new Date().getTime(),
        to: "",
        type: "created",
      },
      workHoursWeekly: 0,
      emailAddress: emailAddress,
      userId: userId,
    })
  };

  const validateRegister = () => {
    if ((firstName.length === 0) || (lastName.length === 0)) {
      Alert.alert("Please enter a valid Name.");
      return;
    }
    if (password !== passwordConfirm) {
      Alert.alert("Passwords do not match.");
      return;
    }
    auth.signUp(emailAddress, password)
      .then(() => auth.signIn(emailAddress, password))
      .then((user) => addUserToFirestore(user.uid))
      .then(() => navigation.navigate('Main'))
      .catch(error => {
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
              onChangeText={setFirstName}
              value={firstName}
              autoCorrect={false}
            />
            <Text style={styleConst.inputTextFieldLabel}>Last Name:</Text>
            <TextInput
              style={styleConst.inputTextField}
              placeholder="Doe"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              returnKeyType="next"
              onSubmitEditing={() => this.userEmailAddress.focus()}
              onChangeText={setLastname}
              value={lastName}
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
              onChangeText={setEmailAddress}
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
              onChangeText={setPassword}
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
              onChangeText={setPasswordConfirm}
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
