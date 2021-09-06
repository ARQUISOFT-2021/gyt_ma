import React, { useEffect, useReducer } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

const reducer = (state, action) => {
  switch (action.type) {
    case 'username':
      return { ...state, username: action.payload }
    case 'name':
      return { ...state, name: action.payload }
    case 'email':
      return { ...state, email: action.payload }
    case 'phone':
      return { ...state, phone: action.payload }
    case 'password':
      return { ...state, password: action.payload }
    default:
      return state
  }
}

const RegisterCourier = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, {
    username: '',
    name: '',
    email: '',
    phone: '',
    password: '',
  })
  const { username, name, email, phone, password } = state

  useEffect(() => {
    // console.log(state)
  }, [state])

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={name => dispatch({ type: 'name', payload: name })}
      />
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={username => dispatch({ type: 'username', payload: username })}
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={email => dispatch({ type: 'email', payload: email })}
      />
      <Text style={styles.label}>Phone</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={phone => dispatch({ type: 'phone', payload: phone })}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        // secureTextEntry={true}
        style={styles.input}
        value={password}
        onChangeText={password => dispatch({ type: 'password', payload: password })}
      />
      <TouchableOpacity
        style={styles.buttonContainerStyle}
        onPress={() => navigation.navigate('Options', { userType: 'courier' })}
      >
        <Text style={styles.loginButton}>REGISTER</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    height: '90%',
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

export default RegisterCourier
