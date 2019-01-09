import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import Swipe from '../components/Swipe'

class DeckScreen extends Component{
    render(){
        return(
            <View>
            <Swipe 
            data = {this.state.jobs}
            />
            
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        jobs: state.jobs.results
    }
}

export default connect(mapStateToProps)(DeckScreen)