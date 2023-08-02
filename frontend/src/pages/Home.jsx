import React from 'react'
import '../styles/home.css'
import { Container, Row, Col, CardSubtitle } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'

import Subtitle from './../shared/subtitle'
import SearchBar from './../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'

const Home = () => {
   return <>
      {/* ========== HERO SECTION ========== */}
      <section>
         <Container>
            <Row>
               <Col lg='6'>
                  <div className="hero__content">
                     <div className="hero__subtitle d-flex align-items-center">
                        <Subtitle subtitle={'Book in a Click'} />
                        <p>Travelnex</p>
                     </div>
                     <h1>Travel Booking <span className='hightlight'> Management System</span></h1>
                     <p>
                        This is a travel booking system that helps users to book tours and travel services along with managing those accordingly.
                     </p>
                  </div>
               </Col>
               <Col lg='6'>
               <div className="experience__img">
                     <img src={experienceImg} alt="" />
                  </div>
                  </Col>
               {/* <Col lg='2'>
                  <div className="hero__img-box">
                     <img src={heroImg} alt="" />
                  </div>
               </Col>
               <Col lg='2'>
                  <div className="hero__img-box hero__video-box mt-4">
                     <video src={heroVideo} alt="" controls />
                  </div>
               </Col>
               <Col lg='2'>
                  <div className="hero__img-box mt-5">
                     <img src={heroImg02} alt="" />
                  </div>
               </Col> */}

               <SearchBar />
            </Row>
         </Container>
      </section>
      {/* ============================================================== */}

      {/* ==================== HERO SECTION START ====================== */}
      


      {/* ========== GALLERY SECTION START ============== */}
      <section>
         <Container>
            <Row>
               <Col lg='12'>
                  <Subtitle subtitle={'Gallery'} />
                  <h2 className="gallery__title">Visit our customer's tour gallery</h2>
               </Col>
               <Col lg='12'>
                  <MasonryImagesGallery />
               </Col>
            </Row>
         </Container>
      </section>
      <section>
         <Container>
            <Row>
               <Col lg='12'>
                  <Subtitle subtitle={'Customer Review'} />
                  <h2 className="testimonial__title">What our customers have to say about us</h2>
               </Col>
               <Col lg='12'>
                  <Testimonials />
               </Col>
            </Row>
         </Container>
      </section>
      {/* ========== TESTIMONIAL SECTION END ================== */}
      
   </>
}

export default Home