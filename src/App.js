import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'

import './App.css'

// Replace your code here
class App extends Component {
  state = {listDetails: [], userinp: '', count: ''}

  onChanging = event => {
    this.setState({
      userinp: event.target.value,
      count: event.target.value.length,
    })
  }

  onSubmitting = event => {
    event.preventDefault()
    const {listDetails, userinp, count} = this.state
    const updated = {
      id: uuidv4(),
      userinp,
      count,
    }
    this.setState({listDetails: [...listDetails, updated]})
    this.setState({userinp: ''})
  }

  render() {
    const {listDetails, userinp} = this.state

    return (
      <div className="forOuterDiv">
        <div className="forInner">
          <div className="fordiv">
            <h1 className="forHeader">Count the characters like a Boss...</h1>
          </div>
          {listDetails.length === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
              className="forImage"
            />
          ) : (
            <ul className="forul">
              {listDetails.map(each => (
                <li key={each.id} className="forList">
                  <p className="forpa">
                    {each.userinp}:{each.count}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="forInner_1">
          <h1 className="forChara">Character Counter</h1>
          <form onSubmit={this.onSubmitting}>
            <input
              type="text"
              placeholder="Enter the Characters here"
              className="forinp"
              value={userinp}
              onChange={this.onChanging}
            />
            <button
              type="submit"
              onClick={this.onClicking}
              className="forbbttb"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
