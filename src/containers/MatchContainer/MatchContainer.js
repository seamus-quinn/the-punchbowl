import React from 'react';
import { connect } from 'react-redux'
import Match from '../../components/Match/Match'

const MatchContainer = (props) => {
  if (props.matches.length > 0) {
    const match = props.matches.map(match => {
      return (
        <div>
          <Match match={match} />
        </div>
      )
    })
    return (
      <div>
        {match}
      </div>
    )
  } else {
    return (
      <div>
        Please type in words to generate matched articles.
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