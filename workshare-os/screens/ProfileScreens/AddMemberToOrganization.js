import React, { useState } from 'react';
import { Alert, View, SafeAreaView, StatusBar, Platform, TouchableWithoutFeedback, Keyboard, Text, TextInput, StyleSheet } from 'react-native';
import { useAuth } from '../../customHook/useAuth';
import styleConst from '../../constants/Layout';
import ButtonCustom from '../../components/ButtonCustom';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AddMemberToOrganization = () => {

  const [emailAddress, setEmailAddress] = useState('');
  const [role, setRole] = useState([]);

  const isEmailAddressEmpty = (emailAddress.length === 0);
  const isRoleEmpty = (role.length === 0);

  const auth = useAuth();

  const updateOrgAndUser = (OrgCreatorOrgId, newMemberUid) => {
    auth.updateUsersOrgIdByUserId(OrgCreatorOrgId, newMemberUid);
    auth.updateOrgState(OrgCreatorOrgId, newMemberUid, role);
  };

  const validateAdd = () => {
    if (isEmailAddressEmpty) {
      Alert.alert('Email address is empty.')
      return;
    }
    if (isRoleEmpty) {
      Alert.alert('Role is empty.')
      return;
    }
    auth.db.collection('users')
      .where('emailAddress', '==', emailAddress)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log('1');
          const newMemberOrgId = doc.data().orgId;
          console.log('2');
          const newMemberUid = doc.data().userId;
          console.log('3');
          const OrgCreatorOrgId = auth.usersDocument.orgId;
          console.log('4');
          // ToDo add validating based on document title length
          (newMemberOrgId.length === 0)
            ? updateOrgAndUser(OrgCreatorOrgId, newMemberUid)
            : Alert.alert('This user has been added already!');
        });
      })
    console.log('added :', emailAddress, role);
  };

  const extraScrollHeightPlatform = (Platform.OS === 'ios' ? 70 : 120);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={Platform.OS === 'ios' ? "dark-content" : "light-content"} />
      <KeyboardAwareScrollView extraScrollHeight={extraScrollHeightPlatform} enableOnAndroid={true} keyboardShouldPersistTaps={'handled'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.viewContainer}>
            <Text style={styleConst.inputTextFieldLabelWhiteBackground}>Email Address of the new Member:</Text>
            <TextInput
              style={styleConst.inputTextFieldWhiteBackground}
              selectionColor="#fff"
              placeholder="example@domain.com"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              returnKeyType="next"
              onSubmitEditing={() => this.userEmailAddress.focus()}
              onChangeText={setEmailAddress}
              value={emailAddress}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="always"
            />
            <Text style={styleConst.inputTextFieldLabelWhiteBackground}>Set the Role in the Company:</Text>
            <TextInput
              style={styleConst.inputTextFieldWhiteBackground}
              selectionColor="#fff"
              placeholder="e.g. Manager, Designer, Marketing"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              returnKeyType="go"
              onSubmitEditing={validateAdd}
              onChangeText={setRole}
              value={role}
              ref={(input) => { this.userEmailAddress = input; }}
              autoCorrect={false}
              clearButtonMode="always"
            />
            <ButtonCustom style="register" onPress={validateAdd} buttonText="Add" />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

AddMemberToOrganization.navigationOptions = {
  title: 'Add a Member',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
});

export default AddMemberToOrganization;
