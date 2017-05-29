import axios from 'axios'

const GIFS_ENDPOINT = 'http://jsonplaceholder.typicode.com/posts'

const getGifs = (query = 'cats') =>
  axios.get(GIFS_ENDPOINT).then(response => response.data)

export { getGifs }
