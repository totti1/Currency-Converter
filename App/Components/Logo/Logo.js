import React, {Component} from 'react'
import {View, ImageBackground, Text, Image, Keyboard, Animated, Platform, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

const ANIMATION_DURATION = 250;

class Logo extends Component {

  static propTypes = {
    tintColor: PropTypes.string,
  }

    constructor(props) {
        super(props);
    
        this.state = {
          containerImageWidth: new Animated.Value(styles.$largeContainerSize),
          imageWidth: new Animated.Value(styles.$largeImageSize),
        };
      }
    

      componentDidMount() {
        const name = Platform.OS === 'ios' ? 'Will' : 'Did';
        this.keyboardDidShowListener = Keyboard.addListener(
          `keyboard${name}Show`,
          this.keyboardWillShow,
        );
        this.keyboardDidHideListener = Keyboard.addListener(
          `keyboard${name}Hide`,
          this.keyboardWillHide,
        );
      }
    
      componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
      }
    
      keyboardWillShow = () => {
          console.log('keyboard showing')
        Animated.parallel([
          Animated.timing(this.state.containerImageWidth, {
            toValue: styles.$smallContainerSize,
            duration: ANIMATION_DURATION,
          }),
        //   Animated.timing(this.state.imageWidth, {
        //     toValue: styles.$smallImageSize,
        //     duration: ANIMATION_DURATION,
        //   })
        ]).start();
      };
    
      keyboardWillHide = () => {
          console.log('keyboard hidden')
        Animated.parallel([
          Animated.timing(this.state.containerImageWidth, {
            toValue: styles.$largeContainerSize,
            duration: ANIMATION_DURATION,
          }),
          Animated.timing(this.state.imageWidth, {
            toValue: styles.$largeImageSize,
            duration: ANIMATION_DURATION,
          }),
        ]).start();
      };
    render(){
        const containerImageStyles = [
            styles.containerImage,
            { width: this.state.containerImageWidth, height: this.state.containerImageWidth },
          ];

          const imageStyles = [
            styles.logo,
            { width: this.state.imageWidth },
            this.props.tintColor ? { tintColor: this.props.tintColor } : null,
          ];
      
        return (
            <View style={styles.container}>
                <Animated.View style={containerImageStyles}>
                <Animated.Image
                resizeMode="contain"
                // style={styles.containerImage}
                style={[StyleSheet.absoluteFill, containerImageStyles]}
                source={require('./images/background.png')}
                />
            <Animated.Image
                resizeMode="contain"
                // style={styles.logo}
                style={imageStyles}
                source={require('./images/logo.png')}
            />
            </Animated.View>
                {/* <ImageBackground resizeMode="contain"
                                 style={styles.containerImage}
                                 source={require('./images/background.png')}>
                    <Image resizeMode="contain"
                           source={require('./images/logo.png')}
                            style={styles.logo}/>
                </ImageBackground> */}
                <Text style={styles.text}>My Currency Converter App</Text>
            </View>
        )
    }
}

export default Logo;