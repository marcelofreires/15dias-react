import React, { Component } from 'react';

import './styles.css';

class SquareCollab extends Component {
  handleClick() {
    console.log('click');
  }

  render() {
    return <button onClick={this.handleClick} className="square-collab">X</button>;
  }
}

export default SquareCollab;
