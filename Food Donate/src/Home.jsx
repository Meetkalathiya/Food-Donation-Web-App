/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import NavigationBar from './component/Navbar';
import ImageSlider from './ImageSlider';
import DonationButton from './DonationButton';
import Footer from './Footer';
function Home(){
    return(
        <>
            <NavigationBar/>
            <ImageSlider/>
            <DonationButton/>
            <Footer/>
        </>
    )
}

export default Home;
