import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import useDidUpdateEffect from '../customHook/useDidUpdateEffect';
import { useAuth } from '../customHook/useAuth';
import constantColor from '../constants/Colors';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const ClockInOutButton = ({ enabled, isClockInButton }) => {
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [timestamp, setTimestamp] = useState(0);
  const [isLocationInPreperation, setIsLocationInPreparation] = useState(false);

  useEffect(() => {
    setIsClockedIn(isClockInButton);
  }, [isClockInButton]);

  const auth = useAuth();

  useDidUpdateEffect(() => {
    if (isLocationInPreperation === true) {
      setIsLocationInPreparation(false);
      auth.db.collection('events').add({
        additionalInfo: {
          latitude: latitude,
          longitude: longitude,
        },
        createdAt: timestamp,
        type: (isClockedIn) ? 'clocked-in' : 'clocked-out',
        userId: auth.user.uid,
      })
        .then((docRef) => {
          auth.updateUsersStatus(
            docRef.id,
            (isClockedIn) ? timestamp : 0,
            (isClockedIn) ? 0 : timestamp,
            (isClockedIn) ? 'clocked-in' : 'clocked-out');
        });
    }
  }, [isLocationInPreperation]);

  const _getLocationAsync = async () => {
    const currentLocation = await Location.getCurrentPositionAsync({});
    setLatitude(currentLocation.coords.latitude);
    setLongitude(currentLocation.coords.longitude);
    setTimestamp(currentLocation.timestamp);
  };

  const handleOnPress = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      Alert.alert("Permission to access location was denied");
    }
    setIsClockedIn(!isClockedIn);
    _getLocationAsync()
      .then(() => {
        setIsLocationInPreparation(true);
      })
      .catch(error => {
        console.log('error :', error);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={[styles.button, { backgroundColor: (isClockedIn) ? constantColor.logoutColor : constantColor.loginColor }]}
        onPress={handleOnPress}
        underlayColor={(isClockedIn) ? constantColor.logoutColorOpacity : constantColor.loginColorOpacity}
        disabled={!enabled || isLocationInPreperation}
      >
        <Text style={styles.text}>{(isClockedIn) ? "clock out" : "clock in"}</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: "700",
  },
});

export default ClockInOutButton;
