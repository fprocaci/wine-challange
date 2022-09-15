import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Inter, sans-serif;
  }

  img{
    width: 100%;
    max-width: 100%;
  }

  ul,ol{
    list-style: none;
  }

  button{
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }

  .container{
    
  }

  @media (max-width: 1450px){
    max-width: 70rem;
  }
  @media (max-width: 1000px){
    max-width: 50rem;
  }
  @media (max-width: 700px){
    padding: 0 2rem;
  }

`;
