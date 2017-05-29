import React, { Component } from 'react'
import GifList from './GifList'
import { getGifs } from '../Api'
import '../App.css'

class PostsPaginator extends Component {
  static defaultProps = {
    postsPerPage: 10,
  }

  state = {
    loading: true,
    posts: [],
    pageCount: 0,
    currentPage: 0,
  }
  posts = []

  componentDidMount() {
    this.performSearch()
  }

  performSearch = (query = 'cats') => {
    getGifs()
      .then(response => {
        this.posts = response
        this.setState({
          loading: false,
          pageCount: Math.floor(response.length / this.props.postsPerPage),
          posts: this.getPageOfPosts(this.state.currentPage),
        })
      })
      .catch(error => {
        this.setState({
          loading: false,
        })
        console.log('Error fetching and parsing data', error)
      })
  }

  onPageChange = pageNumber => {
    this.setState({
      currentPage: pageNumber,
      posts: this.getPageOfPosts(pageNumber),
    })
  }

  getPageOfPosts = (pageNumber = 0) => {
    const postsCount = this.posts.length
    const start = pageNumber * this.props.postsPerPage
    const limit = start + this.props.postsPerPage
    const end = postsCount < limit ? postsCount - 1 : limit
    return this.posts.slice(start, end)
  }

  renderPagination = () => {
    const { pageCount } = this.state
    return (
      <div className="paginator-container">
        {Array.from(Array(pageCount)).map((el, index) => (
          <button
            className={
              this.state.currentPage === index
                ? 'paginator-button active'
                : 'paginator-button'
            }
            key={index}
            onClick={() => {
              this.onPageChange(index)
            }}>
            {index}
          </button>
        ))}
      </div>
    )
  }

  render() {
    return (
      <div className="main-content">
        {!!this.state.pageCount && this.renderPagination()}
        {this.state.loading && <div>Loading...</div>}
        {!this.state.loading && <GifList data={this.state.posts} />}
      </div>
    )
  }
}

export default PostsPaginator
