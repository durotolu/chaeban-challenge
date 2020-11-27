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
      width: 100%;
      margin: .45em 0;
    }

    h4 {
      font-weight: bold;
      margin: .45em 0;
      font-size: .75em;
    }

    input, button {
      height: 2em;
      border-radius: 3px;
    }

    button {
      width: 100%;
      font-weight: bold;
      font-size: .6em;
      background-color: #148abe;
      color: white;
      cursor: pointer;
      height: 2.3em;
      margin: .5em auto;
    }

    div {
      width: 100%;
    }

    .themes {
      display: flex;

      label {
        text-align: center;
        font-size: .6em;

        /* HIDE RADIO */
        input { 
          position: absolute;
          opacity: 0;
          width: 0;
          height: 0;
        }

        /* IMAGE STYLES */
        input + img {
          cursor: pointer;
        }

        /* CHECKED STYLES */
        input:checked + img {
          /* outline: 2.3px solid #f00; */
          box-shadow: 0 0 3pt 2pt red;
        }

        input:hover + img {
          box-shadow: 0 0 3pt 2pt grey;
        }

        img {
          height: 4em;
          margin: .5em auto;
          width: 5.5em;
          border-radius: 6px;
        }
      }
    }
  }

`