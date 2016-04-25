import React, {
  Component,
  Text,
  ListView,
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
  }
});


var styles = StyleSheet.create({
  text: {
    color: '#007aff',
    fontFamily: '.HelveticaNeueInterface-MediumP4',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  disabledText: {
    color: '#dcdcdc',
  },
  group: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Test!</Text>
        <Button
          containerStyle={{ padding: 10, height: 45, overflow: 'hidden', borderRadius: 4, backgroundColor: 'grey' }}
          style={{ fontSize: 20, color: 'black' }}
          onPress={Actions.status}>
          Show server status
        </Button>
      </View>
    );
  }

}
