/* eslint-disable react/no-unknown-property */
// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {eachItem: {}, isLoading: true}

  componentDidMount() {
    this.getEachItem()
  }

  getEachItem = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const rawItem = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const midItem = await rawItem.json()
    console.log(midItem)
    const finalItem = {
      id: midItem.id,
      author: midItem.author,
      avatarUrl: midItem.avatar_url,
      title: midItem.title,
      imageUrl: midItem.image_url,
      topic: midItem.topic,
      content: midItem.content,
    }
    this.setState({eachItem: finalItem, isLoading: false})
  }

  render() {
    const {eachItem, isLoading} = this.state
    const {title, content, imageUrl, avatarUrl, author} = eachItem
    return (
      <div className="item-outer">
        <div testid="loader" className="item-inner">
          {isLoading ? (
            <Loader type="TailSpin" color="#00BFFF" width={50} height={50} />
          ) : (
            <div className="innert">
              <h1 className="item-topic">{title}</h1>
              <div className="item-avathar">
                <img className="item-img" src={avatarUrl} alt={author} />
                <p>{author}</p>
              </div>
              <img src={imageUrl} className="item-img-big" alt={title} />
              <p className="content">{content}</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default BlogItemDetails
