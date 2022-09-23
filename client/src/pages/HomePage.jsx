import React from 'react'
import NavMenu from '../comp/NavMenu'
import HeroSection from '../comp/HeroSection'
import Product from '../comp/Product'
import NewsLatter from '../comp/NewsLatter'
import Footer from '../comp/Footer'



const HomePage = () => {

    return (
        <>
            
            <HeroSection />
            <Product />
            <NewsLatter />
            <Footer />
        </>
    )
}

export default HomePage