import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import constantColor from '../constants/Colors';
import SettingsButton from '../components/SettingsButton';
import { AntDesign } from '@expo/vector-icons';

const ProfileScreen = () => {
  return(
    <View style={styles.container}>
      {/* <TouchableOpacity style={{flexDirection: 'row', borderBottomWidth: 5}}>
        <Image style={{width:40, height:40, flex: 1}} source={require('../assets/images/robot-prod.png')} />
        <Text style={{flex: 5}}>Settings</Text>
        <Image style={{width:100, height:40, flex: 1}} source={require('../assets/images/robot-prod.png')} />
      </TouchableOpacity> */}
      <SettingsButton text='Settings' iconPath={require('../assets/images/robot-prod.png')}/>
      <SettingsButton text='Settings' iconPath={require('../assets/images/robot-prod.png')}/>
      <SettingsButton text='Settings' iconPath={require('../assets/images/robot-prod.png')}/>
      <SettingsButton text='Settings' iconPath={require('../assets/images/robot-prod.png')}/>
      <SettingsButton text='Settings' iconPath={require('../assets/images/robot-prod.png')}/>
      
      {/* <SettingsButton text='Settings' iconPath={<AntDesign size={25} name="user" />}/> */}
      {/* <SettingsButton text='Settings' /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

ProfileScreen.navigationOptions = {
  title: 'Profile',
  headerStyle: {
    backgroundColor: constantColor.mainColor,
  },
  headerTitleStyle: {
    color: '#fff',
  },
};

export default ProfileScreen;
