import React from 'react';
import { View, SafeAreaView, StatusBar, Text, Button, StyleSheet } from 'react-native';
import colorConstant from '../constants/Colors';

const UserRegisterScreen = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <View style={styles.container}>
        <Text>Hello I'm a USER register screen</Text>
        <Button title="Register" onPress={() => navigation.navigate('Login')}/>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorConstant.mainColor,
  },
});

export default UserRegisterScreen;
