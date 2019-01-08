import React, {Component} from 'react'
import {View, Text, AsyncStorage} from 'react-native'
import {connect} from 'react-redux'
import * as actions from '../actions'

class AuthScreen extends Component{

    componentDidMount(){
        this.props.facebookLogin()
       //AsyncStorage.removeItem('fb_token')
        this.onAuthComplete(this.props)
    }

    componentWillReceiveProps(nextProps){
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