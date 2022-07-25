import React, { Component } from 'react'

export default class ScrollBtn extends Component {
  render() {
    return (
      <div className='scrollBtn' 
        onClick={this.props.toTop}
      ><span>Top</span></div>
    )
  }
}
