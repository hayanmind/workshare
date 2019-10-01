import React, { useState } from 'react';
import { Alert, View, TextInput, TouchableWithoutFeedback, Keyboard, Text, StyleSheet } from 'react-native';
import ButtonCustom from '../components/ButtonCustom';
import { withNavigation } from 'react-navigation';
import styleConst from '../constants/Layout';
import { useAuth } from '../customHook/useAuth';

const LoginFormInput = ({ navigation }) => {

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const auth = useAuth();

  const validateLogin = () => {
    auth.signIn(emailAddress, password)
      .then((user) => {
        auth.setUserLoginData(emailAddress, password);
        const userId = user.uid;
        auth.db.collection('users')
          .where('userId', '==', userId)
          .get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              const orgId = doc.data().orgId;
              auth.setUserDoc(doc.data());
              // ToDo add validating based on document title length
              (orgId.length === 0)
                ? navigation.navigate('RegisterCompany')
                : navigation.navigate('Main');
            });
          })
      }, (error) => {
        Alert.alert(error.message);
      });
  };

  const extraScrollHeightPlatform = (Platform.OS === 'ios' ? 70 : 120);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback extraScrollHeight={extraScrollHeightPlatform} onPress={Keyboard.dismiss} style={styles.container}>
        <View>
          <Text style={styleConst.inputTextFieldLabel}>Email address:</Text>
          <TextInput
            style={styleConst.inputTextField}
            placeholder="example@domain.com"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            onChangeText={setEmailAddress}
            value={emailAddress}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
          />
          <Text style={styleConst.inputTextFieldLabel}>Password:</Text>
          <TextInput
            style={styleConst.inputTextField}
            placeholder="********"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            returnKeyType="go"
            secureTextEntry
            onSubmitEditing={validateLogin}
            onChangeText={setPassword}
            value={password}
            ref={(input) => { this.passwordInput = input }}
            clearButtonMode="always"
          />
          <ButtonCustom style="login" onPress={validateLogin} buttonText="Login" />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  loginButtonContainer: {
    backgroundColor: '#2ecc71',
    paddingVertical: 15,
    marginBottom: 10,
  },
  buttonText: {
    fontWeight: '700',
    textAlign: 'center',
    color: '#fff',
  },
});

export default withNavigation(LoginFormInput);
