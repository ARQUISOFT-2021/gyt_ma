import React from 'react'
import { View, StyleSheet, Button, Text, TouchableOpacity, Image } from 'react-native'
// import { useFonts, Inter_900Black } from '@expo-google-fonts/inter'

const HomeScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Image style={styles.logoStyle} source={require('../../assets/gyt_logo.png')} />
      <TouchableOpacity style={styles.buttonContainerStyle}>
        <Text style={styles.textStyle}>I AM A CUSTOMER</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.buttonContainerStyle, ...styles.buttonContainerCourierStyle }}
      >
        <Text style={styles.textStyle}>I AM A COURIER</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.buttonContainerStyle, ...styles.buttonContainerRegisterStyle }}
      >
        <Text style={styles.textStyle}>REGISTER</Text>
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
  logoStyle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 40,
    borderColor: 'rgb(255,165,0)',
    borderWidth: 6,
    padding: 2,
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
})

export default HomeScreen
