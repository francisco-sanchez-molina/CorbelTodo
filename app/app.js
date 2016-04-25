import React, {
  Component,
  Text
} from 'react-native';

import Router from 'react-native-simple-router';

import Home from './component/home/home.js';

import CorbelService from './service/CorbelService.js';

const firstRoute = {
  name: 'Welcome!',
  component: Home,
  data: {corbel: new CorbelService()}
};

export default class App extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (  <Router firstRoute={firstRoute} />);
  }

}

