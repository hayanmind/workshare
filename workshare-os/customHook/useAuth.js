import React, { useState, useEffect, useContext, createContext } from "react";
import useDidUpdateEffect from './useDidUpdateEffect';
import * as firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';

const firebaseAppsNotInitialized = (firebase.apps.length === 0);

if (firebaseAppsNotInitialized) {
  firebase.initializeApp({
    apiKey: "AIzaSyDNCAU82di4OY15Anajzxvg2350jsNovXQ",
    authDomain: "workshare-os.firebaseapp.com",
    databaseURL: "https://workshare-os.firebaseio.com",
    projectId: "workshare-os",
    storageBucket: "workshare-os.appspot.com",
    messagingSenderId: "298418240724",
    appId: "1:298418240724:web:6e8e1de7d56ff6dfd04f41"
  });
}

const db = firebase.firestore();

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {

  const [user, setUser] = useState(null);

  const [usersStatus, setUsersStatus] = useState({
    documentId: '',
    eventId: '',
    from: 0,
    to: 0,
    statusType: '',
  });

  useDidUpdateEffect(() => {
    db.collection('users').doc(usersStatus.documentId).update({
      'status.eventId': usersStatus.eventId,
      'status.from' : usersStatus.from,
      'status.to' : usersStatus.to,
      'status.type': usersStatus.statusType,
    })
  }, [usersStatus]);

  const signIn = (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        setUser(response.user);
        return response.user;
      });
  };

  const signUp = (email, password) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        setUser(response.user);
        return response.user;
      });
  };

  const signOut = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false);
      });
  };

  const sendPasswordResetEmail = email => {
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        return true;
      });
  };

  const confirmPasswordReset = (code, password) => {
    return firebase
      .auth()
      .confirmPasswordReset(code, password)
      .then(() => {
        return true;
      });
  };

  const updateUsersStatus = (type) =>{
    db.collection('users')
    .where('userId', '==', user.uid)
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        setUsersStatus({
          documentId: doc.id,
          eventId: '',
          from: 0,
          to: 0,
          statusType: type,
        });
      });
    })
    .catch(error => {
      console.log('Error getting documents', error);
    });
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return {
    user,
    db,
    signIn,
    signUp,
    signOut,
    sendPasswordResetEmail,
    confirmPasswordReset,
    updateUsersStatus,
  };
}
