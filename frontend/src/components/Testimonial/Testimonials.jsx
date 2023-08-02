import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {
   const settings = {
      dots:true,
      infinite:true,
      autoplay:true,
      speed:1000,
      swipeToSlide:true,
      autoplaySpeed:2000,
      slidesToShow:3,

      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
         }
      ]
   }

   return <Slider {...settings}>
      

      <div className="testimonial py-4 px-3">
         <p>Good Website to book tours and travels.
         The holiday of a life time - our gulet adventure in the Dodecanese Greek Islands was without a doubt our favourite family trip. The comfort and beauty of the gulet, the incredibly caring crew, the delicious food, the history we learned from our competent and friendly leader, along with the stunning beauty of the islands. Swimming in the most gorgeous coves, kayaking on crystal blue waters, hiking around ruins and into small remote villages and relaxing on the boat... it was the best trip ever.
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Priya Raj</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p>Got the tour services at a very cheap rate! The holiday of a life time - our gulet adventure in the Dodecanese Greek Islands was without a doubt our favourite family trip. The comfort and beauty of the gulet, the incredibly caring crew, the delicious food, the history we learned from our competent and friendly leader, along with the stunning beauty of the islands. Swimming in the most gorgeous coves, kayaking on crystal blue waters, hiking around ruins and into small remote villages and relaxing on the boat... it was the best trip ever.
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Kamlesh Bhatia</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p>
            Helped me to easily pick my required travel consumptions. The holiday of a life time - our gulet adventure in the Dodecanese Greek Islands was without a doubt our favourite family trip. The comfort and beauty of the gulet, the incredibly caring crew, the delicious food, the history we learned from our competent and friendly leader, along with the stunning beauty of the islands. Swimming in the most gorgeous coves, kayaking on crystal blue waters, hiking around ruins and into small remote villages and relaxing on the boat... it was the best trip ever.
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Kamlesh Bhatia</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>
   </Slider>
}

export default Testimonials