import React from 'react'
import AboutSection from '../../containers/AboutSection';
import {homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from './Data';

const About = () => {
    return (
        <>
           <AboutSection {...homeObjOne} />
           <AboutSection {...homeObjTwo} />
           <AboutSection {...homeObjThree} />
           <AboutSection {...homeObjFour} />
        </>
    )
}

export default About
