import { useEffect } from 'react'
import CategoriesSelector from './CategoriesSelector'
import ExploreSection from './ExploreSection'
import SearchBar from './SearchBar'

const HomeScreen = () => {

  useEffect(() => {
    const nav = document.querySelector('.ui__nav')
    nav.style.display = ''
  }, [])
  

  return (
    <div className="animate__animated animate__fadeIn animated__faster">
    
      <div className="ui__container">
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