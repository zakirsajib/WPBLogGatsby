import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}


@import url('https://fonts.googleapis.com/css?family=Maven+Pro:400,700|Open+Sans:400,400i,600,700,700i&display=swap');

html {
    box-sizing: border-box;
  }

body{
	background: #f9fafc;
	font-family: 'Open Sans', sans-serif;
	-webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

h1,h2,h3,h4,h5,h6{
	font-family: 'Maven Pro', sans-serif
}
.section .container{max-width:960px}

`;
export default GlobalStyle;