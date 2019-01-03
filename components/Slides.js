import React, {Component} from 'react'
import {View, Text, ScrollView, Dimensions} from 'react-native'
import {Button} from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width

class Slides extends Component{

    renderLastSlide(index){
      if(index === this.props.data.length - 1){
          return(
              <Button 
              title = 'Onwards!'
              raised = {true}
              buttonStyle = {styles.buttonStyle}
              onPress = {this.props.onComplete}
              />
          )
      }
    }

    renderSlides(){
        return this.props.data.map((slide, index)=>{
         return(
           <View key = {slide.text} style = {[styles.slideStyle,{backgroundColor: slide.color}]} >
             <Text style = {styles.slideText}>{slide.text}</Text>
             {this.renderLastSlide(index)}
          </View>

         )   
      })

    }


    render(){
        return(
             <ScrollView 
             horizontal = {true}
             style = {{flex: 1}}
             pagingEnabled = {true}
             >
             {this.renderSlides()}
             </ScrollView>
        )
    }
}

const styles = {
    slideText : {
        fontSize : 30,
        marginLeft: 10,
        marginRight: 10,
        color: 'white',
        textAlign: 'center'
    },

    slideStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: SCREEN_WIDTH,
    },

    buttonStyle: {
        backgroundColor: '#0288D1',
        marginTop: 20,
    }
}

export default Slides