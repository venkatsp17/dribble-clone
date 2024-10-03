import React from 'react'

const CategoryCarousel = ({data}) => {
    const extendedProfiles = [...data, ...data];

  return (
    <div className="overflow-hidden relative mt-12">
    <div className="flex animate-scroll space-x-6">
      {extendedProfiles.map((profile, index) => (
      <div key={index} className="flex-none w-56 min-h-40 my-10">
      <div className="overflow-hidden rounded-xl">
        <img src={profile.imgSrc} className='w-56 max-h-40 rounded-xl'/>
        <div className="p-4 text-start">
          <p className="font-medium text-sm">{profile.name}</p>
        </div>
      </div>
    </div>
      ))}
    </div>
  </div>
  )
}

export default CategoryCarousel