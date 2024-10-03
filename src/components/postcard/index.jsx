import { IoHeart } from "react-icons/io5";
import { LikeIcon, ViewIcon } from "../../assets";
import ProfileIcon from "../profileIcon";
import "./index.css";
import { TbEyeFilled } from "react-icons/tb";

const ImageCard = ({ image, title, likes, views, profileImg }) => {



    return (
      <div className="rounded-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-64 object-cover rounded-xl" />
        <div className="p-2 flex justify-between items-center">
          <div className="flex items-center">
            <ProfileIcon profileImg={profileImg}/>
            <p className="text-sm mx-1 truncate w-11/12 overflow-hidden mono-sans">{title}</p>
            <div className="bg-gray-300 text-white py-0.5 px-1 text-[10px] rounded-md">PRO</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="mx-1">
                <IoHeart className="text-gray-400"/>
              </div>
              <span className="text-gray-400 text-sm">{likes}</span>
            </div>
            <div className="flex items-center">
              <TbEyeFilled className="text-gray-400 mx-1"/>
              <span className="text-gray-400 text-sm">{views}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };


export default ImageCard;
  