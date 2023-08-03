import React from 'react'
import HandPicked from "../../Components/HandPicked/HandPicked";
import NewArrivals from "../../Components/NewArrivals/NewArrivals";
import ShopByBrand from "../../Components/ShopByBrand/ShopByBrand";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Banner from "../../Components/Banner/Banner";
import { MobileSearchInput } from '../../Components/InputWithIcon/MobileSearchInput';

function Home() {

  return (
    <div>
      <MobileSearchInput/>
      <HeroSection />
      <NewArrivals />
      <HandPicked headLine="Handpicked Collections"/>
      <ShopByBrand linkToValue={''} />
      <Banner fullWidthCardText={'Limited edition products'} fullWidthCardLinkTo={'/products/limited'} halfWidthCard1Text={'15% off and more!'} halfWidthCard1LinkTo={'/products/discount'} halfWidthCard2Text={'Popular in the community!'} halfWidthCard2LinkTo={'/products/popular'} />
    </div>
  );
}

export default Home;
