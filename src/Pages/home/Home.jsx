import React from 'react'
import Banner from '../../component/Banner'
import Categories from './Categories'
import SpecialDishes from './SpecialDishes'
import Testomonials from './Testomonials'

export const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <SpecialDishes></SpecialDishes>
            <Testomonials></Testomonials>
        </div>
    )
}
