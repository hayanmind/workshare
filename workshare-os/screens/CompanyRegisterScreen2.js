import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, Platform, TouchableWithoutFeedback, Keyboard, View, Text, TextInput, StyleSheet } from 'react-native';
import { useAuth } from '../customHook/useAuth';
import constantColor from '../constants/Colors';
import styleConst from '../constants/Layout';
import ButtonCustom from '../components/ButtonCustom';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const CompanyRegisterScreen2 = ({ navigation }) => {
  const [propData, setPropData] = useState();
  const [companyName, setCompanyName] = useState('');

  const auth = useAuth();

  const userId = auth.user.uid;
  const values = ['hase', 'maus']

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
        [userId]: ['creator'],
      }
    })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
    // navigation.navigate('Login');
  };

  const extraScrollHeightPlatform = (Platform.OS === 'ios' ? 110 : 20);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={Platform.OS === 'ios' ? "dark-content" : "light-content"} />
      <KeyboardAwareScrollView extraScrollHeight={extraScrollHeightPlatform} enableOnAndroid={true} keyboardShouldPersistTaps={'handled'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>
          <View style={styles.viewContainer}>
            <Text style={{ color: '#fff', borderColor: '#fff', borderWidth: 1, padding: 10, marginBottom: 20 }}>It seems that you are not belonging to a company yet! Create your own company now and add your employees or speak to your superior that you need to be added to the company with your email address, go back to the login screen, and try again later.</Text>
            <Text style={styleConst.inputTextFieldLabel}>Company Name:</Text>
            <TextInput
              style={styleConst.inputTextField}
              placeholder="My company"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              returnKeyType="next"
              // onSubmitEditing={() => this.companyEmailInput.focus()}
              onChangeText={setCompanyName}
              value={companyName}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <View style={{ marginTop: 10 }}>
              <ButtonCustom style="register" onPress={validateRegister} buttonText="Register" />
            </View>
            <View style={{ flex: 1 }}>
              <ButtonCustom onPress={() => console.log('propData :', propData)} buttonText="Logger" />
            </View>
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
});

export default CompanyRegisterScreen2;
