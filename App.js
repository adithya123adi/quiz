import React, { Component } from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'
import Practise from './Components/newpractise/Practice'
import Dashboard from './Components/Dashboard/newdash'
import PracticePro from './Components/newpractise/PracticePro'
console.disableYellowBox = true;

class App extends Component {
  render() {
    return (
      <Router headerMode='None'>
        <Stack>
          <Scene key='/' component={Dashboard} />
          <Scene key='Practise' component={PracticePro} />
        </Stack>
      </Router>
    )
  }
}
export default App;


