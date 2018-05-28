import React, { Component } from 'react';
import { createMatch } from '../../actions';
import { connect } from 'react-redux';

class Search extends Component {
  constructor(props) {
    super(props);
    
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
    this.setState({ keywords }, () => this.sendMatches())
  }

  sendMatches = () => {
    const { articles } = this.props
    console.log(this.state.keywords)
    const matches = articles.filter(article => {
      let match = 0;
      this.state.keywords.forEach(keyword => {
        if (article.title.toLowerCase().includes(keyword.toLowerCase()) || article.description.toLowerCase().includes(keyword.toLowerCase())) {
          match += 1;
        }
      })
      return match === this.state.keywords.length;
    })
    console.log(matches)
    this.props.createMatch(matches) 
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
            placeholder='Search...'
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  articles: state.articles
})

const mapDispatchToProps = (dispatch) => ({
  createMatch: (matches) => dispatch(createMatch(matches))
})

export {
  Search
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)