import { IoHeart } from "react-icons/io5";
import { LikeIcon, ViewIcon } from "../../assets";
import ProfileIcon from "../profileIcon";
import "./index.css";
import { TbEyeFilled } from "react-icons/tb";

const ImageCard = ({ image, title, likes, views, profileImg }) => {



    return (
      <div className="rounded-lg">
        <img src={image} alt={title} className="w-full h-64 object-cover rounded-xl" />
        <div className="p-1 flex items-center justify-between">
          <div className="flex items-center w-4/6">
            <ProfileIcon profileImg={profileImg}/>
            <div className="flex w-9/12 mx-1">
              <p className="text-sm truncate overflow-hidden mono-sans mx-1">{title}</p>
              <div className="bg-gray-300 text-white py-0.5 px-1 text-[10px] rounded-md">PRO</div>
            </div>
          </div>
          <div className="flex items-center justify-end w-2/6">
            <div className="flex items-center justify-between mx-2">
              <div >
                <IoHeart className="text-gray-400"/>
              </div>
              <span className="text-gray-400 text-xs">{likes}</span>
            </div>
            <div className="flex items-center justify-between">
              <TbEyeFilled className="text-gray-400"/>
              <span className="text-gray-400 text-xs">{views}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };


export default ImageCard;
  