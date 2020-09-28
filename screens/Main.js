import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { SimpleLineIcons } from '@expo/vector-icons';

const TabIcon = (props) => (
  <SimpleLineIcons 
  name="home" 
  size={25} 
  color={props.focused ? 'grey' : 'darkgrey'}
  />
)

export default class Main extends React.Component {

  static navigationOptions = {
    tabBarIcon: TabIcon
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> Main </Text>
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
