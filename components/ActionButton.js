import React, { Component } from 'react';
import ReactNative from 'react-native';
import styles, { constants } from 'GroceryApp/styles';

const {
  Text, View, TouchableHighlight,
} = ReactNative;

class ActionButton extends Component {
  render() {
    return (
      <View style={styles.action}>
        <TouchableHighlight
          underlayColor={constants.actionColor}
          onPress={this.props.onPress}
        >
          <Text style={styles.actionText}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ActionButton;
