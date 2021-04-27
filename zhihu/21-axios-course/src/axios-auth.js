import axios from 'axios'

const instance = axios.create({
  //baseURL: 'https://test-d1384-default-rtdb.firebaseio.com'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance