import React from 'react';
import { Link } from 'react-router-dom';

function Input({ inputFields, onValueChange, onCreateAccount }) {
  return (
    <form>
      <h1>Create account</h1>
      <label htmlFor="date">Date
            <input type="date" value={inputFields.date} onChange={onValueChange} name="date" />
      </label>
      <label htmlFor="message">Message
            <input type="text" value={inputFields.message} onChange={onValueChange} name="message" />
      </label>
      <Link to='/output'>
        <button type="button" onClick={onCreateAccount}>Lanch Output</button>
      </Link>

      <p>By creating an account, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.</p>
      <p className="signin">Already have an account? <a href="#">Sign-In</a></p>
    </form>
  )
}

export default Input