import React, {Component} from 'react'
import {View, Text, AsyncStorage} from 'react-native'
import {connect} from 'react-redux'
import * as actions from '../actions'

class AuthScreen extends Component{

//     static navigationOptions = ({ navigation }) => {
//    return {
//       tabBarVisible: false
//    };
//  }

    componentDidMount(){
        this.props.facebookLogin()
       // AsyncStorage.removeItem('fb_token')
        this.onAuthComplete(this.props)
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        this.onAuthComplete(nextProps)
    }

    onAuthComplete(props){
        if(props.auth){
            props.navigation.navigate('map')
        }
    }



    render(){
        return(
            <View>
            <Text>AUTH SCREEN</Text>
            <Text>AUTH SCREEN</Text>
            <Text>AUTH SCREEN</Text>
            <Text>AUTH SCREEN</Text>
            <Text>AUTH SCREEN</Text>
            <Text>AUTH SCREEN</Text>
            <Text>AUTH SCREEN</Text>
            <Text>AUTH SCREEN</Text>
            </View>
        )
    }
}

function mapStateToProps(state){
  return{
      auth: state.auth.token
  }
}

export default connect(mapStateToProps, actions)(AuthScreen)