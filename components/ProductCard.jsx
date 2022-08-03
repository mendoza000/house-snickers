
import Image from 'next/image';
import { useRouter } from 'next/router';
import {HiStar} from 'react-icons/hi'

const ProductCard = ({imgName, title, price}) => {
  const img = require(`../public/${imgName}.png`);
  const router = useRouter()

  const handleOpen = () => {
    router.push(`/product/${imgName}`)
  };
  return (
    <div 
      className='ui__productcard'
      onClick={handleOpen}
      >
      <Image 
        src={img.default.src}
        alt={imgName}
        className='ui__productcard__image'
        width={"130"}
        height={"130"}
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