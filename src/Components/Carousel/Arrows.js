import React from 'react';


const Arrows = (props) => {
    return (
        <>
            <div className='arrows'>
                <span className='prev' onClick={props.prevSlide}>
                    &#10094;
                </span>
                <span className='next' onClick={props.nextSlide}>
                    &#10095;
                </span>
            </div>
        </>
    )
}

export default Arrows
