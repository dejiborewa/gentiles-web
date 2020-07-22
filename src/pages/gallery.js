import React  from 'react'
import Nav from '../components/nav'
import Footer from '../components/contact'
import gallery1 from './images/gallery1.jpg'
import gallery2 from './images/gallery2.jpg'
import gallery3 from './images/gallery3.jpg'


export default function Gallery() {
    return (
        <div className='container-fluid'>
            <Nav />
            <GalleryImages />
            <Footer />
        </div>
    )
}

function GalleryImages() {
    return (
        <div className='full-gallery'>
            <img src={gallery1} alt='gallery1' />
            <img src={gallery2} alt='gallery2' />
            <img src={gallery3} alt='gallery3' />
        </div>
    )
}
