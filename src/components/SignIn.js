import React, { Component } from 'react'
import { View, Text, AsyncStorage, TextInput } from 'react-native'

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = { myKey: null }
  }

  getInitialState() {
    return {}
  }

  componentDidMount() {
    AsyncStorage.getItem("myKey")
      .then(value => this.setState({ myKey: value }))
      .done()
  }

  saveData(value) {
    AsyncStorage.setItem("myKey", value)
    this.setState(previousState => {
      return { myKey: value }
    })
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.saved }>
          Stored On Device: { this.state.myKey }
        </Text>
        <TextInput
          style={ styles.formInput }
          onChangeText={ text => this.saveData(text) }
          value={ this.state.myKey }
        />
        <Text style={ styles.instructions }>
          Type something into the text box. It will be saved to device storage!
        </Text>
      </View>
    )
  }
}

const styles = {
  container: {
    padding: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#F5FCFF"
  },
  formInput: {
    height: 35,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#555555"
  },
  saved: {
    fontSize: 22,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
    marginTop: 5
  }
}

export default SignIn
