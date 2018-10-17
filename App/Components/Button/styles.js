import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
    container:{
        alignItems: 'center',
    },
    wrapper:{
        flexDirection:'row',
        alignItems: 'center'
    },
    image:{
        width: 19,
        margin: 11,
    },
    text:{
        color: '$white',
        fontSize: 15,
        fontWeight: '300',
        paddingVertical: 20
    }
})