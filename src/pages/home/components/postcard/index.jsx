import { IoHeart, IoHeartOutline } from "react-icons/io5";
import ProfileIcon from "../../../../components/common/profileIcon";
import PropTypes from "prop-types";
import "./index.css";
import { TbEyeFilled } from "react-icons/tb";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserFromLocalStorage } from "../../../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { changeState, toggleModal } from "../../../../redux/collectionSlice";

const ImageCard = ({ image, title, likes, views, profileImg, id}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [bookmark, setBookmark] = useState(false);
  const [like, setLike] = useState(false);

  

  useLayoutEffect(() => {
    dispatch(setUserFromLocalStorage());
  }, [dispatch]);

  const handleBookmark = () => {
    if (user) {
      dispatch(changeState({item:{image, title, likes, views, profileImg, id}, collectionId: ""}));
      setBookmark(bookmark ? false : true);
      dispatch(toggleModal());
    } else {
      navigate("/session/new");
    }
  };

  const handleLike = () => {
    if (user) {
      setLike(like ? false : true);
    } else {
      navigate("/session/new");
    }
  };



  return (
    <div className="rounded-lg mt-4">
      <div className="relative w-full h-64 group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end justify-between p-4">
          <div className="text-white">{title}</div>
          <div className="flex">
            {!bookmark && (
              <div
                onClick={handleBookmark}
                className="w-10 h-10 bg-white rounded-full flex justify-center items-center mx-1"
              >
                <FaRegBookmark color="black" size={18} />
              </div>
            )}
            {bookmark && (
              <div
                onClick={handleBookmark}
                className="w-10 h-10 bg-white rounded-full flex justify-center items-center mx-1"
              >
                <FaBookmark color="black" size={18} />
              </div>
            )}
            {!like && (
              <div
                onClick={handleLike}
                className="w-10 h-10 bg-white rounded-full flex justify-center items-center"
              >
                <IoHeartOutline color="black" size={20} />
              </div>
            )}
            {like && (
              <div
                onClick={handleLike}
                className="w-10 h-10 bg-white rounded-full flex justify-center items-center"
              >
                <IoHeart color="pink" fill="pink" size={20} />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-1 flex items-center justify-between">
        <div className="flex items-center w-4/6">
          <ProfileIcon profileImg={profileImg} />
          <div className="flex w-9/12 mx-1">
            <p className="text-sm truncate overflow-hidden mono-sans mx-1">
              {title}
            </p>
            <div className="bg-gray-300 text-white py-0.5 px-1 text-[10px] rounded-md">
              PRO
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end w-2/6">
          <div className="flex items-center justify-between mx-2">
            <div>
              <IoHeart className="text-gray-400" />
            </div>
            <span className="text-gray-400 text-xs">{likes}</span>
          </div>
          <div className="flex items-center justify-between">
            <TbEyeFilled className="text-gray-400" />
            <span className="text-gray-400 text-xs">{views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

ImageCard.propTypes = {
  image: PropTypes.any,
  title: PropTypes.any,
  likes: PropTypes.any,
  views: PropTypes.any,
  profileImg: PropTypes.any,
  id: PropTypes.any
};

export default ImageCard;
