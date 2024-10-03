import React from 'react'
import ImageCard from "../../components/postcard"
import { items } from "../../components/data";

const CardsSection = () => {
    return (
        <>
            <div className="flex flex-col items-center mt-16 font-[525] text-center mx-10 heading1">
                <h3 className="text-5xl md:text-5xl tracking-wider ">Explore inspiring designs</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 mx-20">
                {items.map((item, index) => (
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
        </>
    )
}

export default CardsSection