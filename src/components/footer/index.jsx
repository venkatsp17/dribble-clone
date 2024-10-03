import { IoLogoTwitter, IoLogoFacebook, IoLogoInstagram, IoLogoPinterest } from "react-icons/io5"
import { logo } from "../../assets"

const Footer = () => {
  return (
    <div className="min-h-56 w-100 flex flex-col items-center justify-around">
         <div className="flex flex-col lg:flex-row justify-around items-center w-full xl:max-w-[1300px]">
            <img src={logo} className='w-32 h-20 pr-4'/>
            <ul className="list-none flex flex-wrap justify-center lg:justify-between items-center text-center gap-4 md:gap-5 xl:gap-10 text-sm">
                <li>For designers</li>
                <li>Hire talent</li>
                <li>Inspiration</li>
                <li>Advertising</li>
                <li>Blog</li>
                <li>About</li>
                <li>Careers</li>
                <li>Support</li>
            </ul>
            <div className="flex justify-evenly items-center w-2/12 mt-2 lg:mt-0 ">
                <IoLogoTwitter size={24}/>
                <IoLogoFacebook  size={24}/>
                <IoLogoInstagram  size={24}/>
                <IoLogoPinterest  size={24}/>
            </div>
         </div>
         <div className="flex flex-col lg:flex-row justify-between opacity-50 gap-4 md:gap-10 py-10 text-sm w-5/6">
                <ul className="flex flex-wrap items-center justify-center gap-1 md:gap-5">
                    <li>@ 2024 Dribbble</li>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Cookies</li>
                </ul>
                <ul className="flex flex-wrap items-center justify-center gap-1 md:gap-5">
                    <li>Jobs</li>
                    <li>Designers</li>
                    <li>Freelancers</li>
                    <li>Tags</li>
                    <li>Places</li>
                    <li>Resources</li>
                </ul>
            </div>
    </div>
  )
}

export default Footer