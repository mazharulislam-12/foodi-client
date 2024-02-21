import React from 'react'
import Banner from '../../component/Banner'
import Categories from './Categories'
import SpecialDishes from './SpecialDishes'

export const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <SpecialDishes></SpecialDishes>
        </div>
    )
}
