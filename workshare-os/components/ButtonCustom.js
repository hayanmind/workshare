import React from 'react';
import { TouchableOpacity, Text, StyleSheet} from 'react-native'

const ButtonCustom = (props) => {
  
  const {
    style = {},
    onPress,
  } = props;

  const buttonColor = (style === 'login') 
    ? styles.loginButton
    : (style === 'register')
      ? styles.registerButton
      : styles.buttonDefaultStyle

  return(
    <TouchableOpacity style={buttonColor} onPress={onPress}>
        <Text style={styles.buttonText}>Register</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: '700',
    textAlign: 'center',
    color: '#fff',
  },
  loginButton: {
    backgroundColor: '#2ecc71',
    paddingVertical: 15,
    marginBottom: 10,
  },
  registerButton: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    marginBottom: 10,
  },
  buttonDefaultStyle: {
    backgroundColor: '#7f8c8d',
    paddingVertical: 15,
    marginBottom: 10,
  },
});

export default ButtonCustom;
