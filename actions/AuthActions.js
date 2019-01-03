import {FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAILED} from './types'
import {AsyncStorage} from 'react-native'
import {Facebook} from 'expo'

export const facebookLogin = () =>{

    return async(dispatch) => {


    try{
  let token = await AsyncStorage.getItem('fb_token')
   
  if(token){
     dispatch({
         type: FACEBOOK_LOGIN_SUCCESS,
         payload: token,
     })
  }else{
     doFacebookLogin(dispatch)
  }
    }catch(err){
       console.log(err);
    }


}
    
}

const doFacebookLogin = async(dispatch) =>{
  try{
     let result = await Expo.Facebook.logInWithReadPermissionsAsync('332399664280325',{
         permissions: ['public_profile'],
     })

     
     if(result.type === 'success'){

         await AsyncStorage.setItem('fb_token', result.token)
         dispatch({type: FACEBOOK_LOGIN_SUCCESS, payload: result.token})

     }else{

         return dispatch({type: FACEBOOK_LOGIN_FAILED})

     }
  }catch(err){
      console.log(err)
  }
}