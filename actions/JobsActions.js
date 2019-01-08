import axios from 'axios'
import {geo2zip} from 'geo2zip'

import {FETCH_JOBS} from './types'


export const fetchJobs = (region) =>{
    return async(dispatch) => {
        try {
            let zip = await geo2zip(region)
       let result = await axios.get(`http://api.indeed.com/ads/apisearch?publisher=1303284387458115&l=${zip}&q=javascript&radius=20&latlong=1&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json`)
       console.log(result.data)
        } catch (error) {
            
        }
}

}