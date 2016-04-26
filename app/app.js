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
        <Scene>
          <Scene key="home" type="replace" initial={true} hideTabBar={true}>
            <Scene key="homeModal" component={Home} logo={assets.logo}/>
          </Scene>
          <Scene key="login" component={Modal} title="Login" >
            <Scene key="loginModal" component={Login}/>
          </Scene>
          <Scene key="status" component={Modal} title="Status" >          
            <Scene key="statusModal" component={Status}/>
          </Scene>
        </Scene>
      </Router>
    );
  }

}
