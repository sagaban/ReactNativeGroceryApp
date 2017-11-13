import React from 'react';
import { ListView, View, Alert } from 'react-native';
import * as firebase from 'firebase';

import firebaseConfig from 'GroceryApp/config/firebase';
import styles from 'GroceryApp/styles';

import ActionButton from 'GroceryApp/components/ActionButton';
import StatusBar from 'GroceryApp/components/StatusBar';
import ListItem from 'GroceryApp/components/ListItem';

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  constructor() {
    super();
    this.itemsRef = firebaseApp.database().ref();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds,
    };
    this.listenForItems(this.itemsRef);

    this.renderItem = this.renderItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {
      // get children as an array
      const items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key,
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items),
      });
    });
  }

  addItem() {
    Alert.alert(
      'Add New Item',
      null,
      [
        {
          text: 'Add',
          onPress: (text = 'Vacío') => {
            this.itemsRef.push({ title: text });
          },
        },
      ],
      'plain-text',
    );
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
        <ActionButton title="Add" onPress={this.addItem} />
      </View>
    );
  }
}
