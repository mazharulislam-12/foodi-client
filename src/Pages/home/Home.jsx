import React from 'react'
import Banner from '../../component/Banner'
import Categories from './Categories'
import SpecialDishes from './SpecialDishes'
import Testomonials from './Testomonials'
import OurServices from './OurServices'
import Footer from '../../component/Footer'

export const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <SpecialDishes></SpecialDishes>
            <Testomonials></Testomonials>
            <OurServices></OurServices>
        </div>
    )
}
