import React, { useEffect } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const LoginScreen = () => {
  // Here is where we perfrom htttp requests

  useEffect(() => {
    const pullData = async () => {
      const { data } = axios.get('url_from_we_pull_data')
    }

    pullData()
  }, [])

  return (
    <View>
      <Text>Login Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default LoginScreen
