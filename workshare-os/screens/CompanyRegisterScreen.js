import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, Platform, TouchableWithoutFeedback, Keyboard, View, Text, TextInput, StyleSheet } from 'react-native';
import { useAuth } from '../customHook/useAuth';
import constantColor from '../constants/Colors';
import styleConst from '../constants/Layout';
import ButtonCustom from '../components/ButtonCustom';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const CompanyRegisterScreen = ({ navigation }) => {
  const [propData, setPropData] = useState({
    'emailAddress': '',
    'password': '',
  });
  const [companyName, setCompanyName] = useState('');

  const auth = useAuth();
  const userId = auth.user.uid;

  useEffect(() => {
    const loginData = auth.getUserLoginData();
    setPropData(loginData);
  }, []);

  const validateRegister = () => {
    auth.db.collection("organizations").add({
      orgName: companyName,
      createdBy: userId,
      members: [userId],
      roles: {
        [userId]: ['Creator'],
      }
    })
      .then((docRef) => {
        return auth.updateUsersOrgIdByUserId(docRef.id, userId);
      })
      .then(() => {
        return auth.signIn(propData.emailAddress, propData.password);
      })
      .then(() => {
        return auth.loadUserDocument();
      })
      .then(() => {
        navigation.navigate('Main');
      })
      .catch((error) => {
        console.error("Error adding document update user organization id or login: ", error);
      });
  };

  const extraScrollHeightPlatform = (Platform.OS === 'ios' ? 110 : 20);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={Platform.OS === 'ios' ? "dark-content" : "light-content"} />
      <KeyboardAwareScrollView extraScrollHeight={extraScrollHeightPlatform} enableOnAndroid={true} keyboardShouldPersistTaps={'handled'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>
          <View style={styles.viewContainer}>
            <Text style={styles.textBox}>It seems that you are not belonging to a company yet! Create your own company now and add your employees or speak to your superior that you need to be added to the company with your email address, go back to the login screen, and try again later.</Text>
            <Text style={styleConst.inputTextFieldLabel}>Company Name:</Text>
            <TextInput
              style={styleConst.inputTextField}
              placeholder="My company"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              returnKeyType="next"
              onSubmitEditing={validateRegister}
              onChangeText={setCompanyName}
              value={companyName}
              autoCapitalize="none"
              autoCorrect={false}
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
    backgroundColor: constantColor.mainColor,
  },
  viewContainer: {
    flex: 1,
    padding: 20,
  },
  textBox: {
    color: '#fff',
    borderColor: '#fff',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20
  }
});

export default CompanyRegisterScreen;
