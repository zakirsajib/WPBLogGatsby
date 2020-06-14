import styled from 'styled-components'

const Section = styled.section`
    padding: 3rem 0;

    .postList{
        display: grid;
    	box-shadow: rgba(35, 38, 52, 0.08) 0px 26px 50px 0px;
        padding: 0px;
        margin-left: 0;
        margin-right: 0;
        .featuredImage{
            padding: 0;
        }
        .postContentInner{
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            justify-content:
            height: 100%;
            h2{
                color: #3e465b;
                font-size: calc(.55842vw + .95296em);
                text-transform:none;
            }
            .readingTime{
                font-size: calc(.0035842vw + .95296em);
            }
            .post-excerpt {
                p{
                	font-size: calc(.1135842vw + .95296em);
                	line-height: 1.5em;
                }
            }
            .postMetaDetails{
            	display: flex;
            	flex-direction: row;
            	align-items: center;
                justify-content: space-between;
            }
        }
    }
`;

export default Section;
