import React from 'react';
import { SafeAreaView, StatusBar, Platform, TouchableWithoutFeedback, Keyboard, View, Text, TextInput, StyleSheet } from 'react-native';
import colorConstant from '../constants/Colors';
import styleConst from '../constants/Layout';
import ButtonCustom from '../components/ButtonCustom';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const CompanyRegisterScreen = ({ navigation }) => {

  const validateRegister = () => {
    navigation.navigate('Login');
  };

  const extraScrollHeightPlatform = (Platform.OS === 'ios' ? 110 : 20);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={Platform.OS === 'ios' ? "dark-content" : "light-content"} />
      <KeyboardAwareScrollView extraScrollHeight={extraScrollHeightPlatform} enableOnAndroid={true}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>
          <View style={styles.viewContainer}>
            <Text style={styleConst.inputTextFieldLabel}>Company Name:</Text>
            <TextInput
              style={styleConst.inputTextField}
              placeholder="My company"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              returnKeyType="next"
              onSubmitEditing={() => this.companyEmailInput.focus()}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <Text style={styleConst.inputTextFieldLabel}>Your Account Email Address:</Text>
            <TextInput
              style={styleConst.inputTextField}
              placeholder="example@domain.com"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              returnKeyType="next"
              onSubmitEditing={() => this.companyPasswordInput.focus()}
              ref={(input) => { this.companyEmailInput = input }}
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
              onSubmitEditing={validateRegister}
              ref={(input) => { this.companyPasswordInput = input }}
              style={styleConst.inputTextField}
            />
            <ButtonCustom style="register" onPress={validateRegister} />
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
    padding: 20,
  },
  registerButtonContainer: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    marginBottom: 10,
  },
});

export default CompanyRegisterScreen;
