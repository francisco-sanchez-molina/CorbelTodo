import React, {
  Component,
  Image,
  Text,
  View,
  StyleSheet
} from 'react-native';

import Button from 'react-native-button'

import {Actions} from 'react-native-router-flux'

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.state.user = {}
  }

  signIn(user) {
    console.log(user)
    this.setState({ 'user': user })
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Text>Login view</Text>
          <Button
          style={{ fontSize: 15, color: 'black' }}
          onPress={Actions.notes}>
          Go to notes
        </Button>
        </View>
        <View>
          <Button
            style={{ fontSize: 12, color: 'black', }}
            onPress={Actions.status}>
            Server version status
          </Button>
        </View>
      </View>
    )
  }

}
