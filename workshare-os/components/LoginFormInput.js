import React from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Button, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

const LoginFormInput  = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.textInput}
        placeholder="e-mail address"
        placeholderTextColor= "rgba(255, 255, 255, 0.5)"  
        returnKeyType="next"
        onSubmitEditing={() => this.passwordInput.focus()}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput 
        style={styles.textInput}
        placeholder="password"
        placeholderTextColor= "rgba(255, 255, 255, 0.5)"
        returnKeyType="go"
        secureTextEntry
        onSubmitEditing={() => navigation.navigate('Main')}
        ref={(input) => this.passwordInput = input}
        />
      <TouchableOpacity style={styles.loginButtonContainer} onPress={() => navigation.navigate('Main')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButtonContainer} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textInput: {
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#ffffff',
    backgroundColor: 'rgba(255, 255, 255, 0.3)'
  },
  loginButtonContainer: {
    backgroundColor: '#2ecc71',
    paddingVertical: 15,
    marginBottom: 10,
  },
  registerButtonContainer: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    marginBottom: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
  }
});

export default withNavigation(LoginFormInput);
