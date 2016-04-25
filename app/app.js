import alt from "./alt.js"

import {Actions, Scene, Router, Modal} from 'react-native-router-flux';

import React, {
  Component,
  Text
} from 'react-native';

import Home from './component/home/home.js';
import Status from './component/status/status.js';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Scene key="modal" component={Modal} >
            <Scene key="home" component={Home} title="Login" type="replace"/>
            <Scene key="status" component={Status} title="Status" type="replace" />
        </Scene>
      </Router>
    );
  }

}
