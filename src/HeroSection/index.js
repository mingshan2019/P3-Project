import React,{useState} from 'react'
import Video from '.././videos/video.mp4';
import { HeroContainer,HeroBg,VideoBg,HeroH1,HeroP,HeroBtnWrapper,HeroContent,ArrowForward,ArrowRight} from './HeroElements'
import { Button } from '../components/ButtonElement';
const HeroSection = () => {

    const [hover, setHover] = useState(false);
    const onHover= ()=>{
        setHover(!hover);
    };
  return (
    
    /* <video loop autoPlay>
      <source
        src="../../videos/video.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video> */

    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
    <HeroContent>
        <HeroP>Sign up for a new opportunity to get connected</HeroP>
        <HeroH1>LinkHub Made Easy</HeroH1>    
        <HeroBtnWrapper>
        <Button to='signup'>Get Started {hover ? <ArrowForward/>:<ArrowRight/>}
        </Button>
        </HeroBtnWrapper>
    </HeroContent>

    </HeroContainer> 

  );
};

export default HeroSection