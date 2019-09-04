import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import constantColor from '../constants/Colors';

const SettingsButton = (props) => {
  const {
    iconPath,
    onPress,
    text,
  } = props;

  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchContainer} onPress={onPress}>
        <Image style={styles.settingIcon} source={iconPath} />
        <View style={styles.seperatorLine} />
        <Text style={styles.textStyle}>{text}</Text>
        <AntDesign name="right" size={25} style={styles.rightArrow} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  touchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: constantColor.mainColor,
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
    bottom: 5,
    color: constantColor.lightGrayColor,
  },
  seperatorLine: {
    backgroundColor : constantColor.mainColor,
    width: 1,
    height: 30
  },
  textStyle: {
    color: "#000",
    fontSize: 16,
    marginBottom : 4,
    marginLeft: 5,
  },
});

export default SettingsButton;
