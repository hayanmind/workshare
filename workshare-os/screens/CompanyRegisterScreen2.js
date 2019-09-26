import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, Platform, TouchableWithoutFeedback, Keyboard, View, Text, TextInput, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import useDidUpdateEffect from '../customHook/useDidUpdateEffect';
import { useAuth } from '../customHook/useAuth';
import colorConstant from '../constants/Colors';
import styleConst from '../constants/Layout';
import ButtonCustom from '../components/ButtonCustom';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const CompanyRegisterScreen = ({ navigation }) => {
  
  const [propData, setPropData] = useState();
  
  const auth = useAuth();

  useEffect(() => {
    console.log('triggered :');
    const loginData = auth.getUserLoginData();
    setPropData(loginData);
  }, []);

  const validateRegister = () => {
    navigation.navigate('Login');
  };

  const extraScrollHeightPlatform = (Platform.OS === 'ios' ? 110 : 20);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={Platform.OS === 'ios' ? "light-content" : "light-content"} />
      <KeyboardAwareScrollView extraScrollHeight={extraScrollHeightPlatform} enableOnAndroid={true} keyboardShouldPersistTaps={'handled'}>
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
            <ButtonCustom style="register" onPress={validateRegister} buttonText="Register" />
            <ButtonCustom style="register" onPress={()=> console.log('propData :', propData)} buttonText="Register" />
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
