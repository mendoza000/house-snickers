import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"

const ExploreSection = () => {
  const [sneakers, setSneakers] = useState([])
  const getSneakers = async() => {
    const url = `${window.location.href}api/sneakers`
    const resp = await fetch(url)
    const data = await resp.json()
    setSneakers(data)
  }

  useEffect(() => {
    getSneakers()
  
    return () => {
      getSneakers = () => {}
    }
  }, [])
  

  return (
    <div className="home__section-container">
      {
        sneakers.map(e => {
          return (
            <ProductCard 
              imgName={e.imgName}
              title={e.title}
              price={e.price}
              key={e.imgName}
            />
          )
        })
      }
    </div>
  )
}

export default ExploreSection