import React from 'react';
import Footer from '../Components/footer';
import './footer.css';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <a href='/about'  className='ahref'><Footer.Title><i class="far fa-clone"></i> About Us</Footer.Title></a>
                        <a href='/gallery' className='ahref'><Footer.Title><i class="far fa-calendar-alt"></i> Gallery</Footer.Title></a>
                        <a href='/testimonial'  className='ahref'><Footer.Title><i class="far fa-chart-bar"> </i> Testimonial</Footer.Title></a>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Follow Me</Footer.Title>
                        <div className='row'>
                            <a href="https://www.facebook.com/suraj.sharma.334/"><Footer.RowWay><i class="fab fa-facebook"></i></Footer.RowWay></a>
                            <a href="https://www.instagram.com/karansharma"><Footer.RowWay><i class="fab fa-instagram"> </i></Footer.RowWay></a>
                            <a href="https://www.linkedin.com/"><Footer.RowWay><i class="fab fa-linkedin"> </i></Footer.RowWay></a>
                        </div>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}
