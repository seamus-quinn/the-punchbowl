import React, { Component } from 'react';
import { createMatch } from '../../actions';
import { connect } from 'react-redux';

class Search extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      userInput: '',
    }
  }

  handleChange = (event) => {
    const userInput = event.target.value;
    this.setState({ userInput })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const keywords = this.createKeywords();
    const articles = this.findArticles(keywords);
    const matches = this.createMatchObject(keywords, articles);
    this.props.createMatch(matches)
  }

  createKeywords = () => {
    const { userInput } = this.state
    const keywords = userInput.split(' ')
    return keywords;
  }

  createMatchObject = (keywords, articles) => ({
    keywords,
    articles
  })

  findArticles = (keywords) => {
    const { articles } = this.props
    const matches = articles.filter(article => {
      let match = 0;
      keywords.forEach(keyword => {
        if (article.title.toLowerCase().includes(keyword.toLowerCase()) || article.description.toLowerCase().includes(keyword.toLowerCase())) {
          match += 1;
        }
      })
      return match === keywords.length;
    })
    return matches
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
  createMatch: (matches) => dispatch(createMatch(matches)),
})

export {
  Search,
  mapStateToProps,
  mapDispatchToProps
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)