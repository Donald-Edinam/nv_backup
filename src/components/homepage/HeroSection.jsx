import React from 'react'
import Slider from 'react-slick'
import ImgBasket from '../../assets/basket.jpg'


const HeroSection = () => {

  return (
    <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={ImgBasket} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Your Ghanaian Products At Your FingerTips</h1>
        <p class="lead">Start Exploring the diverse range of items you need to expose Ghana to the diaspora.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
            <a href="#lists" className='text-decoration-none text-white'>Shop Now</a>
          </button>
          {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button> */}
        </div>
      </div>
    </div>
  </div>
  )
}

export default HeroSection
