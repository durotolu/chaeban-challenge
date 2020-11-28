import React from 'react';
import { Link } from 'react-router-dom';
import { StyledOutput } from "./OutputStyle"

function Output({ outputFields }) {

  const dayOfWeek = new Date(outputFields.date);
  const weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var day = weekday[dayOfWeek.getDay()];

  return (
    <StyledOutput outputFields={outputFields}>
      <div>
        <p>{day}, <time dateTime={outputFields.date}>{outputFields.date}</time></p>
        <p>{outputFields.message}</p>
        <p>You can review the code at <a href="https://github.com/durotolu/chaeban-challenge"><i className="navhead fa fa-github"></i></a></p>
        <Link to='/'>
          <button type="button">Back to Select Input</button>
        </Link>
      </div>
    </StyledOutput>
  )
};

export default Output