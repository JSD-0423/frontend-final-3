import React, { useEffect, useState } from 'react'
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

const products = [
  {

    id: '1',
    name: 'Grande',
    descripton: 'Leather Coach Bag with adjustable starps.',
    brand: 'Blossom Pouch',
    price: {
      current: '39.49',
      actual: "78.66",
      discountPercentage: '50'
    },
    rating: "4",
    totoalRatings: '43',

    imgUrl: './Assets/laura-chouette-Atomp7YdMaE-unsplash 1.png',
    fullDescription: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, magnam fuga harum ab aliquid facilis quo accusantium nemo reiciendis rem eaque obcaecati, culpa aliquam illum numquam blanditiis, inventore amet repellendus!"

  }, {

    id: '2',
    name: 'Grande',
    descripton: 'Leather Coach Bag with adjustable starps.',
    brand: 'Blossom Pouch',
    price: {
      current: '39.49',
      actual: "78.66",
      discountPercentage: '50'
    },
    rating: "4",
    totoalRatings: '43',

    imgUrl: './Assets/laura-chouette-Atomp7YdMaE-unsplash 1.png',
    fullDescription: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, magnam fuga harum ab aliquid facilis quo accusantium nemo reiciendis rem eaque obcaecati, culpa aliquam illum numquam blanditiis, inventore amet repellendus!"

  }, {

    id: '3',
    name: 'Grande',
    descripton: 'Leather Coach Bag with adjustable starps.',
    brand: 'Blossom Pouch',
    price: {
      current: '39.49',
      actual: "78.66",
      discountPercentage: '50'
    },
    rating: "4",
    totoalRatings: '43',

    imgUrl: './Assets/laura-chouette-Atomp7YdMaE-unsplash 1.png',
    fullDescription: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, magnam fuga harum ab aliquid facilis quo accusantium nemo reiciendis rem eaque obcaecati, culpa aliquam illum numquam blanditiis, inventore amet repellendus!"

  }, {

    id: '4',
    name: 'Grande',
    descripton: 'Leather Coach Bag with adjustable starps.',
    brand: 'Blossom Pouch',
    price: {
      current: '39.49',
      actual: "78.66",
      discountPercentage: '50'
    },
    rating: "4",
    totoalRatings: '43',

    imgUrl: './Assets/laura-chouette-Atomp7YdMaE-unsplash 1.png',
    fullDescription: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, magnam fuga harum ab aliquid facilis quo accusantium nemo reiciendis rem eaque obcaecati, culpa aliquam illum numquam blanditiis, inventore amet repellendus!"

  }, {

    id: '5',
    name: 'Grande',
    descripton: 'Leather Coach Bag with adjustable starps.',
    brand: 'Blossom Pouch',
    price: {
      current: '39.49',
      actual: "78.66",
      discountPercentage: '50'
    },
    rating: "4",
    totoalRatings: '43',

    imgUrl: './Assets/laura-chouette-Atomp7YdMaE-unsplash 1.png',
    fullDescription: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, magnam fuga harum ab aliquid facilis quo accusantium nemo reiciendis rem eaque obcaecati, culpa aliquam illum numquam blanditiis, inventore amet repellendus!"

  }, {

    id: '6',
    name: 'Grande',
    descripton: 'Leather Coach Bag with adjustable starps.',
    brand: 'Blossom Pouch',
    price: {
      current: '39.49',
      actual: "78.66",
      discountPercentage: '50'
    },
    rating: "4",
    totoalRatings: '43',

    imgUrl: './Assets/laura-chouette-Atomp7YdMaE-unsplash 1.png',
    fullDescription: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, magnam fuga harum ab aliquid facilis quo accusantium nemo reiciendis rem eaque obcaecati, culpa aliquam illum numquam blanditiis, inventore amet repellendus!"

  }, {

    id: '7',
    name: 'Grande',
    descripton: 'Leather Coach Bag with adjustable starps.',
    brand: 'Blossom Pouch',
    price: {
      current: '39.49',
      actual: "78.66",
      discountPercentage: '50'
    },
    rating: "4",
    totoalRatings: '43',

    imgUrl: './Assets/laura-chouette-Atomp7YdMaE-unsplash 1.png',
    fullDescription: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, magnam fuga harum ab aliquid facilis quo accusantium nemo reiciendis rem eaque obcaecati, culpa aliquam illum numquam blanditiis, inventore amet repellendus!"

  }
];

function Home() {
  const [brands, setBrands] = useState();

    useEffect(() => {
        const fetchDataAsync = async () => {
            try {
                const result = await fetchData(`https://store-osn9.onrender.com/brands`);
                setBrands(result);
            } catch (error) {
                console.error(error);
            }
        }
        fetchDataAsync();
    }, [])

  return (
    <div>
      <HeroSection />
      <NewArrivals products={products} />
      <HandPicked headLine="Handpicked Collections" collections={collections} />
      <ShopByBrand brands={brands} linkToValue={'products/brands/'} />
      <Banner fullWidthCardText={'Limited edition products'} fullWidthCardLinkTo={'/products/limited'} halfWidthCard1Text={'15% off and more!'} halfWidthCard1LinkTo={'products'} halfWidthCard2Text={'Popular in the community!'} halfWidthCard2LinkTo={'/products/popular'}/>
    </div>
  );
}

export default Home;
