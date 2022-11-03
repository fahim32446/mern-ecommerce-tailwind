import React from 'react'
import NavMenu from '../comp/NavMenu'
import HeroSection from '../comp/HeroSection'
import Product from '../comp/Product'
import NewsLatter from '../comp/NewsLatter'
import Footer from '../comp/Footer'
import Categories from '../comp/Categories'
import FeaturedItem from '../comp/FeaturedItem'

const HomePage = () => {

    return (
        <>

            <HeroSection />
            <FeaturedItem/>
            <Product />
            <Categories />
            <NewsLatter />
            <Footer />
        </>
    )
}

export default HomePage