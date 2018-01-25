import React, { Component } from 'react'
import SignIn from './components/SignIn'

class App extends Component {
  componentWillMount() {
    console.log('app mounted')
  }

  render() {
    console.disableYellowBox = true
    return (
      <SignIn />
    )
  }
}

export default App
