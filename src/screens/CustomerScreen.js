import React from 'react'
import { useState } from 'react'
import { View, StyleSheet, Button, Text, TouchableOpacity, Image } from 'react-native'
import RoundLogo from '../components/RoundLogo'


const CustomerScreen = ({ navigation }) => {
	const username = navigation.state.params.username
	const userType = navigation.state.params.userType
	return (
	<View style={styles.viewStyle}>

		<Text style={styles.titleStyle}>{username}</Text>
		<Text style={styles.userTypeStyle}>{userType}</Text>
		
		<RoundLogo/>

		<TouchableOpacity
			style={styles.buttonContainerStyle}
			onPress={() => navigation.navigate('CustomerProfile', { userType: 'customer' , username: username})}
		>
			<Text style={styles.textStyle}>PROFILE</Text>
		</TouchableOpacity>
		
		<TouchableOpacity
			style={{ ...styles.buttonContainerStyle, ...styles.buttonContainerCourierStyle }}
			onPress={() => navigation.navigate('CustomerParcels', { userType: 'customer' , username: username})}
		>
			<Text style={styles.textStyle}>MY PARCELS</Text>
		</TouchableOpacity>

		<TouchableOpacity
			style={{ ...styles.buttonContainerStyle, ...styles.buttonContainerRegisterStyle }}
      onPress={() => navigation.navigate('CustomerTrack', { userType: 'customer' , username: username})}
		>
			<Text style={styles.textStyle}>TRACK PARCELS</Text>
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
  buttonContainerCourierStyle: {
    backgroundColor: 'rgb(60,179,113)',
  },
  buttonContainerRegisterStyle: {
    backgroundColor: 'rgb(220,20,60)',
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
  titleStyle: {
    fontSize: 30,
    marginVertical: -10,
    color: 'black',
    fontWeight: 'bold',
  },
  userTypeStyle: {
    fontSize: 18,
    marginVertical: 10,
    color: '#888',
    fontStyle: 'italic',
    textTransform: 'uppercase',
  },
})

export default CustomerScreen
