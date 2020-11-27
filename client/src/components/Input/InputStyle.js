import styled from "styled-components";

export const StyledInput = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  form {
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    text-align: left;
    border: 1px solid rgb(230, 211, 211);
    min-width: 350px;
    padding: 0 .8em;
    margin: auto;
  }

  h1 {
    font-weight: 500;
    font-size: 30px;
    line-height: 1;
    text-align: left;
    margin-bottom: .3em;
  }

  label {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    font-size: .75em;
    width: 100%;
    margin: .45em 0;
  }
`