// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {userInput: ''}

  render() {
    const {suggestionsList} = this.props

    return (
      <div className="main-container">
        <div className="content">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google icon"
          />
          <div className="input-search-container">
            <div className="input-container">
              <img
                className="search"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input type="search" placeholder="Search Google" />
            </div>
          </div>
          <ul className="list-container">
            {suggestionsList.map(each => ({
               <SuggestionItem key={each.id} search={each} />
            }))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
