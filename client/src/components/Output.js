import React from 'react';
import { Link } from 'react-router-dom';

function Output({ outputFields }) {
  // console.log(outputFields)
  return (
    <div>
      <p>{outputFields.message}</p>
      <Link to='/'>
        <button type="button">Back to Select Input</button>
      </Link>
    </div>
  )
}

export default Output