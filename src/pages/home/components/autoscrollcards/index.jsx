/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import PropTypes from 'prop-types';
import React from 'react';


const ProfileCarousel = ({data}) => {
  console.log(data);
  const extendedProfiles = [...data, ...data];
  

  

  return (
    <div className="overflow-hidden relative mt-12">
      <div className="flex animate-scroll space-x-6">
        {extendedProfiles.map((profile, index) => (
         <div key={index} className="flex-none w-60 min-h-64 md:w-72 md:min-h-80 my-10">
         <div className="rounded-3xl w-60 min-h-64 md:w-72 md:min-h-80 flex flex-col items-start justify-end p-4 text-white relative overflow-hidden">
           {
             profile.imgSrc ? (
               <div className="bg-cover bg-center absolute inset-0" style={{ backgroundImage: `url(${profile.imgSrc})` }}></div>
             ) : (
               profile.videoSrc && (
                 <video 
                   className="absolute inset-0 w-full h-full object-cover" 
                   src={profile.videoSrc} 
                   autoPlay 
                   role='video'
                   muted 
                   loop 
                   playsInline
                 />
               )
             )
           }
           <div className="relative z-10">
             <h3 className="text-start text-sm font-medium mt-4">{profile.name}</h3>
             <p className="text-start text-sm font-medium">{profile.role}</p>
             <ul className="list-none flex mt-1">
               {
                 profile.tags.map((tag, idx) => (
                   <li key={idx} className="mr-3 text-xs border rounded-3xl border-gray-500 px-2 py-1">
                     {tag}
                   </li>
                 ))
               }
             </ul>
           </div>
         </div>
       </div>
        ))}
      </div>
    </div>
  );
  
};

ProfileCarousel.propTypes = {
  data: PropTypes.any,             
};



export default ProfileCarousel;
