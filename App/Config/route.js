import {StackNavigator} from 'react-navigation'

import Home from '../Screens/Home'
import CurrencyList from '../Screens/CurrencyList'
import Options from '../Screens/Options'
import Themes from '../Screens/Themes'

const HomeStack = StackNavigator({
    Home: {
        screen:Home,
        navigationOptions:{
            header: false
        }
    },
    Options:{
        screen: Options,
        navigationOptions:{
            headerTitle: 'Options'
        }
    },
    Themes: {
        screen: Themes,
        navigationOptions:{
            headerTitle: 'Themes'
        }
    }

})

export default StackNavigator({
    Home: {
        screen:HomeStack,
        navigationOptions:{
            header: false
        }
    },
    CurrencyList: {
        screen:CurrencyList,
        navigationOptions: ({navigation})=> ({
            headerTitle: navigation.state.params.title
        })
    }
});