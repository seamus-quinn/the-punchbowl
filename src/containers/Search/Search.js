import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userInput: '',
      keywords: []
    }
  }

  handleChange = (event) => {
    const userInput = event.target.value;
    this.setState({ userInput })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.createKeywords();
  }

  createKeywords = () => {
    const { userInput } = this.state
    const keywords = userInput.split(' ')
    this.setState({ keywords })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='userInput'
            value={this.state.userInput}
            onChange={this.handleChange}
            placeHolder='Search...'
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export {
  Search
}