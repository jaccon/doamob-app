import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

const TabIcon = (props) => (
  <FontAwesome 
  name="heart-o" 
  size={25} 
  color={props.focused ? 'grey' : 'darkgrey'}
  />
)

export default class Donations extends React.Component {

  static navigationOptions = {
    tabBarIcon: TabIcon
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> Donations </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
