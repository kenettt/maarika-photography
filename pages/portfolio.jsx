import photos from '../components/photos'
import { useState } from 'react';
import GridGallery from "../components/grid-gallery";
import Link from 'next/link'
import FsLightbox from 'fslightbox-react';


export default function Portfolio() {

    const [index, setIndex] = useState(-1);

    return (
        <div className="p-2 lg:p-0 lg:max-w-[96%] mx-auto">
          <div className="flex items-center sticky top-0 z-50  p-3 bg-white ">
            <Link href="/" >
             <a className="text-lg tracking-widest font-light font-europa">Maarika Kauksi Photography</a>
            </Link>
            <div className="tracking-widest space-x-3 md:space-x-10 text-lg font-medium font-europa ml-auto ">
              <Link href="/">
                <a>Avalehlt</a>
              </Link>
              <Link href="/">
                <a>About</a>
              </Link>
              <Link href="/">
                <a>Contact</a>
              </Link>
              <Link href="/">
                <a>Blog</a>
              </Link>
              <Link href="/">
                <a>Price</a>
              </Link>
            </div>
          </div>
          <div className="">
            <GridGallery  images={photos} setIndex={setIndex} />
            <FsLightbox
              toggler={index > 0 && true}
              sources={photos.map(item=>item.src)}
              sourceIndex={index}
              />
          </div>
        </div>
    );
}