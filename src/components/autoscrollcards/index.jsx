import React from 'react';

const profiles = [
  {
    name: "Salomon",
    role: "Product Director",
    videoSrc: null,
    imgSrc: "https://cdn.dribbble.com/uploads/47172/original/d85ae8c7db2421e9a01ecac942978d4b.png?1685645079&format=webp&resize=436x543&vertical=center",
    tags: ['Product', 'UX']
  },
  {
    name:"Dan Mall",
    role: "Design Educator",
    imgSrc:null,
    videoSrc: "https://cdn.dribbble.com/uploads/47179/original/35d07cfebd303e05e688078015da0cc2.mp4?1685645373",
    tags: ['UI','Illustration']
  },
  {
    name: "Lilla Bardenova",
    role: "Brand + Illustrator",
    videoSrc: null,
    imgSrc: "https://cdn.dribbble.com/uploads/47174/original/4f02d72fe701b15b2168a4954332427f.png?1685645150&format=webp&resize=436x543&vertical=center",
    tags: ['Brand', 'UI', 'Web']
  },
  {
    name: "Victa Wille",
    role: "Digital Designer",
    videoSrc: null,
    imgSrc: "https://cdn.dribbble.com/uploads/47176/original/9b22cd83bde1809976bec0722d1f8923.jpeg?1685645213&format=webp&resize=436x543&vertical=center",
    tags: ['Leadership', 'Product', 'UI']
  },
  {
    name: "Chris Owens",
    role: "Creative Director",
    videoSrc: null,
    imgSrc: "https://cdn.dribbble.com/uploads/47178/original/mercedes-bazan.png?1689174566&format=webp&resize=436x543&vertical=center",
    tags: ['Illustration', 'UI', 'Web']
  },
  {
    name: "Helen Tran",
    role: "Lead Product Designer",
    videoSrc: null,
    imgSrc: "https://cdn.dribbble.com/uploads/47175/original/1fb34610061a95a007ac5e7b1dc53138.jpeg?1685645183&format=webp&resize=436x543&vertical=center",
    tags: ['Graphic Design','Illustration']
  },
  {
    
    name:"Jesse Showalter",
    role: "Design Educator",
    imgSrc:null,
    videoSrc: "https://cdn.dribbble.com/uploads/47181/original/1e3a73a174484bef522b620c401cd00a.mp4?1685645427",
    tags: ['Graphic Design','Illustration']
  },
 
];

const InfiniteCarousel = () => {
  // Duplicate profiles for seamless loop effect
  const extendedProfiles = [...profiles, ...profiles];

  return (
    <div className="overflow-hidden relative mt-12">
      <div className="flex animate-scroll space-x-6">
        {extendedProfiles.map((profile, index) => (
         <div key={index} className="flex-none w-60 min-h-72 md:w-72 md:min-h-96 my-10">
         <div className="rounded-3xl w-60 min-h-72 md:w-72 md:min-h-96 flex flex-col items-start justify-end p-4 text-white relative overflow-hidden">
           {
             profile.imgSrc ? (
               <div className="bg-cover bg-center absolute inset-0" style={{ backgroundImage: `url(${profile.imgSrc})` }}></div>
             ) : (
               profile.videoSrc && (
                 <video 
                   className="absolute inset-0 w-full h-full object-cover" 
                   src={profile.videoSrc} 
                   autoPlay 
                   muted 
                   loop 
                   playsInline
                 />
               )
             )
           }
           <div className="relative z-10">
             <h3 className="text-start text-xl font-semibold mt-4">{profile.name}</h3>
             <p className="text-start">{profile.role}</p>
             <ul className="list-none flex mt-1">
               {
                 profile.tags.map((tag, idx) => (
                   <li key={idx} className="mr-3 text-sm border rounded-3xl border-gray-500 px-2 py-1">
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

export default InfiniteCarousel;
