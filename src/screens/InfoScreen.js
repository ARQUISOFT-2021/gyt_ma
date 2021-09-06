import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const InfoScreen = ({ navigation }) => {
  const {
    username,
    first_name,
    last_name,
    email,
    phone,
    home_address,
    work_address,
  } = navigation.state.params.userInfo

  console.log(first_name, '****')

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.info}>MY INFO</Text>
      <Text style={styles.fieldStyle}>
        Username:{'\n'}
        {username}
      </Text>
      <Text style={styles.fieldStyle}>
        First Name:{'\n'}
        {first_name}
      </Text>
      <Text style={styles.fieldStyle}>
        Last Name:{'\n'}
        {last_name}
      </Text>
      <Text style={styles.fieldStyle}>
        Email:{'\n'}
        {email}
      </Text>
      <Text style={styles.fieldStyle}>
        Phone:{'\n'}
        {phone}
      </Text>
      <Text style={styles.fieldStyle}>
        Home Address:{'\n'}
        {home_address}
      </Text>
      <Text style={styles.fieldStyle}>
        Work Address:{'\n'}
        {work_address}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  info: {
    fontSize: 44,
    width: '100%',
    backgroundColor: 'rgb(220,20,60)',
    textAlign: 'center',
    paddingVertical: 4,
    color: 'white',
  },
  fieldStyle: {
    fontSize: 18,
    width: '80%',
    paddingBottom: 8,
    borderBottomColor: 'rgb(220,20,60)',
    borderBottomWidth: 2,
    fontWeight: 'bold',
  },
})

export default InfoScreen
