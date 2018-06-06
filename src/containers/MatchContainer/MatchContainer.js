import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import Match from '../Match/Match';
import './MatchContainer.css'

const MatchContainer = (props) => {
  if (props.matches.length > 0) {
    const match = props.matches.map((match, index) => {
      return (
        <div 
          className='match'
          key={index}
        >
          <div className='border'></div>      
          <Match match={match} />
          <div className='border'></div>          
        </div>
      )
    })
    return (
      <div className='match-container'>
        {match}
      </div>
    )
  } else {
    return (
      <div className='match-container'>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  matches: state.matches
})

MatchContainer.propTypes = {
  matches: PropTypes.any
}

export {
  MatchContainer,
  mapStateToProps
}

export default connect(mapStateToProps)(MatchContainer)