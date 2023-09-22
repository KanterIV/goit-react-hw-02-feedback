import Feedback from 'components/Feedback/Feedback';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handelBtnClick = event => {
    this.setState(prevState => {
      return {
        [event.target.name]: prevState[event.target.name] + 1,
      };
    });
  };

  // countTotalFeedback() {}

  // countPositiveFeedbackPercentage() {}

  render() {
    return <Feedback data={this.state} handelBtnClick={this.handelBtnClick} />;
  }
}
