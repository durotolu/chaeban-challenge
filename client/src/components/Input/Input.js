import React from 'react';
import { Link } from 'react-router-dom';
import { StyledInput } from "./InputStyle";
import cool from "../../images/hero-image.jpg";
import clouds from "../../images/images.jpg";
import cream from "../../images/ice-cream.jpg";
import dunes from "../../images/main_mobile_themes.png";

function Input({ inputFields, onValueChange, onCreateAccount }) {
  const isDisabled = () => {
    const { date, message, theme } = inputFields
    return !date || !message || !theme;
  }

  return (
    <StyledInput inputFields={inputFields}>
      <h1>Code lives at <a href="https://github.com/durotolu/chaeban-challenge"><i className="navhead fa fa-github"></i></a></h1>
      <form>
        <h2>Input Form</h2>
        <label htmlFor="date">
          <h4>Date</h4>
          <input type="date" value={inputFields.date} onChange={onValueChange} name="date" />
        </label>
        <label htmlFor="message">
          <h4>Message</h4>
          <textarea placeholder="Start typing..." rows={10} cols={30} value={inputFields.message} onChange={onValueChange} name="message" />
        </label>
        <div>
          <h4>Select Theme</h4>
          <div className="themes">
            <label htmlFor="cream">
              <span>Cream</span>
              <input id="cream" type="radio" value="cream" onChange={onValueChange} name="theme" />
              <img src={cream} alt="ice-cream picture" />
            </label>
            <label htmlFor="cool">
              <span>Cool</span>
              <input id="cool" type="radio" value="cool" onChange={onValueChange} name="theme" />
              <img src={cool} alt="blue theme bicture" />
            </label>
            <label htmlFor="clouds">
              <span>Clouds</span>
              <input id="clouds" type="radio" value="clouds" onChange={onValueChange} name="theme" />
              <img src={clouds} alt="clouds picture" />
            </label>
            <label htmlFor="dunes">
              <span>Dunes</span>
              <input id="dunes" type="radio" value="dunes" onChange={onValueChange} name="theme" />
              <img src={dunes} alt="dunes theme picture" />
            </label>
          </div>
        </div>
        <Link to='/output'>
          <button disabled={isDisabled()} type="button" onClick={onCreateAccount}>Launch Output</button>
        </Link>
      </form>
    </StyledInput>
  )
}

export default Input