import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import constantColor from '../constants/Colors';

const SettingsButton = (props) => {
  const {
    iconPath,
    text
  } = props;

  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchContainer}>
        <Image style={styles.settingIcon} source={iconPath} />
        <View style={styles.seperatorLine} />
        <Text style={styles.textStyle}>{text}</Text>
        <AntDesign name="right" size={25} style={styles.rightArrow} />
      </TouchableOpacity>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     // marginVertical: 10,
//     // paddingHorizontal: 10,
//   },
//   settingIcon: {
//     flex: 1,
//     width: 40,
//     height: 40,
//   },
//   seperatorLine: {

//   },
//   textStyle: {
//     flex: 5,
//     fontSize: 18,
//     paddingLeft: 30,
//     alignSelf: 'center',
//   },
//   continue: {
//     alignSelf: 'center',
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  touchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: constantColor.lightGrayColor,
    height: 40,
    margin: 5,
    width: '100%',
  },
  settingIcon: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode : 'stretch',
  },
  rightArrow: {
    position: 'absolute',
    right: 5,
    color: '#fff',
  },
  seperatorLine: {
    backgroundColor : '#fff',
    width: 1,
    height: 30
  },
  textStyle: {
    color: "#fff",
    fontSize: 16,
    marginBottom : 4,
    marginLeft: 5,
  },
  continue: {
  },
});

export default SettingsButton;
