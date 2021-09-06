import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

import RegisterCustomer from '../components/RegisterCustomer'
import RegisterCourier from '../components/RegisterCourier'

const customerFields = ['username', 'first_name', 'last_name', 'email', 'phone', 'password']
const courierFields = ['name', 'username', 'email', 'phone', 'password']

const RegisterScreen = ({ navigation }) => {
  const [userType, setUserType] = useState('customer')
  console.log('RENDERED WITH ....', userType)

  return (
    <View style={styles.viewStyle}>
      <View style={styles.chooseUserStyle}>
        <TouchableOpacity
          style={{
            ...styles.buttonContainerStyle,
            borderWidth: 1,
            borderColor: 'black',
            backgroundColor: userType === 'customer' ? 'crimson' : 'white',
          }}
          onPress={() => setUserType('customer')}
        >
          <Text
            style={{ ...styles.buttonStyle, color: userType === 'customer' ? 'white' : 'black' }}
          >
            CUSTOMER
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.buttonContainerStyle,
            borderWidth: 1,
            borderColor: 'black',
            backgroundColor: userType === 'customer' ? 'white' : 'crimson',
          }}
          onPress={() => setUserType('courier')}
        >
          <Text
            style={{ ...styles.buttonStyle, color: userType === 'customer' ? 'black' : 'white' }}
          >
            COURIER
          </Text>
        </TouchableOpacity>
      </View>
      {userType === 'customer' ? <RegisterCustomer /> : <RegisterCourier />}
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
  chooseUserStyle: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    justifyContent: 'space-around',
  },
  buttonContainerStyle: {
    marginTop: 20,
    width: '40%',
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
  },
  buttonStyle: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
})
export default RegisterScreen
