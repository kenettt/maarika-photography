import Image from 'next/image'

export default function GridGallery({ images,setIndex }) {
  return (
    <div className="lg:grid lg:grid-cols-4 gap-1">
      {images &&
        images.map(({src,className,objectPosition}, index) => (
            <GridGalleryCard
              key={index}
              imageUrl={src}
              className={className}
              objectPosition={objectPosition}
              index={index}
              setIndex={setIndex}
            />
        ))}
    </div>
  );
}

function GridGalleryCard({ imageUrl, className,setIndex,index,objectPosition }) {

  return (
    <div onClick={() => setIndex(index)} 
      className={` ${className} py-[1px] first:min-h-[calc(100vh_-_52px)] screen h-[700px] 3xl:h-[1000px] lg:py-0 relative cursor-pointer
      }`}
    >
      <Image src={imageUrl} alt="" priority={index === 0 ? true : false} objectPosition={objectPosition}  layout="fill" className={`object-cover`} />
    </div>
  );
}
