/**
 * Created by tarasg on 4/2/2018.
 */
const axios = require('axios')
const BACKEND = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/'
})

BACKEND['media'] = 'http://127.0.0.1:8000'

export default BACKEND
