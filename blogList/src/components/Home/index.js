import './index.css'
// import {userInfo} from 'os'
import UserInfo from '../UserInfo'
import BlogItem from '../BlogItem'

// eslint-disable-next-line no-unused-vars
const blogsList = [
  {
    id: 1,
    title: 'My first post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Aug 2nd',
  },
  {
    id: 2,
    title: 'My second post',
    description:
      'A high quality solution beautifully designed for startups and Bussiness schools',
    publishedDate: 'Mar 1st',
  },
  {
    id: 3,
    title: 'My third post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Jan 2nd',
  },
  {
    id: 4,
    title: 'My fourth post',
    description:
      'A high quality solution beautifully designed for startups and Bussiness schools. ',
    publishedDate: 'Dec 24th',
  },
  {
    id: 5,
    title: 'My fifth post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Nov 10th',
  },
]
const Home = () => (
  <div className="home-container">
    <UserInfo />
    <div className="inner-box">
      <ul className="unordered">
        {blogsList.map(each => (
          <BlogItem key={each.id} details={each} />
        ))}
      </ul>
    </div>
  </div>
)

export default Home
