import React from 'react'
import { View, StyleSheet, Button, Text, TouchableOpacity, Image } from 'react-native'
// import { useFonts, Inter_900Black } from '@expo-google-fonts/inter'
import Logo from '../components/Logo'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.viewStyle}>
      <Logo />
      <TouchableOpacity
        style={styles.buttonContainerStyle}
        onPress={() => navigation.navigate('Login', { userType: 'customer' })}
      >
        <Text style={styles.textStyle}>I AM A CUSTOMER</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.buttonContainerStyle, ...styles.buttonContainerCourierStyle }}
        onPress={() => navigation.navigate('Login', { userType: 'courier' })}
      >
        <Text style={styles.textStyle}>I AM A COURIER</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.buttonContainerStyle, ...styles.buttonContainerNotificationStyle }}
        onPress={() => navigation.navigate('Notifications')}
      >
        <Text style={styles.textStyle}>Notifications</Text>
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
    width: 200,
    backgroundColor: 'rgb(255,165,0)',
    borderRadius: 4,
  },
  textStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    paddingVertical: 8,
    paddingHorizontal: 20,
    textAlignVertical: 'center',
  },
  buttonContainerCourierStyle: {
    backgroundColor: 'rgb(60,179,113)',
  },
  buttonContainerRegisterStyle: {
    backgroundColor: 'rgb(220,20,60)',
  },
  buttonContainerNotificationStyle: {
    backgroundColor: 'rgb(20,20,60)',
  },
  
})

export default HomeScreen
