import axios from 'axios'
import reverseGeocode from 'latlng-to-zip'
import qs fro 'qs'

import {FETCH_JOBS} from './types'

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?'

const JOB_QUERY_PARAMS = {
    publisher:'1303284387458115',
    format: 'json',
    v: '2',
    latlong: '1',
    radius: '10',
    q:'javascript',
    userip: '1.2.3.4',
    useragent: 'Mozilla/%2F4.0%28Firefox%29',
}

const buildJobsUrl = (zip)=> {
 const query = qs.stringify({...JOB_QUERY_PARAMS,l: zip})
 return `${JOB_ROOT_URL}${query}`
}


export const fetchJobs = (region) =>{
    return async(dispatch) => {
        try{
       let zip = await reverseGeocode(region)
       const url = buildJobsUrl(zip)
       let result = await axios.get(url)
       dispatch({
           type: FETCH_JOBS,
           payload: result.data,
       })
       console.log(result.data)
        }catch(err){
             console.log(err); 
        }
    }
}