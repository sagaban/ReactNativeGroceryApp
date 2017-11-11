import React from 'react';
import { Text, View } from 'react-native';
import * as firebase from 'firebase';
import firebaseConfig from './config/firebase';
import styles from './styles';

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}
