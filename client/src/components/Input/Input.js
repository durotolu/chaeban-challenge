import React from 'react';
import { Link } from 'react-router-dom';
import { StyledInput } from "./InputStyle"

function Input({ inputFields, onValueChange, onCreateAccount }) {
  return (
    <StyledInput>
      <form>
        <h1>Create account</h1>
        <label htmlFor="date">Date
            <input type="date" value={inputFields.date} onChange={onValueChange} name="date" />
        </label>
        <label htmlFor="message">Message
            <textarea rows={10} cols={30} value={inputFields.message} onChange={onValueChange} name="message" />
        </label>
        <Link to='/output'>
          <button type="button" onClick={onCreateAccount}>Lanch Output</button>
        </Link>
      </form>
    </StyledInput>
  )
}

export default Input