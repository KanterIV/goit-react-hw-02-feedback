import React, { Component } from 'react';

export default class Feedback extends Component {
  render() {
    return (
      <section>
        <h1>Please leave feedback</h1>

        <ul>
          <li>
            <button
              type="button"
              name="good"
              onClick={this.props.handelBtnClick}
            >
              Good
            </button>
          </li>
          <li>
            <button
              type="button"
              name="neutral"
              onClick={this.props.handelBtnClick}
            >
              Neutral
            </button>
          </li>
          <li>
            <button
              type="button"
              name="bad"
              onClick={this.props.handelBtnClick}
            >
              bad
            </button>
          </li>
        </ul>

        <h2>Statistics</h2>
        <ul>
          <li>
            <p>Good: {this.props.data.good} </p>
          </li>
          <li>
            <p>Neutral: {this.props.data.neutral}</p>
          </li>
          <li>
            <p>Bad: {this.props.data.bad}</p>
          </li>
        </ul>
      </section>
    );
  }
}
