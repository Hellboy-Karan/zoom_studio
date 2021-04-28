import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-mainbg">
                <a class="navbar-brand navbar-logo" href="/"> Zoom <i className='fas fa-video'></i></a>
                <button
                    class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars text-white"></i>
                </button>

                <div
                    class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/">
                                <i class="fas fa-home"></i>Home
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="/about">
                                <i class="far fa-clone"></i>About
                            </a>
                        </li>
                        <li class="nav-item">
                            <a  class="nav-link" href="/gallery">
                                <i class="far fa-calendar-alt"></i>Gallery
                            </a>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
