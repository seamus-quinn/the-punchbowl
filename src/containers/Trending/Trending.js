import React, { Component } from 'react';
import { connect } from 'react-redux';

class Trending extends Component {
  constructor(props) {
    super(props)

    this.state ={

    }
  }

  render() {
    return (
      <div>
        sup
      </div>
    )
  }
}

const mapStateToProps = (state) => {

}

export {
  Trending
}

export default connect(mapStateToProps)(Trending)