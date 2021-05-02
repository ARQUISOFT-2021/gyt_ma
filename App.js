import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import LoginScreen from './src/screens/LoginScreen'
import CustomerScreen from './src/screens/CustomerScreen'
import CustomerProfileScreen from './src/screens/CustomerProfileScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Customer: CustomerScreen,
    CustomerProfile: CustomerProfileScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
)

export default createAppContainer(navigator)
