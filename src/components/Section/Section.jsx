import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import React, { Component } from 'react';

export class Section extends Component {
  render() {
    const stateKeys = Object.keys(this.props.data);
    const { title, data, handelBtnClick } = this.props;

    return (
      <section>
        <h1>{title}</h1>
        <ul>
          <FeedbackOptions
            options={stateKeys}
            onLeaveFeedback={handelBtnClick}
          />
        </ul>
        <Statistics data={data} />
      </section>
    );
  }
}
