import React, { useState, useEffect } from 'react';
import { Alert, View, SafeAreaView, StatusBar, Platform, TouchableWithoutFeedback, Keyboard, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import { useAuth } from '../../customHook/useAuth';
import styleConst from '../../constants/Layout';
import ButtonCustom from '../../components/ButtonCustom';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AddMemberToOrganization = () => {

  const [emailAddress, setEmailAddress] = useState('');
  const [roleTextInput, setRoleTextInput] = useState('');
  const [roles, setRoles] = useState([]);

  const isEmailAddressEmpty = (emailAddress.length === 0);
  const isRoleEmpty = (roles.length === 0);
  const isRoleTextInputEmpty = (roleTextInput === '');

  const auth = useAuth();

  const updateOrgAndUser = (orgCreatorOrgId, newMemberUid) => {
    auth.updateUsersOrgIdByUserId(orgCreatorOrgId, newMemberUid);
    auth.addMemberToOrganization(orgCreatorOrgId, newMemberUid, roles);
    Alert.alert('The user has been added to your organization successfully!')
  };

  const addRolesToArray = () => {
    if (roleTextInput === 'Creator') {
      Alert.alert('You cannot set the role to Creator')
      return;
    }
    if (isRoleTextInputEmpty) {
      Alert.alert('You cannot add an empty role!')
      return;
    }
    setRoles([...roles, roleTextInput]);
    setRoleTextInput('');
  };

  const validateAddMember = () => {
    if (isEmailAddressEmpty) {
      Alert.alert('The email address field is empty.')
      return;
    }
    if (isRoleEmpty) {
      Alert.alert('You have to give the member a role.')
      return;
    }
    auth.db.collection('users')
      .where('emailAddress', '==', emailAddress.toLowerCase())
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const newMemberOrgId = doc.data().orgId;
          const newMemberUid = doc.data().userId;
          const orgCreatorOrgId = auth.usersDocument.orgId;
          // ToDo add validating based on document title length
          (newMemberOrgId.length === 0)
            ? updateOrgAndUser(orgCreatorOrgId, newMemberUid)
            : Alert.alert('This user has been added already!');
        });
      })
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
            <Text style={styleConst.inputTextFieldLabelWhiteBackground}>Role in the Company:</Text>
            <TextInput
              style={styleConst.inputTextFieldWhiteBackground}
              selectionColor="#fff"
              placeholder="e.g. Manager, Designer, Marketing"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              returnKeyType="next"
              onSubmitEditing={addRolesToArray}
              onChangeText={setRoleTextInput}
              value={roleTextInput}
              ref={(input) => { this.userEmailAddress = input; }}
              autoCorrect={false}
              clearButtonMode="always"
            />
            {(roles.length === 0)
              ? <Text style={styleConst.inputTextFieldLabelWhiteBackground}>No roles added yet</Text>
              : <Text style={styleConst.inputTextFieldLabelWhiteBackground}>Created roles:</Text>
            }
            <ScrollView contentContainerStyle={{ marginBottom: 20 }} >
              {
                roles.map(item => (
                  <Text style={styles.listText}>{item}</Text>
                ))
              }
            </ScrollView>
            <ButtonCustom style="register" onPress={addRolesToArray} buttonText="Add the role" />
            <ButtonCustom style="login" onPress={validateAddMember} buttonText="Add the member" />
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
  listText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default AddMemberToOrganization;
