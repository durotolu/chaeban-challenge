import React from 'react';
import { Link } from 'react-router-dom';
import { StyledInput } from "./InputStyle"
import cool from "../../images/hero-image.jpg"
import clouds from "../../images/images.jpg"
import solarSystem from "../../images/solar-system-theme-dw10.jpg"

function Input({ inputFields, onValueChange, onCreateAccount }) {
  return (
    <StyledInput>
      <form>
        <h1>Create account</h1>
        <label htmlFor="date">
          <h4>Date</h4>
          <input type="date" value={inputFields.date} onChange={onValueChange} name="date" />
        </label>
        <label htmlFor="message">
          <h4>Message</h4>
          <textarea rows={10} cols={30} value={inputFields.message} onChange={onValueChange} name="message" />
        </label>
        <div>
          <h4>Select Theme</h4>
          <div className="themes">
            <label htmlFor="cool">
              <span>Cool</span>
              <input id="cool" type="radio" value="cool" onChange={onValueChange} name="theme" />
              <img src={cool} />
            </label>
            <label htmlFor="clouds">
              <span>Clouds</span>
              <input id="clouds" type="radio" value="clouds" onChange={onValueChange} name="theme" />
              <img src={clouds} />
            </label>
            <label htmlFor="solar-system">
              <span>Solar System</span>
              <input id="solar-system" type="radio" value="solar-system" onChange={onValueChange} name="theme" />
              <img src={solarSystem} />
            </label>
          </div>
        </div>
        <Link to='/output'>
          <button type="button" onClick={onCreateAccount}>Launch Output</button>
        </Link>
      </form>
    </StyledInput>
  )
}

export default Input