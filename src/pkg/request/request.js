import axios from 'axios'

const baseUrl = 'http://127.0.0.1:18001'

const service = axios.create({
  baseURL: baseUrl, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000, // request timeout
  headers: {
    'Content-Type': 'application/json'
  }
})

export default service
