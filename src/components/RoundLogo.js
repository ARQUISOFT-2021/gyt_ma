import React from 'react'
import { Image, StyleSheet } from 'react-native'

const RoundLogo = () => {
  return <Image style={styles.logoStyle} source={require('../../assets/round-logo.png')} />
}

const styles = StyleSheet.create({
  logoStyle: {
    width: 200,
    height: 200,
  },
})

export default RoundLogo
