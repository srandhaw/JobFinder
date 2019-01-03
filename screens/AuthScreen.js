import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import * as actions from '../actions'

class AuthScreen extends Component{

    componentDidMount(){
        this.props.facebookLogin()
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

export default connect(null, actions)(AuthScreen)