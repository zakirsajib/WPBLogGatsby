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

@media screen and (max-width: 1023px){
	.navbar-menu {
		box-shadow: rgba(35, 38, 52, 0.08) 0px 26px 50px 0px;
	}
	.navbar-menu.is-active{
		background: -webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.1)),to(rgba(0,0,0,.4)));
    	background: linear-gradient(180deg,rgba(0,0,0,.1) 0,rgba(0,0,0,.4));
	}
	.navbar-item, .navbar-link{
		color: #f9fafc
	}
}

`;
export default GlobalStyle;