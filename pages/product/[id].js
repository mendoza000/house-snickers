import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { HiChevronLeft, HiOutlineShoppingBag } from 'react-icons/hi'
import { useSelector } from 'react-redux';

// TODO: Volver a activar el splash
const product = () => {
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

  
  
  return (
    <div className='animate__animated animate__slideInUp ui__container'>
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
      <img 
        src={img?.default?.src}
        alt={id}
        className='product__img'
      />
      {product?.title}
    </div>
  )
}

export default product