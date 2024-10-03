import React from 'react'

const profiles = [
    {
      name: "Branding",
      imgSrc: "https://cdn.dribbble.com/userupload/16305659/file/original-c7758f4192a1e0b4b721351fef094ad6.jpg?format=webp&resize=400x300&vertical=center",
    },
    {
      name: "Product Design",
      imgSrc: "https://cdn.dribbble.com/userupload/16439366/file/original-fe0661cecb3f5f91a38b94d69a1bfeca.jpg?format=webp&resize=400x300&vertical=center",
    },
    {
      name: "Animation",
      imgSrc: "https://cdn.dribbble.com/userupload/16455782/file/still-8b9ba61f3a6397572a4e03a827c61278.png?format=webp&resize=400x300&vertical=center",
    },
    {
      name: "Illustration",
      imgSrc: "https://cdn.dribbble.com/userupload/16461003/file/original-40da9caebd81c1495a21ba884dae678e.png?format=webp&resize=400x300&vertical=center",
    },
    {
      name: "Mobile",
      imgSrc: "https://cdn.dribbble.com/userupload/16493099/file/original-d2fa4928230371433cf36608375c85e8.png?format=webp&resize=400x300&vertical=center",
    },
    {
        name:"Typography",
        imgSrc: "https://cdn.dribbble.com/userupload/16086080/file/original-c5b8230ecdc5a1ef3decb0cc5bc7da54.png?format=webp&resize=400x300&vertical=center",
    },
    {
        name: "Print",
        imgSrc: "https://cdn.dribbble.com/userupload/16116505/file/original-f2caa5da0b7f7f4c7c64a233d1a28723.png?format=webp&resize=400x300&vertical=center",
    },
    {
        name: "Web Design",
        imgSrc: "https://cdn.dribbble.com/userupload/16452205/file/original-114536af3a7204d5c3d07990cb0c764a.png?format=webp&resize=400x300&vertical=center"
    }
  ];

const CategoryCarousel = () => {
    const extendedProfiles = [...profiles, ...profiles];

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