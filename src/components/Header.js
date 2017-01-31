import React, { Component } from 'react'

class Header extends Component {
  render() {
    let text = 'Here is some JSX/React'

    return(
      <h1>
        {text}
      </h1>
    )
  }
}

export default Header;
