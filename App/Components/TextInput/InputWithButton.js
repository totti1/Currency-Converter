import React from 'react'
import {View, Text, TouchableOpacity, TextInput} from 'react-native'
import PropTypes from 'prop-types'
import color from 'color'

import styles from './styles'

const InputWithButton = (props) => {
    const {onPress, buttonText, editable = true} = props
    const underlayColor = '$lightGray'
    const ContainerStyles = [styles.container]
    if (editable === false){
        ContainerStyles.push(styles.ContainerStylesDisabled)
    }
    const buttonTextStyles = [styles.buttonText];
    if (props.textColor) {
        buttonTextStyles.push({ color: props.textColor });
    }
    return (
        <View style={ContainerStyles}>
            <TouchableOpacity underlayColor={underlayColor} style={styles.buttonContainer}
                                onPress={onPress}>
                <Text style={buttonTextStyles}>
                    {buttonText}
                </Text>
            </TouchableOpacity>
            <View style={styles.border}/>
            <TextInput style={styles.input} underlineColorAndroid="transparent" {...props}/>
        </View>
    )
}

InputWithButton.propTypes = {
    onPress: PropTypes.func,
    ButtonText: PropTypes.string,
    editable: PropTypes.bool
}

export default InputWithButton