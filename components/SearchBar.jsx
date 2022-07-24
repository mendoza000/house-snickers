import {HiOutlineSearch} from 'react-icons/hi'

const SearchBar = () => {
  return (
    <form className='ui__searchbar'>
      <input
        type='text'
        placeholder='e.g Nike Air Jordan'
      />
      
      <button>
        <HiOutlineSearch />
      </button>
    </form>
  )
}

export default SearchBar