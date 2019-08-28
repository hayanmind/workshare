import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const RegisterScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Text>Hello I'm register screen</Text>
      <Button title="Register" onPress={() => navigation.navigate('Login')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default RegisterScreen;
