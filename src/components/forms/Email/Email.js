import React, { Component } from 'react';
import warningIcon from '../../../assets/images/icon-error.svg';
import arrowIcon from '../../../assets/images/icon-arrow.svg';
import style from './Email.module.css';

class Email extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailInput: '',
      isValid: true,
    };
  }

  inputValueHandler = (e) => {
    this.setState(
      {
        emailInput: e.target.value,
      },
      () => {
        if (this.state.emailInput.length) {
          this.setState({
            isValid: true,
          });
        }
      }
    );
  };

  onSubmit = (e) => {
    if (!this.state.emailInput || !this.validateEmail(this.state.emailInput)) {
      e.preventDefault();
      this.setState({
        isValid: false,
      });
    }
  };

  validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  render() {
    const warningClass = this.state.isValid
      ? style[`form-warning`]
      : `${style['form-warning']} ${style.active}`;

    const iconClass = this.state.isValid
      ? style['warning-icon']
      : `${style['warning-icon']} ${style['icon-visible']}`;

    return (
      <form
        className={style['form-wrapper']}
        onSubmit={this.onSubmit}
        noValidate
      >
        <div>
          <label htmlFor="email"></label>
          <input
            type="email"
            placeholder="Email Address"
            value={this.state.emailInput}
            onChange={this.inputValueHandler}
          ></input>
          <img className={iconClass} src={warningIcon} alt="warning icon"></img>
          <p className={warningClass}>Please provide a valid email</p>
        </div>
        <button type="submit">
          <img src={arrowIcon} alt="arrow icon "></img>
        </button>
      </form>
    );
  }
}

export default Email;
