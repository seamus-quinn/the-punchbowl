import React from 'react';
import { connect } from 'react-redux'
import Match from '../../components/Match/Match';
import './MatchContainer.css'

const MatchContainer = (props) => {
  if (props.matches.length > 0) {
    const match = props.matches.map(match => {
      return (
        <div className='match'>
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

export {
  MatchContainer,
  mapStateToProps
}

export default connect(mapStateToProps)(MatchContainer)