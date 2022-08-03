
import { useRouter } from 'next/router';
import {HiStar} from 'react-icons/hi'

const ProductCard = ({imgName, title, price}) => {
  const img = require(`../public/${imgName}.png`);
  const router = useRouter()

  const handleOpen = () => {
    // todo
    router.push(`/product/${imgName}`)
  };
  return (
    <div 
      className='ui__productcard'
      onClick={handleOpen}
      >
      <img 
        src={img.default.src}
        alt={imgName}
        className='ui__productcard__image'
      />

      <div className="ui__productcard-backimg"></div>
      <span className="ui__productcard-title">
        {title}
      </span>
      <span className='ui__productcard-info'>
        ${price}
        <span>
          <HiStar />
          <HiStar />
          <HiStar />
        </span>
      </span>
    </div>
  )
}

export default ProductCard