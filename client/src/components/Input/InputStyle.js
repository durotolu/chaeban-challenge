import styled from "styled-components";

export const StyledInput = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  min-height: 100vh;
  align-items: center;
  font-size: calc(10px + 2vmin);

  .nav {
    display: flex;
    align-items: center;
    width: 90vw;
    justify-content: space-between;
  }

  .dark-mode-text {
    font-size: 14px;
    font-weight: bold;
  }

  .dark-mode__toggle {
    background: papayawhip;
    border-radius: 50px;
    border: 1px solid black;
    height: 20px;
    position: relative;
    width: 40px;
    cursor: pointer;
    margin: 0 auto;
  }

  .toggle {
    background: #f68819;
    border-radius: 50px;
    height: 18px;
    left: 0;
    position: absolute;
    transition: 0.2s;
    width: 20px;
  }

  .toggled {
    left: 18px;
  }

  h1 {
    font-size: 35px;
    margin-bottom: 0;

    a {
      color: inherit;
    }

    a:hover {
      color: #84bbd3;
    }
  }

  form {
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    text-align: left;
    border: 1px solid rgb(230, 211, 211);
    min-width: 325px;
    padding: .4em .8em;
    margin: auto;

    h2 {
      font-weight: 500;
      font-size: 30px;
      line-height: 1;
      margin: .2em auto;
      border-bottom: 1px dashed white;
    }

    label {
      display: flex;
      flex-direction: column;
      font-weight: bold;
      width: 100%;
      margin: .3em 0;
    }

    h4 {
      font-weight: bold;
      margin: .25em 0;
      font-size: .75em;
    }

    input, button {
      height: 2em;
      border-radius: 3px;
    }

    button:disabled,
    button[disabled]{
      border: 1px solid #999999;
      background-color: #cccccc;
      color: #666666;
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

        input:not(:checked):hover + img {
          box-shadow: 0 0 3pt 2pt grey;
        }

        img {
          height: 4em;
          margin: .5em auto;
          width: 5em;
          border-radius: 6px;
        }
      }
    }
  }

`