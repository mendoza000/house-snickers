import { useSelector } from "react-redux"
import ProductCard from "./ProductCard"

const ExploreSection = () => {
  const {sneakers} = useSelector(state => state.products)
  
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