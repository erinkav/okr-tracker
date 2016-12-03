import React, { Component } from 'react';
import KeyResult from './KeyResult'; 

class Objective extends Component {
  render() {
    return (
      <div className="Objective">
        <h3>{this.props.title}</h3>
        {
          this.props.keyResults.map((kr) => {
            return < KeyResult title={kr.title} />
          })
        }
      </div>
    );
  }
}

export default Objective;