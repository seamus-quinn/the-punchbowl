import React, { Component } from 'react';
import { createMatch } from '../../actions';
import { connect } from 'react-redux';
import './Search.css';
import arrow from '../../assets/right-arrow.svg';
import Trending from '../Trending/Trending'

class Search extends Component {
  constructor(props) {
    super(props);

    this.inputField = React.createRef();
    
    this.state = {
      userInput: '',
      errorStatus: ''
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
    if (!matches.articles.length || this.state.userInput === '') {
      this.setState({ errorStatus: 'No matches found, please try something else'})
    } else {
      this.props.createMatch(matches)
      this.setState({ userInput: '', errorStatus: ''})
    }
  }

  createKeywords = () => {
    const { userInput } = this.state
    const keywords = userInput.split(' ')
    return keywords;
  }

  createMatchObject = (keywords, articles) => ({
    keywords,
    articles, 
    id: Date.now()
  })

  findArticles = (keywords) => {
    const { articles } = this.props
    const matches = articles.filter(article => {
      let match = 0;
      if (article.description) {
        keywords.forEach(keyword => {
          if (article.title.toLowerCase().includes(keyword.toLowerCase()) || article.description.toLowerCase().includes(keyword.toLowerCase())) {
            match += 1;
          }
        })
      } else {
        keywords.forEach(keyword => {
          if (article.title.toLowerCase().includes(keyword.toLowerCase())) {
            match += 1;
          }
        })
      }
      return match === keywords.length;
    })
    return matches
  }

  populateInputField = (word) => {
    const userInput = this.state.userInput + ' ' + word;
    this.setState({ userInput })
  }

  clearInputField = (event) => {
    event.preventDefault();
    this.setState({ userInput: '' })
    this.inputField.current.focus();
  }

  render() {
    return(
      <div>
        <form 
          onSubmit={this.handleSubmit}
          className='search-form'
        >
          <input
            type='text'
            name='userInput'
            ref={this.inputField}
            value={this.state.userInput}
            onChange={this.handleChange}
            placeholder='Search...'
            className='input-field'
          />
          <p>
            {this.state.errorStatus}
          </p>
          <button className='submit-button'>
            <img src={arrow} alt='submit-button' className='arrow'/>
          </button>
          <button 
            className='delete-button'
            onClick={this.clearInputField}
          >
            x
          </button>
        </form>
        {this.props.articles.length && 
        <Trending populateInputField={this.populateInputField} />}
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