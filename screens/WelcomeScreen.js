import React, {Component} from 'react'
import {View, Text, AsyncStorage} from 'react-native'
import Slides from '../components/Slides'
import {AppLoading} from 'expo'
import _ from 'lodash'

const SLIDE_DATA = [
    {text: 'Welcome to JobFinder', color: '#03A9F4'},
    {text: 'Set your location, then swipe away', color: '#009688'}
]

class WelcomeScreen extends Component{

    state = {token: null}

    async componentWillMount(){
        let token = await AsyncStorage.getItem('fb_token')

        if(token){
            this.props.navigation.navigate('map')
            this.setState({token})
        }
        else{
            this.setState({token: false})
        }
    }

    onSlidesComplete=()=>{
       this.props.navigation.navigate('auth')
    }

    render(){
       if( _.isNull(this.state.token)){
            return(
                <AppLoading />
            )
        }

        return(
            <Slides
             data = {SLIDE_DATA}
             onComplete = {this.onSlidesComplete}
             />
        )
    }
}

export default WelcomeScreen