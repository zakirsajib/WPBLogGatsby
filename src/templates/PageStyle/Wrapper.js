import styled from 'styled-components'
import quote from './img/quote_e50de5.svg'

const Div = styled.div`

    .gatsby-image-wrapper {
        height: 80vh;
    }
    .content {
        blockquote {
            background-image: url(${quote});
            background-position: 0 0;
            background-repeat: no-repeat;
            background-color: transparent;
            border-left: 0;
            margin-top: 5rem;
            margin-bottom: 5rem!important;
            quotes:none;
            padding-left: 5em;
            position: relative;
            p {
                font-size: calc(.935842vw + .95296em);
                letter-spacing: -.3px;
                line-height: calc(1.5em + .2vw);
            }
        }
        a {
            position: relative;
            &::after {
                background-color: rgba(0,255,168,.54);
                content: "";
                display: block;
                position: absolute;
                width: 100%;
                margin: auto;
                left: 0;
                right: 0;
                bottom: 0;
                height: 10px;
                transition-duration: .8s;
            }
        }
    }
    #pageTitle {
        position: absolute;
        left:0;
        right:0;
        width: 100%;
        text-align: center;
        display:grid;
        align-items: center;
        justify-content: center;
        z-index: 1;
        top:30vh;
    }
    .contactForm {
        margin:0 4em 4em;
    }
    @media screen and (max-width: 1023px){
        .contactForm {
            margin:0;
        }
        .content {
            figure,
            blockquote {
                margin-left: 0;
                margin-right: 0;
            }
        }
    }
    @media screen and (max-width: 768px){
        .content blockquote {
            padding-left: 2.5em;
        }
    }
`;

export default Div;
