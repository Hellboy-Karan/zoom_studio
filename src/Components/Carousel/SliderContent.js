import React from 'react';
import SliderImage from './SliderImage';

const SliderContent = (props) => {
    return (
        <>
            <section>
                {SliderImage.map((slide, index) => (
                    <div
                        key={index}
                        className={index === props.activeIndex ? 'slides active' : 'inactive'}>
                        <img className='slide-image' src={slide.urls} alt={slide.alt} />
                        <h3 className='slide-title'> {slide.title}</h3>
                        <p className='slide-text'>{slide.description}</p>
                    </div>
                ))}
            </section>
        </>
    )
}

export default SliderContent
