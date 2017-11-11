import React from 'react';
import { ListView, View } from 'react-native';
import * as firebase from 'firebase';

import firebaseConfig from 'GroceryApp/config/firebase';
import styles from 'GroceryApp/styles';

import ActionButton from 'GroceryApp/components/ActionButton';
import StatusBar from 'GroceryApp/components/StatusBar';
import ListItem from 'GroceryApp/components/ListItem';

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([{ title: 'Pizza' }]),
    };
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem(item) {
    return (
      <ListItem item={item} onPress={() => {}} />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar title="Grocery List" />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderItem}
          style={styles.listview}
        />
        <ActionButton title="Add" onpress={() => {}} />
      </View>
    );
  }
}
