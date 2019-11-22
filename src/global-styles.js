import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}


@import url('https://fonts.googleapis.com/css?family=Maven+Pro:400,500,700&display=swap');

html {box-sizing:border-box}

body{
	font-family: 'Maven Pro', sans-serif;
	font-weight:500;
	-webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

h1,h2,h3,h4,h5,h6{font-family: 'Maven Pro', sans-serif}
nav#header {margin-bottom:1rem;margin-top:1rem;background-color:transparent}
.navbar-item, .navbar-link{font-size:1.25rem}
.section .container{max-width:960px}

`;
export default GlobalStyle;