import styled from 'styled-components'

const Div = styled.div`

.gatsby-image-wrapper{
    height: 80vh;
}
.entryHeader{
    position: absolute;
    left:0;
    right:0;
	width: 100%;
    text-align: center;
    display:flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
    top:30vh;
}

#post-content a{
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

`;

export default Div;
