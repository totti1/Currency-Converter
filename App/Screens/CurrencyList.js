import React, {Component} from 'react'
import {Text, FlatList, View, StatusBar} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import { ListItem, Separator } from '../Components/List'
import Currencies from '../Data/Currencies'
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
  };

  handlePress = (currency) => {

    const { type } = this.props.navigation.state.params;

    if (type === 'base') {
      this.props.dispatch(changeBaseCurrency(currency));
    } 
    else if (type === 'quote') {
      this.props.dispatch(changeQuoteCurrency(currency));
    }

    this.props.navigation.goBack(null);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          data={Currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === TEMP_CURRENT_CURRENCY}
              onPress={() => this.handlePress(item)}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

export default connect()(CurrencyList);