import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LoginScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Text>Hello I'm login</Text>
      <Button title="Login" onPress={() => navigation.navigate('Main')}/>
      <Button title="Register" onPress={() => navigation.navigate('Register')}/>
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

export default LoginScreen;
