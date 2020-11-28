import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { StyledOutput } from "./OutputStyle"

function Output({outputFields}) {
  console.log(outputFields)
  return (
    <StyledOutput outputFields={outputFields}>
      <p>{outputFields.message}</p>
      <Link to='/'>
        <button type="button">Back to Select Input</button>
      </Link>
    </StyledOutput>
  )
};

export default Output