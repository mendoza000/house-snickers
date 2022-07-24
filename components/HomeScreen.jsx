import React from 'react'
import CategoriesSelector from './CategoriesSelector'
import ExploreSection from './ExploreSection'
import Navbar from './Navbar'
import SearchBar from './SearchBar'

const HomeScreen = () => {
  return (
    <div className="animate__animated animate__fadeIn animated__faster">
      <Navbar />
      
      <div className="home__container">
        <h1 className="home__title">
          House Sneakers
        </h1>

        <SearchBar />
        <CategoriesSelector />

        <ExploreSection />
      </div>

    </div>
  )
}

export default HomeScreen