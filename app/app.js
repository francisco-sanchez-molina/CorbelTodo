import alt from './alt.js'

import {Actions, Scene, Router, Modal} from 'react-native-router-flux'

import React, {
  Component,
  Text
} from 'react-native'

import Home from './component/home/home.js'
import Login from './component/login/login.js'
import Status from './component/status/status.js'


const assets = {
  'logo': require('../asset/todo.png')
}

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Scene key='home' component={Home} logo={assets.logo} initial={true} hideNavBar={true}/>       
        <Scene key='login' component={Login} title='Login' />
        <Scene key='status' component={Status} title='Status'/>
      </Router>
    );
  }

}
