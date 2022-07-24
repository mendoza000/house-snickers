import Image from 'next/image'
import {HiStar} from 'react-icons/hi'

const ProductCard = ({imgName, title, price}) => {

  const img = require(`../public/${imgName}.png`);
  return (
    <div className='ui__productcard'>
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