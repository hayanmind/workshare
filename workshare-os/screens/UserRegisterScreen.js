import React from 'react';
import { View, SafeAreaView, StatusBar, Text, Button, StyleSheet } from 'react-native';
import InputField from '../components/InputField';
import colorConstant from '../constants/Colors';

const UserRegisterScreen = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <View style={styles.container}>
        <Text>Hello I'm a USER register screen</Text>
        <InputField 
          style={styles.textInput}
          placeholder="e-mail address"
          placeholderTextColor= "rgba(255, 255, 255, 0.5)"  
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Button title="Register" onPress={() => navigation.navigate('Login')}/>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorConstant.mainColor,
  },
});

export default UserRegisterScreen;
