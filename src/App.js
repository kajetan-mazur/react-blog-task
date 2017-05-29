import React, { Component } from 'react'
import './App.css'
import PostsPaginator from './Components/PostsPaginator'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">Artykuliki</h1>
          </div>
        </div>
        <PostsPaginator postsPerPage={5} />
      </div>
    )
  }
}
