import styled from 'styled-components';
import {MdArrowForward,MdKeyboardArrowRight} from 'react-icons/md';

export const HeroContainer = styled.div
`
    background: #0c0c0c;
`    

export const HeroBg = styled.div`
    position:absolute;
`;

export const VideoBg = styled.video`
    width:100%;
    -o-object-fit:cover;

`;
export const HeroContent = styled.div`
    z-index : 3;
    max-width: 1200px;

`
export const HeroH1 = styled. h1`
    color:#fff;
    font-size: 48px;
    text-align:center;
`
export const HeroP= styled.p`
    margin-top: 24px;
    color:#fff;
`
export const HeroBtnWrapper = styled.div`

`
export const ArrowForward = styled(MdArrowForward)`

`
export const ArrowRight = styled(MdKeyboardArrowRight)`

`