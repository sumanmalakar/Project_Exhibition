import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
 

export default function slider() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const name = "vaishnavi";

const slider = (
  <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={2000}
    buttons={true}
  >
    <div data-src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/31/img22/Wireless/Meghana/iQOO/ChangeZ7/NoOffer/NewLaunch/D74387056_WLD---iQOO-Z7-5G--BAU---Design-SIM_1400x800Rev._CB592496396_.jpg" />
    <div data-src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/31/img23/Wireless/ssserene/Larry/GW/23rdMar/D75734134_WLD_OnePlus_Larry_NewLaunch_1400x800new._CB594433967_.jpg" />
    <div data-src="https://cdn.shopify.com/s/files/1/1603/9553/collections/beta_banner_1200x630.png?v=1670065562" />
  </AutoplaySlider>
);
  return (
    <>
    {slider}
    </>

  )
}
