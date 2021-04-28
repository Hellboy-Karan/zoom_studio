import React, { useState } from 'react';
import './GallerySection.css';

const GallerySection = () => {
    const [show, setShow] = useState(true);
    return (
        <>
            <div className="gallery-button">
                <div className="button-wrapper">
                    <button className="button" onClick={() => setShow(true)}>Photo</button>
                    <button className="button" onClick={() => setShow(false)}>Video</button>
                </div>
            </div>
            {
                show ?
                    <div className='gallery-container'>
                        <div className="gallery-wrapper">
                            <div className='gallery-row'>
                                <a href="#1" className='gallery-a-effect'>
                                    <div className='gallery-col'>
                                        <div className='card'>
                                            <strong>PHOTO</strong>
                                            <h1>1</h1>
                                            <div>Footer</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#2" className='gallery-a-effect'>
                                    <div className='gallery-col'>
                                        <div className='card'>
                                            <strong>PHOTO</strong>
                                            <h1>2</h1>
                                            <div>Footer</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#3" className='gallery-a-effect'>
                                    <div className='gallery-col'>
                                        <div className='card'>
                                            <strong>PHOTO</strong>
                                            <h1>3</h1>
                                            <div>Footer</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#4" className='gallery-a-effect'>
                                    <div className='gallery-col'>
                                        <div className='card'>
                                            <strong>PHOTO</strong>
                                            <h1>4</h1>
                                            <div>Footer</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#5" className='gallery-a-effect'>
                                    <div className='gallery-col'>
                                        <div className='card'>
                                            <strong>PHOTO</strong>
                                            <h1>5</h1>
                                            <div>Footer</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#6" className='gallery-a-effect'>
                                    <div className='gallery-col'>
                                        <div className='card'>
                                            <strong>PHOTO</strong>
                                            <h1>6</h1>
                                            <div>Footer</div>
                                        </div>
                                    </div>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                    :
                    <div className='gallery-container'>
                        <div className="gallery-wrapper">
                            <div className='gallery-row'>
                            <a href="#1" className='gallery-a-effect'>
                                    <div className='gallery-col'>
                                        <div className='card'>
                                            <strong>VIDEO</strong>
                                            <h1>1</h1>
                                            <div>Footer</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#2" className='gallery-a-effect'>
                                    <div className='gallery-col'>
                                        <div className='card'>
                                            <strong>VIDEO</strong>
                                            <h1>2</h1>
                                            <div>Footer</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#3" className='gallery-a-effect'>
                                    <div className='gallery-col'>
                                        <div className='card'>
                                            <strong>VIDEO</strong>
                                            <h1>3</h1>
                                            <div>Footer</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#4" className='gallery-a-effect'>
                                    <div className='gallery-col'>
                                        <div className='card'>
                                            <strong>VIDEO</strong>
                                            <h1>4</h1>
                                            <div>Footer</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#5" className='gallery-a-effect'>
                                    <div className='gallery-col'>
                                        <div className='card'>
                                            <strong>VIDEO</strong>
                                            <h1>5</h1>
                                            <div>Footer</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#6" className='gallery-a-effect'>
                                    <div className='gallery-col'>
                                        <div className='card'>
                                            <strong>VIDEO</strong>
                                            <h1>6</h1>
                                            <div>Footer</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#7" className='gallery-a-effect'>
                                    <div className='gallery-col'>
                                        <div className='card'>
                                            <strong>VIDEO</strong>
                                            <h1>7</h1>
                                            <div>Footer</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default GallerySection
