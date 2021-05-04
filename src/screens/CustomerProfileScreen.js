import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
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
} from 'react-native'
import RoundLogo from '../components/RoundLogo'

// const userData = [
// 	'1',
// 	"laisha_bergstrom",
// 	"Laisha",
// 	"Bergstrom",
// 	"laisha_bergstrom@gmail.com",
// 	"3674425022",
// 	"4.9988, -70.4411",
// 	"2.8154, -71.2631",
// 	"laisha_bergstrom@gmail.com"
// ]
// "id": 2,
//         "username": "freda_kassulke",
//         "first_name": "Freda",
//         "last_name": "Kassulke",
//         "email": "freda_kassulke@gmail.com",
//         "phone": "3364955401",
//         "home_address": "4.5028, -72.6169",
//         "work_address": "4.0119, -74.3427",
//         "password": "freda_kassulke@gmail.com"
const privateIp = '192.168.0.9'

const CustomerProfileScreen = ({ navigation }) => {
  const { userType, id } = navigation.state.params
  const [userInfo, setUserInfo] = useState({})
  const { username, first_name, last_name, email, phone, home_address, work_address } = userInfo

  console.log('INFOOOOOOO', userInfo)

  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get(`http://${privateIp}:2020/${userType}s/${id}`)
      // console.log(data)
      setUserInfo(data.customer)
    }
    getUserInfo()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.viewStyle}>
          <RoundLogo />

          <Text style={styles.titleStyle}>{username}</Text>
          {/* <Text style={styles.userTypeStyle}>{userType}</Text> */}

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ margin: 20, flex: 0.6, height: 3, backgroundColor: '#eee' }} />
          </View>

          <Text style={styles.fieldTextStyle}>{first_name}</Text>
          <Text style={styles.fieldStyle}>First Name</Text>

          <View style={styles.spacing} />

          <Text style={styles.fieldTextStyle}>{last_name}</Text>
          <Text style={styles.fieldStyle}>Last Name</Text>

          <View style={styles.spacing} />

          <Text style={styles.fieldTextStyle}>{email}</Text>
          <Text style={styles.fieldStyle}>Email</Text>

          <View style={styles.spacing} />

          <Text style={styles.fieldTextStyle}>{phone}</Text>
          <Text style={styles.fieldStyle}>Phone</Text>

          <View style={styles.spacing} />

          <Text style={styles.fieldTextStyle}>{home_address}</Text>
          <Text style={styles.fieldStyle}>Home Address</Text>

          <View style={styles.spacing} />

          <Text style={styles.fieldTextStyle}>{work_address}</Text>
          <Text style={styles.fieldStyle}>Work Address</Text>

          <View style={styles.spacing} />

          {/* <TouchableOpacity
				style={styles.buttonContainerStyle}
				onPress={() => console.log("EditButton")}
			>
				<Text style={styles.textStyle}>EDIT</Text>
			</TouchableOpacity> */}
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
    alignItems: 'center',
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
