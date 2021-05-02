import React from 'react'
import { useState } from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView, StatusBar, Button, Text, TouchableOpacity, Image } from 'react-native'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import RoundLogo from '../components/RoundLogo'



const CustomerTrackScreen = ({ navigation }) => {
	const username = navigation.state.params.username
	const userType = navigation.state.params.userType
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.scrollView}>
			<View style={styles.viewStyle}>

				<Text style={styles.titleStyle}>TRACK PARCELS</Text>

				<View style={{flexDirection: 'row', alignItems: 'center'}}>
					<View style={{margin:20, flex: 0.6, height: 3, backgroundColor: '#eee'}} />
				</View>
				
				<Text style={styles.fieldTextStyle}>Tabla de Records</Text>
				<Text style={styles.fieldStyle}>TABLA</Text>

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
	containerT: {
		flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'
	},
  head: {
		height: 40, backgroundColor: '#f1f8ff'
	},
  text: {
		margin: 6
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

export default CustomerTrackScreen
