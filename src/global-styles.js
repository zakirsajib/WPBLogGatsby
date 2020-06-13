import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}


html {box-sizing:border-box}

body{
    font-size: calc(.35842vw + .95296em);
    line-height: calc(1.5em + .2vw);
	-webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
nav#header {
    margin-bottom:1rem;
    padding-top:1rem;
    background-color:transparent
}
.navbar-item,
.navbar-link{
    font-size:1.25rem;
}

.single a.navbar-item,
.single .navbar-link{
    color: #fff;
}
.pagination{
    .navbar-menu {
        display: flex;
        flex-grow: 1;
	    flex-shrink: 0;
	    z-index:0;
        background-color: transparent;
    }
    .navbar{
    	justify-content: center;
    }
}

.singlePage{
    a.navbar-item,
    .navbar-link,
    a.navbar-item.logo,
    .navbar-burger{
        color: #fff;
    }

}
.container{
    max-width: 980px;
}
.grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    margin: auto;
}
.navbar > .container{
    max-width: 980px;
}

@media screen and (min-width: 768px){
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media screen and (max-width: 1023px){
	.navbar-menu {
		box-shadow: rgba(35, 38, 52, 0.08) 0px 26px 50px 0px;
	}
	.navbar-menu.is-active{
		background: -webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.9)),to(rgba(0,0,0,.5)));
		background: linear-gradient(180deg,rgba(0,0,0,.9) 0,rgba(0,0,0,.5));
		background-color: #fff;
		position:fixed;
		width:100%;
		height:100vh;
		right:0;
		top:0;
		display: flex;
        flex-direction: column;
		align-items: center;
        justify-content: center;
	}
	.navbar-item,
    .navbar-link{
		color: #f9fafc;
		font-size: 2.5em;
	}
	a.navbar-item.logo {
		color: #000;
		z-index: 1;
	}
    .single .navbar-burger,
    .single a.navbar-item.logo{
        color: #fff;
    }
    .social-icons{
        display: flex;
        justify-content: center;
        padding: 2rem 0 0;
    }
    .icon{
        height: 2.5rem!important;
        width: 2.5rem!important;
        padding: 2.5px;
    }
    .navbar-burger.burger.is-active {
        position: fixed;
        z-index: 9999;
        right: 0;
    }
}

`;
export default GlobalStyle;
