import {logo, searchIcon} from "../../assets/index"
import SearchBar from '../searchbar'
import TextButton from '../textbutton'
import RoundedButton from '../roundedbutton'
import { IoChevronDown } from "react-icons/io5";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, setUserFromLocalStorage } from "../../redux/authSlice";

const Navbar = () => {

    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    useLayoutEffect(()=>{
        dispatch(setUserFromLocalStorage());
    },[dispatch]);

    
    const navigate = useNavigate();

    const navigateToLogin = () =>{
        navigate('/session/new');
    }

    const handleLogout = () =>{
        dispatch(logout());
    }

  return (
    <div className='flex gap-6 px-10 h-24 items-center text-sm'>
        <HiOutlineMenuAlt2 className='h-7 w-9 block custom-md:hidden'/>
        <ul className='flex grow list-none font-semibold items-center'>
            <img src={logo} className='w-24 h-10 pr-4 block custom-lg:hidden'/>
            <li className='hidden custom-md:flex items-center px-4'>Find designers <IoChevronDown className='ml-1'/></li>
            <li className='hidden custom-md:block hover:opacity-70 px-4'>Inspiration</li>
            <li className='hidden custom-md:block hover:opacity-70 px-4'>Jobs</li>
            <li className='hidden custom-md:block hover:opacity-70 px-4'>Go Pro</li>
        </ul>
    
        <img src={logo} className='grow-0 w-24 h-10 hidden custom-lg:block hover:opacity-70'/>
   
        <div className='grow flex justify-end'>
            <div className='flex gap-5 items-center'>
                <div className='hidden custom-lg1:block'>
                    <SearchBar />
                </div>
                <img className='block custom-lg1:hidden text-gray-500 h-4 w-4' src={searchIcon}/>

               
                {
                    user ? <>
                        <div className="group">
                          <img 
                            src={"https://placehold.co/100x100?text=V"} 
                            className="rounded-full w-11 h-11 cursor-pointer" 
                            alt="User Avatar"
                          />
                          <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg w-80 h-80 right-[20px]">
                            <div className="flex flex-col items-center p-2">
                              <img 
                                src={"https://placehold.co/100x100?text=V"} 
                                className="rounded-full w-20 h-20 mr-2" 
                                alt="User Avatar"
                              />
                              <span className="font-semibold mt-3 text-lg heading1">{user?.user?.username}</span> 
                            </div>
                            {/* <hr className="border-gray-300" /> */}
                            <ul className="py-2">
                              <li className="px-6 py-3 hover:bg-gray-100 cursor-pointer heading1 text-base">Upload Design Work</li>
                              <li className="px-6 py-3 hover:bg-gray-100 cursor-pointer heading1 text-base">Settings</li>
                            </ul>
                            <hr className="border-gray-300 mt-2" />
                            <div onClick={handleLogout} className="px-6 py-3 hover:bg-gray-100 cursor-pointer text-base heading1">Sign Out</div>
                          </div>
                        </div>

                    </>
                    : <>
                    <div className='hidden custom-md:block' onClick={navigateToLogin}> 
                        <TextButton  text={"Log in"}/>
                    </div>
                    <RoundedButton text={"Sign up"} width={26} weight={"bold"} padding={"4"}/>
                    </>
                }
                    
            
            </div>
        </div>
    </div>
  )
}

export default Navbar