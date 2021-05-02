import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Logo from '../components/Logo'
import { NavigationEvents } from 'react-navigation'

const OptionsScreen = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get(
        `https://apigatewayteam2e.herokuapp.com/${navigation.state.params.userType}s`
      )
      setUserInfo(data.data[0])
    }

    getUserInfo()
  }, [])

  return (
    <View style={styles.viewStyle}>
      <Logo />
      <TouchableOpacity
        style={{ ...styles.buttonContainerStyle, backgroundColor: 'rgb(218,165,32)' }}
        onPress={() => navigation.navigate('Info', { userInfo })}
      >
        <Text style={styles.buttonStyle}>MY INFO</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.buttonContainerStyle, backgroundColor: 'rgb(65,105,225)' }}
        onPress={() => console.log('pressed')}
      >
        <Text style={styles.buttonStyle}>MY PARCELS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.buttonContainerStyle, backgroundColor: 'rgb(47,79,79)' }}
        onPress={() => console.log('pressed')}
      >
        <Text style={styles.buttonStyle}>TRACK PARCELS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.buttonContainerStyle, backgroundColor: 'rgb(210,105,30)' }}
        onPress={() => console.log('pressed')}
      >
        <Text style={styles.buttonStyle}>SHIP NEW PARCEL</Text>
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
  buttonContainerStyle: {
    marginTop: 20,
    width: 250,
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

export default OptionsScreen
