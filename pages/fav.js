import ProductCard from '@components/ProductCard'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const fav = () => {
  const {products, favorites} = useSelector(state => state)
  const {sneakers} = products 
  const {favs} = favorites

  useEffect(() => {
    const nav = document.querySelector('.ui__nav')
    nav.style.display = ''
  }, [])

  return (
    <div className='animate__animated animate__fadeIn animate__faster ui__container'>
      <h1 className='ui__title'>
        Favorites
      </h1>

      <div className="fav__content">
        {
          sneakers.map(e => {
            if (favs.includes(e.imgName)) {
              return (
                <ProductCard 
                  imgName={e.imgName}
                  title={e.title}
                  price={e.price}
                  key={e.imgName}
                />
              )
            }
          })
        }
      </div>
    </div>
  )
}

export default fav