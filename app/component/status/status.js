import React, {
  Component,
  Text,
  ListView,
  View,
  StyleSheet
} from 'react-native';

import CorbelService from '../../service/CorbelService.js'

import {Actions} from 'react-native-router-flux'

import CorbelActions from '../../action/CorbelActions.js'

import CorbelStore from '../../store/CorbelStore.js'

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
});

export default class Status extends Component {

  constructor(props) {
    super(props);
    this.corbelServices = new CorbelService();
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
    this._onChange = this._onChange.bind(this);
  }

  _onChange() {
    var versions = CorbelStore.getState()
    if (versions.versions.loading === false) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(versions.versions.data),
        loaded: true,
      });
    }
  }

  componentDidMount() {
    CorbelStore.listen(this._onChange)
    CorbelActions.requestServerVersion()
  }

  componentWillUnmount() {
    CorbelStore.unlisten(this._onChange)
  }

  fetchData() {
    CorbelActions.requestServerVersion()
    this.corbelServices.getVersions()
      .then((responseData) => {

      })
      .done();
  }

  render() {
    if (!this.state.loaded) {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderModule}
            />
        </View>
      );
    }
  }

  renderModule(module) {
    return (
        <View>
          <Text>{module.module}</Text>
          <Text>{module.version}</Text>
        </View>
    );
  }

}
