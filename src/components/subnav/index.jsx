import { FaAngleDown } from "react-icons/fa"
import { MdOutlineFilterList } from "react-icons/md"

const Subnav = () =>{
    const navs = ["Discover","Animation","Branding","Illustration","Mobile","Print","Product Design","Typography","Web Design"]
    return(
        <div className="Subnav flex justify-between items-center px-10 md:px-16 py-6 overflow-scroll w-full truncate mb-0">
            <button className="px-4 text-sm py-2 border rounded-md border-slate-200 gap-2 flex items-center justify-center">Following <FaAngleDown/></button>
            <ul className="flex gap-5 font-bold">
                {
                    navs.map(elem=>
                        <li key={elem} className="px-3 hover:opacity-60 truncate cursor-pointer py-1 text-sm rounded-full">{elem}</li>
                    )
                }
            </ul>
            <button className="px-4 text-sm py-2 border rounded-full border-slate-200 gap-2 flex items-center justify-center"><MdOutlineFilterList/> Filter</button>
        </div>
    )
}
 
export default Subnav