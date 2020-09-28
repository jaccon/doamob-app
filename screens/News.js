import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { WebView} from 'react-native-webview';
import { FontAwesome } from '@expo/vector-icons';

const TabIcon = (props) => (
  <FontAwesome 
  name="newspaper-o" 
  size={25} 
  color={props.focused ? 'grey' : 'darkgrey'}
  />
)

export default class News extends React.Component {

  static navigationOptions = {
    tabBarIcon: TabIcon
  };

  render() {
    return (
      <WebView
          source={{uri: 'https://jaccon.com.br'}}
          style={{marginTop: 20}}
        />
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
