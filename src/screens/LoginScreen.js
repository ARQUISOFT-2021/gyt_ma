import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Touchable, Alert } from 'react-native'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Logo from '../components/Logo'

const reducer = (state, action) => {
  switch (action.type) {
    case 'username':
      return { ...state, username: action.payload }
    case 'password':
      return { ...state, password: action.payload }
    default:
      return state
  }
}

const privateIp = '192.168.0.9'

const LoginScreen = ({ navigation }) => {
  console.log(navigation.state.params.userType)
  const { userType } = navigation.state.params

  const [state, dispatch] = useReducer(reducer, { username: '', password: '' })
  const { username, password } = state

  // useEffect(() => {
  //   // console.log(state)
  //   console.log(state)
  // }, [state])
  // console.log(local)

  const handleOnPress = async () => {
    try {
      const response = await axios.post(`http://${privateIp}:2020/${userType}s/login`, state)
      console.log('LOGIN SUCCESSFUL')
      console.log(response.data.data.customer._id)
      console.log('USER TYPE', userType)
      // return undefined
      navigation.navigate('Customer', { userType, id: response.data.data.customer._id })
    } catch (error) {
      // console.log('POR ACA')
      Alert.alert('Invalid Credentials')
    }
  }

  return (
    <View style={styles.viewStyle}>
      <Logo />
      <Text style={styles.label}>username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={username => dispatch({ type: 'username', payload: username })}
      />
      <Text style={styles.label}>password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={password => dispatch({ type: 'password', payload: password })}
      />
      <TouchableOpacity style={styles.buttonContainerStyle} onPress={() => handleOnPress()}>
      <TouchableOpacity
        style={styles.buttonContainerStyle}
        onPress={() => navigation.navigate('Options', { userType: 'customer' })}
      >
        <Text style={styles.loginButton}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    marginVertical: 10,
  },
  input: {
    borderColor: 'black',
    borderWidth: 2,
    width: 250,
    height: 40,
    fontSize: 20,
    textAlign: 'center',
  },
  buttonContainerStyle: {
    marginTop: 20,
    width: 250,
    height: 40,
    backgroundColor: 'rgb(255,165,0)',
    borderRadius: 4,
    justifyContent: 'center',
  },
  loginButton: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
})

export default LoginScreen
