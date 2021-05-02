import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import LoginScreen from './src/screens/LoginScreen'
import CustomerScreen from './src/screens/CustomerScreen'
import CustomerProfileScreen from './src/screens/CustomerProfileScreen'
import CustomerParcelsScreen from './src/screens/CustomerParcelsScreen'
import CustomerTrackScreen from './src/screens/CustomerTrackScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Customer: CustomerScreen,
    CustomerProfile: CustomerProfileScreen,
    CustomerParcels: CustomerParcelsScreen,
    CustomerTrack: CustomerTrackScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
)

export default createAppContainer(navigator)
