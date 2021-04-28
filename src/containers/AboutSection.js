import React from 'react';
import { Link } from 'react-router-dom';
import './AboutSection.css';

const AboutSection = (
    {
        lightBg,
        topLine,
        lightText,
        lightTextDesc,
        headline,
        description,
        buttonLabel,
        img,
        alt,
        imgStart
    }) => {
    return (
        <>
            <div className={lightBg ? 'about__about-section' : 'about__about-section darkBg'}>
                <div className='container'>
                    <div className='row about__about-row' style={{ display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }}>
                        <div className='col'>
                            <div className='about__about-text-wrapper'>
                                <div className='top-line'>{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                <p className={lightTextDesc ? 'about__about-subtitle' : 'about__about-subtitle dark'} >
                                    {description}
                                </p>
                                <Link to='/' >
                                    <button type='submit' className='btn'>{buttonLabel}</button>
                                </Link>

                            </div>
                        </div>
                        <div className='col'>
                            <div className="about__about-img-wrapper">
                                <img src={img} alt={alt} className="about__about-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection
