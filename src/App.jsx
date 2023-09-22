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

    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      const { good, neutral, bad } = prevState;
      const totalFeedbacks = good + neutral + bad;
      return {
        ...prevState,
        total: totalFeedbacks,
      };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      const { total, good } = prevState;
      const positiveRate = Math.round((100 / total) * good);

      return {
        ...prevState,
        positiveFeedback: positiveRate,
      };
    });
  };

  render() {
    return <Feedback data={this.state} handelBtnClick={this.handelBtnClick} />;
  }
}
