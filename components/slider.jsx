import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
 

export default function slider() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
 const name = "vaishnavi"
const slider = (
  <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={100}
  >
    <div data-src="https://i.gadgets360cdn.com/large/noise_colorfit_pro_4_review_main_1659433865849.jpg" />
    <div data-src="https://5.imimg.com/data5/ANDROID/Default/2023/1/SH/SW/KI/135027494/product-jpeg-1000x1000.jpg" />
    <div data-src="https://cdn.shopify.com/s/files/1/1603/9553/collections/beta_banner_1200x630.png?v=1670065562" />
  </AutoplaySlider>
);
  return (
    <>
    {slider}
    </>

  )
}
