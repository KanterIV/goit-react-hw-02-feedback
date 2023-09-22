import React, { Component } from 'react';

export default class Feedback extends Component {
  render() {
    const { handelBtnClick, data } = this.props;
    return (
      <section>
        <h1>Please leave feedback</h1>

        <ul>
          <li>
            <button type="button" name="good" onClick={handelBtnClick}>
              Good
            </button>
          </li>
          <li>
            <button type="button" name="neutral" onClick={handelBtnClick}>
              Neutral
            </button>
          </li>
          <li>
            <button type="button" name="bad" onClick={handelBtnClick}>
              bad
            </button>
          </li>
        </ul>

        <h2>Statistics</h2>
        <ul>
          <li>
            <p>Good: {data.good} </p>
          </li>
          <li>
            <p>Neutral: {data.neutral}</p>
          </li>
          <li>
            <p>Bad: {data.bad}</p>
          </li>
          <li>
            <p>Total: {data.total}</p>
          </li>
          <li>
            <p>Positive feedback: {`${data.positiveFeedback}%`}</p>
          </li>
        </ul>
      </section>
    );
  }
}
