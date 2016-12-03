import React, { Component } from 'react';

class KeyResult extends Component {
  render() {
    return (
      <div className="KeyResult">
        <p>{ this.props.title }</p>
        <select>
          <option>Not started</option>
          <option>In Progress</option>
          <option>On Track</option>
        </select>
      </div>
    );
  }
}

export default KeyResult;