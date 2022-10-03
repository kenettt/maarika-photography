import Image from 'next/image'
import useWindowSize from '../hooks/UseWindowDimesions'

export default function GridGallery({ images,openLightboxOnSlide }) {

  const {width} = useWindowSize()

  const screenSize = () => {

    let screen

    if(width >= 1536) {
      return screen = "extraLarge"
    }
    if(width >= 1024 && width <= 1535) {
      return screen = "large"
    }
    if(width <= 1023 && width >= 360) {
      return screen = "medium"
    }
    if(width <= 359) {
      return screen = "small"
    }
  }

  console.log(screenSize())
  return (
    <div className="sm:grid sm:grid-cols-4 gap-1 ">
      {images &&
        images.map(({src,className,objectPosition,portrait}, index) => (
            <GridGalleryCard
              key={index}
              imageUrl={src}
              className={className}
              portrait={portrait}
              objectPosition={objectPosition}
              index={index}
              openLightboxOnSlide={openLightboxOnSlide}
            />
        ))}
    </div>
  );
}

function GridGalleryCard({ imageUrl, className,index,objectPosition,openLightboxOnSlide,portrait }) {

  return (
    <div onClick={() => (openLightboxOnSlide(index))} 
      className={` ${className} py-[1px] 2xl:first:min-h-[100vh] ${portrait ? "h-[600px]" : "h-[400px]"}  sm:h-[500px] md:h-[700px] 3xl:h-[1000px] lg:py-0 relative cursor-pointer
      }`}
    >
      <Image src={imageUrl} alt="" priority={index === 0 ? true : false} objectPosition={objectPosition}  layout="fill" className={`object-cover`} />
    </div>
  );
}
