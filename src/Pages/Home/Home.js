import React from "react";
import "./Home.css";
import HandPicked from "../../Components/HandPicked/HandPicked";
import {TitledContainerWithButton} from "../../Components/TitledContainerWithButton/TitledContainerWithButton";
import {CardsCarousel} from "../../Components/Cards/CardsCarousel/CardsCarousel";
import { ProductCard } from "../../Components/Cards/ProductCard/ProductCard";
import { BrandCard } from "../../Components/Cards/BrandCard/BrandCard";
import Banner from "../../Components/Banner/Banner";

//Dummy data
const collections = [
  { id: 1, title: 'Personal Care', imageSrc: 'https://cdn1.img.sputnikarabic.ae/img/103737/41/1037374157_0:100:1921:1180_600x0_80_0_0_5c139c2a519a6740ea979c29e4aa755e.jpg.webp' },
  { id: 2, title: 'Personal Care', imageSrc: 'https://cdn1.img.sputnikarabic.ae/img/103737/41/1037374157_0:100:1921:1180_600x0_80_0_0_5c139c2a519a6740ea979c29e4aa755e.jpg.webp' },
  { id: 3, title: 'Personal Care', imageSrc: 'https://cdn1.img.sputnikarabic.ae/img/103737/41/1037374157_0:100:1921:1180_600x0_80_0_0_5c139c2a519a6740ea979c29e4aa755e.jpg.webp' },
  { id: 4, title: 'Personal Care', imageSrc: 'https://cdn1.img.sputnikarabic.ae/img/103737/41/1037374157_0:100:1921:1180_600x0_80_0_0_5c139c2a519a6740ea979c29e4aa755e.jpg.webp' }
]

const products=[
  {

    id:'1',
    name:'Grande',
    descripton:'Leather Coach Bag with adjustable starps.',
    brand:'Blossom Pouch',
    price:{
      current:'39.49',
      actual:"78.66",
      discountPercentage:'50'
    },
    rating:"4",
    totoalRatings:'43',

  imgUrl:'./Assets/laura-chouette-Atomp7YdMaE-unsplash 1.png',
  fullDescription:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, magnam fuga harum ab aliquid facilis quo accusantium nemo reiciendis rem eaque obcaecati, culpa aliquam illum numquam blanditiis, inventore amet repellendus!"
   
  },  {

    id:'2',
    name:'Grande',
    descripton:'Leather Coach Bag with adjustable starps.',
    brand:'Blossom Pouch',
    price:{
      current:'39.49',
      actual:"78.66",
      discountPercentage:'50'
    },
    rating:"4",
    totoalRatings:'43',

  imgUrl:'./Assets/laura-chouette-Atomp7YdMaE-unsplash 1.png',
  fullDescription:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, magnam fuga harum ab aliquid facilis quo accusantium nemo reiciendis rem eaque obcaecati, culpa aliquam illum numquam blanditiis, inventore amet repellendus!"
   
  },  {

    id:'3',
    name:'Grande',
    descripton:'Leather Coach Bag with adjustable starps.',
    brand:'Blossom Pouch',
    price:{
      current:'39.49',
      actual:"78.66",
      discountPercentage:'50'
    },
    rating:"4",
    totoalRatings:'43',

  imgUrl:'./Assets/laura-chouette-Atomp7YdMaE-unsplash 1.png',
  fullDescription:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, magnam fuga harum ab aliquid facilis quo accusantium nemo reiciendis rem eaque obcaecati, culpa aliquam illum numquam blanditiis, inventore amet repellendus!"
   
  },  {

    id:'4',
    name:'Grande',
    descripton:'Leather Coach Bag with adjustable starps.',
    brand:'Blossom Pouch',
    price:{
      current:'39.49',
      actual:"78.66",
      discountPercentage:'50'
    },
    rating:"4",
    totoalRatings:'43',

  imgUrl:'./Assets/laura-chouette-Atomp7YdMaE-unsplash 1.png',
  fullDescription:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, magnam fuga harum ab aliquid facilis quo accusantium nemo reiciendis rem eaque obcaecati, culpa aliquam illum numquam blanditiis, inventore amet repellendus!"
   
  }
];
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
  }
]
function Home() {
  return (
    <div>
      <Banner/>
      <TitledContainerWithButton  containerTitle="New Arrivals" buttonTitle={"View All"} >
          <CardsCarousel>
          { products.map(product => (<ProductCard product={product} key={product.id}></ProductCard>))}
          </CardsCarousel>
      </TitledContainerWithButton>


      <TitledContainerWithButton  containerTitle="Shop By Brands">
          <CardsCarousel>
          { brands.map(brand => (<BrandCard brand={brand} key={brand.id}></BrandCard>))}
          </CardsCarousel>
      </TitledContainerWithButton>

      
      <HandPicked headLine="Handpicked Collections" collections={collections} />
    </div>
  );
}

export default Home;
