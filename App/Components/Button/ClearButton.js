import React from 'react'
import {TouchableOpacity, View, Image, Text} from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

const ClearButton = ({text, onPress}) => (
    <TouchableOpacity style={styles.container}
                      onPress={onPress}>
        <View style={styles.wrapper}>
            <Image resizeMode="contain"
                   style={styles.image}
                   source={require('./Images/icon.png')}/>
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
)

ClearButton.propTypes={
    text: PropTypes.string,
    onPress: PropTypes.func
}

export default ClearButton