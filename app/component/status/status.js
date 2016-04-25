import React, {
  Component,
  Text,
  ListView,
  View,
  StyleSheet
} from 'react-native';

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
});

export default class Status extends Component {

  constructor(props) {
    super(props);
    this.corbelServices = props.data.corbel;
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.corbelServices.getVersions()
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData),
          loaded: true,
        });
      })
      .done();
  }

  render() {
    if (!this.state.loaded) {
      return (<Text>false</Text>);
    } else {
      return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderModule}
        />
    );}
  }

  renderModule(movie) {
    return (
      <View>
        <View>
          <Text>{movie.module}</Text>
          <Text>{movie.version}</Text>
        </View>
      </View>
    );
  }

}



