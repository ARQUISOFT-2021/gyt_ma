import React from 'react'
import { useState } from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView, StatusBar, Button, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import RoundLogo from '../components/RoundLogo'


const widthArray = [70, 100, 100, 150, 150, 150, 100, 100, 200, 200]

const DATAHeaders = [
	'ID',
	'ID del Remitente',
	'ID del Envío',
	'Dirección de Origen',
	'Dirección de Destino',
	'Dirección Actual',
	'¿Fue Enviado?',
	'Precio de Envío',
  'Fecha de Creación',
  'Fecha de Actualización'
]

const DATA = [
  [
		"1",
    "3",
    "12",
    "6.1746, -73.5926",
    "3.0655, -73.8611",
    "6.1746, -73.5926",
    "false",
    "4",
    "2021-04-25T23:11:55.975Z",
    "2021-04-25T23:11:55.975Z"
	],
  [
		"2",
    "2",
    "31",
    "5.4772, -72.0505",
    "4.8260, -73.3189",
    "5.4772, -72.0505",
    "false",
    "7",
    "2021-04-25T23:11:55.975Z",
    "2021-04-25T23:11:55.975Z"
	],
];


const CustomerTrackScreen = ({ navigation }) => {
	const username = navigation.state.params.username
	const userType = navigation.state.params.userType
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView horizontal={true} style={styles.scrollView}>
			<View style={styles.container}>

				<Text style={styles.titleStyle}>TRACK PARCELS</Text>

				<View style={{flexDirection: 'row', alignItems: 'center'}}>
					<View style={{margin:20, flex: 0.6, height: 3, backgroundColor: '#eee'}} />
				</View>

				<Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
					<Row data={DATAHeaders} widthArr={widthArray} style={styles.tableHeader} textStyle={styles.tableText}/>
					<Rows data={DATA} style={styles.tableBody} widthArr={widthArray} textStyle={styles.tableText}/>
				</Table>

			</View>
			</ScrollView>
		</SafeAreaView>
  )
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
		padding: 16,
		paddingTop: 30,
		backgroundColor: '#fff',
		// justifyContent: 'center',
		alignItems:'center',
  },
  scrollView: {
		height: '10%',
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
  tableHeader: {
		height: 80,
		backgroundColor: '#f1f8ff',
	},
	tableBody: {
		height: 40,
		backgroundColor: '#fff',
	},
  tableText: {
		margin: 10,
		textAlign: 'center'
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
