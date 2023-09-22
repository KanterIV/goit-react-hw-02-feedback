import React, { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return options.map(optionKey => {
      if (optionKey === 'total' || optionKey === 'positivePercentage') {
        return;
      }
      return (
        <li key={optionKey}>
          <button type="button" name={optionKey} onClick={onLeaveFeedback}>
            {optionKey}
          </button>
        </li>
      );
    });
  }
}
