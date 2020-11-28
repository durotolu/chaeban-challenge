import styled from "styled-components";
import cool from "../../images/hero-image.jpg";
import clouds from "../../images/images.jpg";
import solarSystem from "../../images/solar-system-theme-dw10.jpg"

export const StyledOutput = styled.div`
  background-image: url(
    ${props => props.outputFields.theme === 'cool' ? cool :
      props.outputFields.theme === 'clouds'? clouds : solarSystem
    }
  );
  height: 100vh;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
`