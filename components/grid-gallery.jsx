import Image from 'next/image'

export default function GridGallery({ images,openLightboxOnSlide }) {
  
  return (
    <div className="sm:grid sm:grid-cols-4 gap-1">
      {images &&
        images.map(({src,className,size}, index) => (
            <GridGalleryCard
              key={index}
              imageUrl={src}
              className={className}
              index={index}
              size={size}
              openLightboxOnSlide={openLightboxOnSlide}
            />
        ))}
    </div>
  );
}

function GridGalleryCard({ imageUrl, className,index,openLightboxOnSlide,size }) {
  return (
    <div onClick={() => (openLightboxOnSlide(index))} 
      className={` ${className} py-[1px] lg:py-0 cursor-pointer }`}
    >
      <Image src={imageUrl} className="object-cover " alt="" priority={index === 0 ? true : false}   height={size.height} width={size.width} layout="responsive"  />
    </div>
  );
}
