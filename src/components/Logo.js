import React from 'react'
import { Image, StyleSheet } from 'react-native'

const Logo = () => {
  return <Image style={styles.logoStyle} source={require('../../assets/gyt_logo.png')} />
}

const styles = StyleSheet.create({
  logoStyle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 30,
    borderColor: 'rgb(255,165,0)',
    borderWidth: 6,
    padding: 2,
  },
})

export default Logo
