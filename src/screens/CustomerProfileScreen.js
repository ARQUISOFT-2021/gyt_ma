import React from 'react'
import { useState } from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView, StatusBar, Button, Text, TouchableOpacity, Image } from 'react-native'
import RoundLogo from '../components/RoundLogo'


const CustomerProfileScreen = ({ navigation }) => {
	const username = navigation.state.params.username
	const userType = navigation.state.params.userType
	return (
	<SafeAreaView style={styles.container}>
		<ScrollView style={styles.scrollView}>
		<View style={styles.viewStyle}>

			<RoundLogo/>

			<Text style={styles.titleStyle}>{username}</Text>
			<Text style={styles.userTypeStyle}>{userType}</Text>

			<View style={{flexDirection: 'row', alignItems: 'center'}}>
				<View style={{margin:20, flex: 0.6, height: 3, backgroundColor: '#eee'}} />
			</View>
			
			<Text style={styles.fieldTextStyle}>Nombre</Text>
			<Text style={styles.fieldStyle}>First Name</Text>

			<View style={styles.spacing}/>

			<Text style={styles.fieldTextStyle}>Apellido</Text>
			<Text style={styles.fieldStyle}>Last Name</Text>

			<View style={styles.spacing}/>

			<Text style={styles.fieldTextStyle}>correo@web.com</Text>
			<Text style={styles.fieldStyle}>Email</Text>

			<View style={styles.spacing}/>

			<Text style={styles.fieldTextStyle}>3001234567</Text>
			<Text style={styles.fieldStyle}>Phone</Text>

			<View style={styles.spacing}/>

			<Text style={styles.fieldTextStyle}>4.1234, -10.4321</Text>
			<Text style={styles.fieldStyle}>Home Address</Text>

			<View style={styles.spacing}/>

			<Text style={styles.fieldTextStyle}>4.1234, -10.4321</Text>
			<Text style={styles.fieldStyle}>Work Address</Text>

			<View style={styles.spacing}/>

			<TouchableOpacity
				style={styles.buttonContainerStyle}
				onPress={() => console.log("EditButton")}
			>
				<Text style={styles.textStyle}>EDIT</Text>
			</TouchableOpacity>

		</View>
		</ScrollView>
	</SafeAreaView>
  )
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
		// justifyContent: 'center',
		// alignItems:'center',
		backgroundColor: 'white',
  },
  scrollView: {
		height: '10%',
		// width: '100%',
    backgroundColor: 'white',
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems:'center',
		marginTop: 20,
		marginBottom: 30,
  },
	spacing: {
		marginTop: 20,
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
  titleStyle: {
    fontSize: 30,
    marginTop: 10,
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
	fieldTextStyle: {
    fontSize: 20,
    marginVertical: 10,
    color: 'black',
  },
	fieldStyle: {
    fontSize: 15,
    marginVertical: -10,
    color: '#888',
    fontStyle: 'italic',
  },
})

export default CustomerProfileScreen
