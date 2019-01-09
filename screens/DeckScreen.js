import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import {MapView} from 'expo'
import {Card, Button } from 'react-native-elements'
import Swipe from '../components/Swipe'

class DeckScreen extends Component{

    renderCard(job){
        return(
            <Card title = {job.jobtitle}>

            <View style = {styles.detailWrapper}>
               <Text>{job.company}</Text>
               <Text>{job.formattedRelativeTime}</Text>
            </View>

            <Text>
              {job.snippet.replace(/<b>/g,'').replace(/<\/b>/g,'')}
            </Text>

            </Card>
        )
    }

    renderNoMoreCards(){
        return(
            <Card title = "No More Cards!">
            </Card>
        )
    }


    render(){
        return(
            <View>
            <Swipe 
            data = {this.props.jobs}
            renderCard = {this.renderCard}
            renderNoMoreCards = {this.renderNoMoreCards}
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

const styles = {
    detailWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBotton: 10,
    }
}

export default connect(mapStateToProps)(DeckScreen)