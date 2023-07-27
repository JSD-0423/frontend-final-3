import React, { useEffect, useState } from "react";
import "./Home.css";
import HandPicked from "../../Components/HandPicked/HandPicked";
import NewArrivals from "../../Components/NewArrivals/NewArrivals";
import ShopByBrand from "../../Components/ShopByBrand/ShopByBrand";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Banner from "../../Components/Banner/Banner";
import { fetchData } from "../../Services/network";


//Dummy data
const collections = [
  { id: 1, title: 'Personal Care', imageSrc: 'https://cdn1.img.sputnikarabic.ae/img/103737/41/1037374157_0:100:1921:1180_600x0_80_0_0_5c139c2a519a6740ea979c29e4aa755e.jpg.webp' },
  { id: 2, title: 'Personal Care', imageSrc: 'https://cdn1.img.sputnikarabic.ae/img/103737/41/1037374157_0:100:1921:1180_600x0_80_0_0_5c139c2a519a6740ea979c29e4aa755e.jpg.webp' },
  { id: 3, title: 'Personal Care', imageSrc: 'https://cdn1.img.sputnikarabic.ae/img/103737/41/1037374157_0:100:1921:1180_600x0_80_0_0_5c139c2a519a6740ea979c29e4aa755e.jpg.webp' },
  { id: 4, title: 'Personal Care', imageSrc: 'https://cdn1.img.sputnikarabic.ae/img/103737/41/1037374157_0:100:1921:1180_600x0_80_0_0_5c139c2a519a6740ea979c29e4aa755e.jpg.webp' }
]

const brands=[
  {
    id:"1",
    name:"Zara",
    imgUrl:"./Assets/Zara-Logo.png"
  },  {
    id:"2",
    name:"Zara",
    imgUrl:"./Assets/Zara-Logo.png"
  },  {
    id:"3",
    name:"Zara",
    imgUrl:"./Assets/Zara-Logo.png"
  },  {
    id:"4",
    name:"Zara",
    imgUrl:"./Assets/Zara-Logo.png"
  }, {
    id:"5",
    name:"Zara",
    imgUrl:"./Assets/Zara-Logo.png"
  }, {
    id:"6",
    name:"Zara",
    imgUrl:"./Assets/Zara-Logo.png"
  }
]

function Home() {
  const [newArrivals,setNewArrivals] =useState([]);
  useEffect(()=>{
    
      const fetchNewArrivals=async()=>{

      const response=await fetchData('/products/new');

      setNewArrivals(response)
      }

      fetchNewArrivals(); 

  },[])

  return (
    <div>
      <HeroSection/>
      <NewArrivals products={newArrivals}/>
      <HandPicked headLine="Handpicked Collections" collections={collections} />
      <ShopByBrand brands={brands}/>
      <Banner fullWidthCardText={'Limited edition products'} halfWidthCard1Text={'15% off and more!'} halfWidthCard2Text={'Popular in the community!'}/>
    </div>
  );
}

export default Home;
