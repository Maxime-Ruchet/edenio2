import {Allevenement} from './backend.mjs'

try {
    const records = await Allevenement() ;
    console.log(JSON.stringify(records, null, 2)) ;
    } catch (e) {
    console.error(e) ;
    }