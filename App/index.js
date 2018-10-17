import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Provider } from 'react-redux';

import Navigator from './Config/route'
import {AlertProvider} from './Components/Alert'
import store from './Config/store'

EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $primaryOrange: '#D57A66',
    $primaryGreen: '#00BD9D',
    $primaryPurple: '#9E768F',

    $white: '#FFFFFF',
    $border: '#E2E2E2',
    $inputText: '#797979',
    $lightGray: '#E5E8E8',
    $darkText: '#343434'
});

export default () => (
    <Provider store={store}>
        <AlertProvider>
            <Navigator />
        </AlertProvider>
    </Provider>
)