import React from 'react'
import "./Home.css";
import HandPicked from "../../Components/HandPicked/HandPicked";
import NewArrivals from "../../Components/NewArrivals/NewArrivals";
import ShopByBrand from "../../Components/ShopByBrand/ShopByBrand";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Banner from "../../Components/Banner/Banner";

//Dummy data
const collections = [
  { id: 1, title: 'Personal Care', imageSrc: 'https://cdn1.img.sputnikarabic.ae/img/103737/41/1037374157_0:100:1921:1180_600x0_80_0_0_5c139c2a519a6740ea979c29e4aa755e.jpg.webp' },
  { id: 2, title: 'Personal Care', imageSrc: 'https://cdn1.img.sputnikarabic.ae/img/103737/41/1037374157_0:100:1921:1180_600x0_80_0_0_5c139c2a519a6740ea979c29e4aa755e.jpg.webp' },
  { id: 3, title: 'Personal Care', imageSrc: 'https://cdn1.img.sputnikarabic.ae/img/103737/41/1037374157_0:100:1921:1180_600x0_80_0_0_5c139c2a519a6740ea979c29e4aa755e.jpg.webp' },
  { id: 4, title: 'Personal Care', imageSrc: 'https://cdn1.img.sputnikarabic.ae/img/103737/41/1037374157_0:100:1921:1180_600x0_80_0_0_5c139c2a519a6740ea979c29e4aa755e.jpg.webp' }
]


function Home() {

  return (
    <div>
      <HeroSection />
      <NewArrivals />
      <HandPicked headLine="Handpicked Collections" collections={collections} />
      <ShopByBrand linkToValue={''} />
      <Banner fullWidthCardText={'Limited edition products'} fullWidthCardLinkTo={'/products/limited'} halfWidthCard1Text={'15% off and more!'} halfWidthCard1LinkTo={'/products/discount'} halfWidthCard2Text={'Popular in the community!'} halfWidthCard2LinkTo={'/products/popular'} />
    </div>
  );
}

export default Home;
