/* eslint-disable react/no-unknown-property */
// Write your JS code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.getBloglist()
  }

  getBloglist = async () => {
    const rawList = await fetch('https://apis.ccbp.in/blogs')
    const midList = await rawList.json()
    console.log(midList)
    const finalList = midList.map(each => ({
      id: each.id,
      author: each.author,
      avatarUrl: each.avatar_url,
      title: each.title,
      imageUrl: each.image_url,
      topic: each.topic,
    }))
    this.setState({blogList: finalList, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" width={50} height={50} />
          </div>
        ) : (
          <ul className="unordered">
            {blogList.map(each => (
              <BlogItem key={each.id} details={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default BlogList
