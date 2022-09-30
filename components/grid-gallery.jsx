import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";


export default function GridGallery({ images,setIndex }) {
  const [imagesShownArray, setImagesShownArray] = useState(
    Array(images.length).fill(false)
  );

  const imageVisibleChange = (index, isVisible) => {
    if (isVisible) {
      setImagesShownArray((currentImagesShownArray) => {
        currentImagesShownArray[index] = true;
        return [...currentImagesShownArray];
      });
    }
  };

  return (
    <div className="lg:grid lg:grid-cols-4 gap-1">
      {images &&
        images.map(({src,className,objectFit}, index) => (
          <VisibilitySensor
            key={index}
            partialVisibility={true}
            offset={{ bottom: 80 }}
            onChange={(isVisible) => imageVisibleChange(index, isVisible)}
          >
            <GridGalleryCard
              imageUrl={src}
              show={imagesShownArray[index]}
              className={className}
              objectFit={objectFit}
              index={index}
              setIndex={setIndex}
            />
          </VisibilitySensor>
        ))}
    </div>
  );
}

function GridGalleryCard({ imageUrl, show, className,setIndex,index,objectFit }) {
  
  return (
    <div onClick={() => setIndex(index)}
      className={` ${className} py-[1px] lg:py-0 relative transition ease-in duration-300 transform cursor-pointer ${
        show ? "" : "translate-y-16 opacity-0" 
      }`}
    >
      <img src={imageUrl} alt="" style={objectFit} className={`object-cover h-full`} />
    </div>
  );
}
