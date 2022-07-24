import Link from 'next/link'
import { useRouter } from 'next/router'
import {HiOutlineBell, HiOutlineHeart, HiOutlineHome, HiOutlineShoppingBag} from 'react-icons/hi'

const Navbar = () => {
  const router = useRouter()

  return (
    <nav className="ui__nav">
      <ul className="ui__nav-list">
        <li className={`ui__nav-item ${
          (router.pathname == '/')
          ? "ui__nav-item-active"
          : ""
        }`}>
          <Link href={'/'}>
            <a>
              <HiOutlineHome />
            </a>
          </Link>
        </li>

        <li className={`ui__nav-item ${
          (router.pathname == '/fav')
          ? "ui__nav-item-active"
          : ""
        }`}>
          <Link href={'/fav'}>
            <a>
              <HiOutlineHeart />
            </a>
          </Link>
        </li>

        <li className={`ui__nav-item ${
          (router.pathname == '/notifications')
          ? "ui__nav-item-active"
          : ""
        }`}>
          <Link href={'/notifications'}>
            <a>
              <HiOutlineBell />
            </a>
          </Link>
        </li>

        <li className={`ui__nav-item ${
          (router.pathname == '/shop')
          ? "ui__nav-item-active"
          : ""
        }`}>
          <Link href={'/shop'}>
            <a>
              <HiOutlineShoppingBag />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar