import React, { Component } from 'react';
import warningIcon from '../../../assets/images/icon-error.svg';
import arrowIcon from '../../../assets/images/icon-arrow.svg';
import style from './Email.module.css';

class Email extends Component {
  render() {
    return (
      <form className={style['form-wrapper']}>
        <div>
          <label htmlFor="email"></label>
          <input type="email" placeholder="Email Address"></input>
          <img src={warningIcon} alt="warning icon"></img>
          <p>Please provide a valid email</p>
        </div>
        <button type="submit">
          <img src={arrowIcon} alt="arrow icon "></img>
        </button>
      </form>
    );
  }
}

export default Email;
