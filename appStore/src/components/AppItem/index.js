// Write your code here
import './index.css'

const AppItem = props => {
  const {key, appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="list">
      <img className="logo-img" alt={appName} src={imageUrl} />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
