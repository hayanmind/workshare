import React from 'react';
import { View, SafeAreaView, StatusBar, Platform, TouchableWithoutFeedback, Keyboard, Text, TextInput, StyleSheet } from 'react-native';
import colorConstant from '../constants/Colors';
import styleConst from '../constants/Layout';
import ButtonCustom from '../components/ButtonCustom';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const UserRegisterScreen = ({ navigation }) => {

  // now it leads the user to login screen but later it should call register function
  const validateRegister = () => {
    navigation.navigate('Login');
  };

  const extraScrollHeightPlatform = (Platform.OS === 'ios' ? 70 : 120);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={Platform.OS === 'ios' ? "dark-content" : "light-content"} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAwareScrollView extraScrollHeight={extraScrollHeightPlatform} enableOnAndroid={true}>
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
              ref={(input) => { this.userEmailAddress = input; }}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <Text style={styleConst.inputTextFieldLabel}>Password:</Text>
            <TextInput
              placeholder="********"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              returnKeyType="next"
              secureTextEntry
              onSubmitEditing={() => this.userPasswordInputAgain.focus()}
              ref={(input) => { this.userPasswordInput = input; }}
              style={styleConst.inputTextField}
            />
            <Text style={styleConst.inputTextFieldLabel}>Password Again:</Text>
            <TextInput
              placeholder="********"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              returnKeyType="go"
              secureTextEntry
              onSubmitEditing={validateRegister}
              ref={(input) => { this.userPasswordInputAgain = input }}
              style={styleConst.inputTextField}
            />
            <ButtonCustom style="register" onPress={validateRegister} />
          </View>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
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
