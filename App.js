import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import LoginScreen from './src/screens/LoginScreen'
import OptionsScreen from './src/screens/OptionsScreen'
import InfoScreen from './src/screens/InfoScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Options: OptionsScreen,
    Info: InfoScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
)

export default createAppContainer(navigator)
