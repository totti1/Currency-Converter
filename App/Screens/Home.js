import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { Container } from '../Components/Container';
import { Logo } from '../Components/Logo';
import { InputWithButton } from '../Components/TextInput';
import { ClearButton } from '../Components/Button';
import { LastConverted } from '../Components/Text';
import { Header } from '../Components/Header';

import { changeCurrencyAmount, swapCurrency } from '../actions/currencies';
;
const TEMP_LAST_CONVERTED = new Date();
const TEMP_CONVERSION_RATE = 0.79739;


class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.number,
    conversionRate: PropTypes.number,
    isFetching: PropTypes.bool,
    lastConvertedDate: PropTypes.object,
  };

  handleChangeText = (text) => {
    this.props.dispatch(changeCurrencyAmount(text));
  };

  handlePressBaseCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency', type: 'base' });
  };

  handlePressQuoteCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency', type: 'quote' });
  };

  handleSwapCurrency = () => {
    // this.actions.swapCurrency()
    this.props.dispatch(swapCurrency());
    // console.log('handle swap currency');
  };

  handleOptionsPress = () => {
    this.props.navigation.navigate('Options');
  };

  render() {

    let quotePrice = '...';
    if (!this.props.isFetching) {
      quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
    }

    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
                          buttonText={this.props.baseCurrency}
                          onPress={this.handlePressBaseCurrency}
                          defaultValue={this.props.amount.toString()}
                          keyboardType="numeric"
                          onChangeText={this.handleChangeText}
          />
          <InputWithButton
                          editable={false}
                          buttonText={this.props.quoteCurrency}
                          onPress={this.handlePressQuoteCurrency}
                          value={quotePrice}
          />
          <LastConverted
                        date={this.props.lastConvertedDate}
                        base={this.props.baseCurrency}
                        quote={this.props.quoteCurrency}
                        conversionRate={this.props.conversionRate}
          />
          <ClearButton onPress={this.handleSwapCurrency} text="Reverse Currencies" />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const baseCurrency = state.currencies.baseCurrency;
  const quoteCurrency = state.currencies.quoteCurrency;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};

  return {
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    isFetching: conversionSelector.isFetching,
    lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
  }
}

export default connect(mapStateToProps)(Home);