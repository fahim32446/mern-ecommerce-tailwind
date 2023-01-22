import React from 'react'
import Categories from '../../components/Categories/Categories'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Slider from '../../components/Slider/Slider'

const Home = () => {
  return (
    <div className='space-y-24'>
      
      <Slider />
      <FeaturedProducts type="featured"/>
      <Categories />
      <FeaturedProducts type="treading"/>

    </div>
  )
}

export default Home