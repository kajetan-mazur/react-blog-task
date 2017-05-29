import React from 'react'
import Gif from './Gif'

const GifList = props => {
  const results = props.data
  let gifs
  if (results.length > 0) {
    gifs = results.map(gif => (
      <Gif user={props.userId} title={gif.title} body={gif.body} key={gif.id} />
    ))
  } else {
    console.log('nie ma artykulow');
  }

  return (
    <ul className="gif-list clearfix">
      {gifs}
    </ul>
  )
}

export default GifList
