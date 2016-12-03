import React, { Component } from 'react';
import Objective from './Objective'; 
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      'objectives': [
        {
          'title': 'Get in shape',
          'results': [
            {
              'title': '4x per week workout',
              'status': 0
            }, {
              'title': 'Eat protein shake 3x per week',
              'status': 0              
            }, {
              'title': 'Take vitamin daily',
              'status': 0              
            }
          ]
        }, 
        {
          'title': 'Grow technical skills',
          'results': [
            {
              'title': '3 side projects',
              'status': 0
            }, {
              'title': 'iOS skills',
              'status': 0              
            }, {
              'title': 'Complete college course in CompSci',
              'status': 0              
            }
          ]
        },
        {
          'title': 'Build my network',
          'results': [
            {
              'title': 'Get involved in a montly volunteer activity',
              'status': 0
            }, {
              'title': 'Attend 3 Meetups per month',
              'status': 0              
            }, {
              'title': 'Reach out to a friend I rarely see once per week',
              'status': 0              
            }
          ]
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>2017 OKR Tracker</h2>
        </div>
        <p className="App-intro">
          {
            this.state.objectives.map((objective) => {
              return <Objective title={ objective.title } keyResults={ objective.results }/>          
            })
          }
        </p>
      </div>
    );
  }
}

export default App;
