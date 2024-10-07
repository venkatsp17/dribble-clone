import PropTypes from 'prop-types';
import ImageCard from "../postcard"
import OutlineButton from '../../../../components/common/outlineButton';
import Subnav from "../../../../components/header/subnav";
import {useLayoutEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserFromLocalStorage } from '../../../../redux/authSlice';


const CardsSection = ({data}) => {
    
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    useLayoutEffect(()=>{
        dispatch(setUserFromLocalStorage());
    },[dispatch]);

    return (
        <div className='flex flex-col items-center'>
            {
                user && <Subnav />
            }
            <div className={`flex flex-col items-center mt-16 font-[525] text-center mx-10 heading1 ${!user? "mt-16":"mt-0"}`}>
                {!user &&  <h3 className="text-5xl md:text-5xl tracking-wide">Explore inspiring designs</h3>}
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 custom-lg2:grid-cols-4 gap-2 md:gap-6 ${!user? "mt-14":"mt-0"}  mx-4 md:mx-16`}>
                {data.map((item, index) => (
                    <ImageCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        likes={item.likes}
                        views={item.views}
                        profileImg={item.profileImg}
                    />
                ))}
            </div>
            <div className='mt-12 mb-40'>
                <OutlineButton text={"Browse more inspiration"} padding={4} width={70}/>
            </div>
        </div>
    )
}


CardsSection.propTypes = {
    data: PropTypes.any,             
  };

export default CardsSection