import React from 'react';
import { Link } from 'react-router-dom';
import useDarkMode from "../../utils/useLocalStorage"
import { StyledInput } from "./InputStyle";
import cool from "../../images/hero-image.jpg";
import clouds from "../../images/images.jpg";
import choc from "../../images/choc.jpg";
import ice from "../../images/ice.jpg";

function Input({ inputFields, onValueChange, onCreateAccount }) {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  const isDisabled = () => {
    const { name, date, message, theme } = inputFields
    return !name || !date || !message || !theme;
  }

  return (
    <StyledInput inputFields={inputFields}>
      <div className="nav">
        <div></div>
        <h1>Code lives at <a href="https://github.com/durotolu/chaeban-challenge"><i className="navhead fa fa-github"></i></a></h1>
        <div className="dark-mode-text">Dark side
          <div className="dark-mode__toggle" onClick={toggleMode}>
            <div className={darkMode ? 'toggle toggled' : 'toggle'} />
          </div>
        </div>
      </div>
      <form>
        <h2>Input Form<i className="fas fa-moon"></i></h2>
        <label htmlFor="name">
          <h4>Name</h4>
          <input type="text" placeholder="Let's meet" value={inputFields.name} onChange={onValueChange} name="name" />
        </label>
        <label htmlFor="date">
          <h4>Date</h4>
          <input type="date" value={inputFields.date} onChange={onValueChange} name="date" />
        </label>
        <label htmlFor="message">
          <h4>Message</h4>
          <textarea placeholder="What'll you like to tell us..." rows={10} cols={30} value={inputFields.message} onChange={onValueChange} name="message" />
        </label>
        <div>
          <h4>Select Theme</h4>
          <div className="themes">
            <label htmlFor="ice">
              <span>Cream</span>
              <input id="ice" type="radio" value="ice" onChange={onValueChange} name="theme" />
              <img src={ice} alt="ice-cream" />
            </label>
            <label htmlFor="cool">
              <span>Cool</span>
              <input id="cool" type="radio" value="cool" onChange={onValueChange} name="theme" />
              <img src={cool} alt="blue" />
            </label>
            <label htmlFor="clouds">
              <span>Clouds</span>
              <input id="clouds" type="radio" value="clouds" onChange={onValueChange} name="theme" />
              <img src={clouds} alt="clouds" />
            </label>
            <label htmlFor="choc">
              <span>Dunes</span>
              <input id="choc" type="radio" value="choc" onChange={onValueChange} name="theme" />
              <img src={choc} alt="chocolate" />
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