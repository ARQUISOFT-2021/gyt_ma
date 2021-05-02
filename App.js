import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import LoginScreen from './src/screens/LoginScreen'
import OptionsScreen from './src/screens/OptionsScreen'
import InfoScreen from './src/screens/InfoScreen'
import RegisterScreen from './src/screens/RegisterScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Options: OptionsScreen,
    Info: InfoScreen,
    Register: RegisterScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
)

export default createAppContainer(navigator)
