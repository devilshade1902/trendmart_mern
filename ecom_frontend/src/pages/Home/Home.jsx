import React from 'react'
import Hero from '../../components/Hero/Hero'
import TopSelling from '../../components/top_selling/TopSelling'
import New_Arrivals from '../../components/new_arrivals/New_Arrivals'
import hero1 from '../../assets/hero1.png'
import hero2 from '../../assets/hero2.png'
import hero3 from '../../assets/hero3.png'
import limited2 from '../../assets/limited.png'

const Home = () => {
  const images = [
    { id:1,image: hero1, alt: 'Woman with handbag and glasses', tagline: 'Everything You Need\nStyled to Impress' },
    { id:2,image: hero2, alt: 'Fashion accessories', tagline: 'Track Your Day\nTrend Your Way' },
    { id:3,image: hero3, alt: 'Trendy clothing', tagline: 'Your World of Shopping All in One Place' }
  ];

  const images2 =[
    {id:4,image:limited2, tagline:"Limited-Time Offer\nGrab Your Favorites Before They're Gone"},
    // {image:null, tagline:"Limited-Time Offer\nGrab Your Favorites Before They're Gone"},
  ] 
  return (
    <div>
      <Hero images = {images}/>
      <TopSelling/>
      <hr />
      <New_Arrivals/>
      <Hero images = {images2} />
    </div>
  )
}

export default Home
