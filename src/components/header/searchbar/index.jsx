import { searchIcon } from '../../../assets/index'

const SearchBar = () => {
  return (
    <form className="relative w-100 custom-lg:w-64">
    <span className="absolute inset-y-0 left-0 flex items-center pl-5 pr-1">
     <img className='text-gray-500 h-4 w-4' src={searchIcon}/>
    </span>
    <input type="text" className="w-full pl-11 pr-4 py-3.5 border-none rounded-full focus:outline-none focus:ring-2 focus:ring-pink-100 placeholder:text-gray-500" placeholder="Search..."/>
  </form>
  
  )
}

export default SearchBar