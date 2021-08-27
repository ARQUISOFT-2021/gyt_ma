import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Button,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component'
import RoundLogo from '../components/RoundLogo'

const widthArray = [70, 200, 100, 100, 100, 100, 100, 100, 100]

const DATAHeaders = [
  'ID',
  'Nombre',
  'ID del Remitente',
  'ID del Receptor',
  'Peso',
  'Largo',
  'Ancho',
  'Altura',
  '¿Es Frágil?',
]

// let DATA = [
//   ['1', 'Awesome Rubber Mouse', '61', '71', '9.08', '0.80', '0.94', '0.81', 'true'],
//   ['2', 'Sleek Soft Shirt', '7', '25', '9.30', '0.92', '0.33', '0.93', 'false'],
// ]

const privateIp = '192.168.0.9'

const CustomerParcelsScreen = ({ navigation }) => {
  const { userType, id } = navigation.state.params
  const [userParcels, setUserParcels] = useState([])

  console.log('FROM PARCELS SCREEN', navigation.state.params)

  useEffect(() => {
    const getParcels = async () => {
      const { data } = await axios.get(`http://${privateIp}:2020/parcels/${userType}s/${id}`)

      console.log(data.data)
      // return null
      setUserParcels(data.data.parcels)
      // console.log(data.parcels)
    }

    getParcels()
  }, [])

  const DATA = userParcels.map(parcel => {
    const parcelArray = Object.values(parcel)
    return parcelArray
  })

  console.log(DATA)

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal={true} style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.titleStyle}>MY PARCELS</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ margin: 20, flex: 0.6, height: 3, backgroundColor: '#eee' }} />
          </View>

          <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
            <Row
              data={DATAHeaders}
              widthArr={widthArray}
              style={styles.tableHeader}
              textStyle={styles.tableText}
            />
            <Rows
              data={DATA}
              style={styles.tableBody}
              widthArr={widthArray}
              textStyle={styles.tableText}
            />
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
    alignItems: 'center',
  },
  scrollView: {
    height: '10%',
    backgroundColor: 'white',
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  spacing: {
    marginTop: 20,
  },
  containerT: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
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
    textAlign: 'center',
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

export default CustomerParcelsScreen
