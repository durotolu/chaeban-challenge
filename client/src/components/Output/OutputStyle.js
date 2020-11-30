import styled from "styled-components";
import cool from "../../images/hero-image.jpg";
import clouds from "../../images/images.jpg";
import choc from "../../images/choc.jpg";
import ice from "../../images/ice.jpg";

export const StyledOutput = styled.div`
  background-image: url(
    ${props => props.outputFields.theme === 'cool' ? cool :
      props.outputFields.theme === 'clouds'? clouds :
      props.outputFields.theme === 'choc'? choc : ice
    }
  );
  height: 100vh;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  color: ${props => 
    props.outputFields.theme === 'cool' || props.outputFields.theme === 'choc' ? 'white' : 'black'
  };

  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
  font-size: calc(20px + 2vmin);

  time {
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    text-decoration: underline;
  }
`