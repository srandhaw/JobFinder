import React, {Component} from 'react'
import {View, Text, ActivityIndicator} from 'react-native'
import {Button} from 'react-native-elements'
import { MapView, Permissions } from 'expo';
import {connect} from 'react-redux'
import * as actions from '../actions'

class MapScreen extends Component{

    state = {
        mapLoaded: false,
        region: {
          latitude: 37,
          longitude: -122,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }
    }

    onRegionChange = (region) =>{
       this.setState({region})
    }

    componentDidMount(){
        this.setState({mapLoaded: true })
    }

    buttonPress = () =>{
        this.props.fetchJobs(this.state.region)
    }

    render(){
        if(!this.state.mapLoaded){
            return(
                <View style = {{flex: 1, justifyContent: 'center'}}>
                  <ActivityIndicator size = 'large'/>
                </View>
            )
        }else{
            return(
            <View style = {{flex: 1}}>
            <MapView
            style = {{flex:1 }}
            initialRegion = {{...this.state.region}}
            onRegionChange = {this.onRegionChange}
            />
            <View style = {styles.buttonContainer}>
                <Button 
                large
                title = "Search This Area"
                backgroundColor = "#009688"
                icon = {{name: 'search'}}
                onPress = {this.buttonPress}
                />
            </View>
            </View>
        )
        }
        
    }
}

const styles = {
    buttonContainer: {
        position: 'absolute',
        bottom: 10,
        left: -5,
        right: -5,
    }
}

export default connect(null,actions)(MapScreen)