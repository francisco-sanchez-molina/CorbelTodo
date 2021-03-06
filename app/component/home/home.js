import React, {
  Component,
  Image,
  Text,
  View,
  StyleSheet
} from 'react-native';

import Button from 'react-native-button';

import {Actions} from "react-native-router-flux";

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.props.logo}
       style={styles.logo} />
        <Text style={styles.welcome}>CorbelTodo</Text>
        <Button
          style={{ fontSize: 15, color: 'black' }}
          onPress={Actions.login}>
          Log in
        </Button>
      </View>
    );
  }

}
