import React, { Component } from 'react';
import css from './FeedbackIptions.module.css';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return options.map(optionKey => {
      if (optionKey === 'total' || optionKey === 'positivePercentage') {
        return;
      }
      return (
        <li key={optionKey}>
          <button
            className={css.feedbackBtn}
            type="button"
            name={optionKey}
            onClick={onLeaveFeedback}
          >
            {optionKey}
          </button>
        </li>
      );
    });
  }
}
