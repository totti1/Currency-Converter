import React from 'react'
import {Text} from 'react-native'
import PropTypes from 'prop-types'
import moment from 'moment'

import styles from './style'

const LastConverted = ({base, quote, conversionRate, date}) => (
    <Text style={styles.text}>
        1 {base} = {conversionRate} {quote} as of {moment(date).format('MMMM, D, YYYY')}
        </Text>
)

LastConverted.propTypes = {
    date: PropTypes.object,
    base: PropTypes.string,
    quote: PropTypes.string,
    conversionRate: PropTypes.any
}

export default LastConverted