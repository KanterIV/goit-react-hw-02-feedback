import React, { Component } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Statistics } from 'components/Statistics/Statistics';
import css from './Section.module.css';

export class Section extends Component {
  render() {
    const stateKeys = Object.keys(this.props.data);
    const { title, secondTitle, data, handelBtnClick } = this.props;

    return (
      <section className={css.section}>
        <h1>{title}</h1>
        <ul className={css.feedBackBtnList}>
          <FeedbackOptions
            options={stateKeys}
            onLeaveFeedback={handelBtnClick}
          />
        </ul>
        <h2>{secondTitle}</h2>
        {data.total ? (
          <Statistics data={data} />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </section>
    );
  }
}
