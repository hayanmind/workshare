import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { useAuth } from '../customHook/useAuth';
import useDidUpdateEffect from '../customHook/useDidUpdateEffect';
import constantColor from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const LeaveButton = () => {

  const [isLeavePressed, setLeavePressed] = useState(false);
  const [userDocumentId, setUserDocumentId] = useState('');

  useDidUpdateEffect(() => {
    auth.db.collection('users').doc(userDocumentId).update({
      'status.type': (isLeavePressed) ? 'yes' : 'no'
    })
  }, [userDocumentId]);

  const auth = useAuth();

  const handleLeavePress = () => {
    setLeavePressed(!isLeavePressed);

    auth.db.collection('users')
      .where('userId', '==', auth.user.uid)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          setUserDocumentId(doc.id);
        });
      })
      .catch(error => {
        console.log('Error getting documents', error);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={[styles.button,
        { backgroundColor: constantColor.lightGrayColor }]}
        onPress={handleLeavePress}
        underlayColor={constantColor.lightGrayColorOpacity}
      >
        <View style={styles.iconContainer}>
          <Ionicons name="ios-airplane" size={70} color="#fff" />
          <Text style={styles.text}>{(isLeavePressed) ? "close" : "open leave modal"}</Text>
        </View>
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
  iconContainer: {
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: "700",
  },
});

export default LeaveButton;
