// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {search} = props
  const {suggestion} = search

  return (
    <li className="search-item">
      <p className="search-text">{suggestion}</p>
      <img
        className="arrow-icon"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
      />
    </li>
  )
}

export default SuggestionItem
