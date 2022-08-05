import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { HiChevronLeft, HiOutlineShoppingBag, HiStar, HiOutlineHeart} from 'react-icons/hi'
import { useSelector } from 'react-redux';

// TODO: Volver a activar el splash
const Product = () => {
  const [product, setProduct] = useState({})
  const [img, setImg] = useState({})
  const router = useRouter();
  const {id} = router.query
  const {sneakers} = useSelector(state => state.products)

  useEffect(() => {
    setImg(require(`../../public/${
      (id !== undefined)
      ? id
      : "pegasus"
    }-open.png`))
  }, [id])
  useEffect(() => {
    const nav = document.querySelector('.ui__nav')
    nav.style.display = 'none'
  }, [])
  useEffect(() => {
    setProduct(sneakers.filter(e => e.imgName == id)[0])
  }, [sneakers])
  

  const handleReturn = () => {
    router.push('/')
  }
  const handleAddFav = () => {

  }
  
  return (
    <div className='animate__animated animate__slideInUp ui__container product__container'>
      <header className='product__header'>
        <HiChevronLeft 
          className='product__header-icon'
          onClick={handleReturn}
        />
        <h1 className='product__header-title'>
          Purchase
        </h1>
        <HiOutlineShoppingBag className='product__header-icon'/>
      </header>
      
      <div className="product__content">
        <div className="product__content-img">
          <div className="product__content-img-bg"></div>
          <img 
            src={img?.default?.src}
            alt={id}
            className='product__img'
          />
        </div>
        <h2 className='product__title'>
          <span>
            Nike {product?.title}
          </span>

          <button onClick={handleAddFav}>
            <HiOutlineHeart />
          </button>
        </h2>
        <p className="product__description">
          {product?.description}
        </p>
 
        <div className="product__info">
          <span className="product__price">
            ${product?.price}
          </span>

          <div className="product__score">
            <HiStar />
            <HiStar />
            <HiStar />
            <HiStar />
            <HiStar />
          </div>
        </div>
      </div>

      <button className="product__add">
        Add to cart
        <HiOutlineShoppingBag />
      </button>
    </div>
  )
}

export default Product