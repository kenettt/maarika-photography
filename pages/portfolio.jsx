import photos from '../components/photos'
import { useState } from 'react';
import GridGallery from "../components/grid-gallery";
import Link from 'next/link'
import FsLightbox from 'fslightbox-react';
import Head from 'next/head'

const images = photos.map(item=>item.src)

export default function Portfolio() {

    const [lightboxController, setLightboxController] = useState({
      toggler: false,
      slide: -1
      });
      
      function openLightboxOnSlide(number) {
      setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number
      });
      }

      
    return (
        <div className=" mx-auto ">
          <Head></Head>
          <div className="flex items-center sticky top-0 z-50 md:px-6 p-3  -mb-[54px] ">
            <Link href="/" >
             <a className="text-sm text-center md:text-start md:text-lg text-white tracking-widest font-light font-europa hidden md:block">Maarika Kauksi Photography</a>
            </Link>
            <div className="tracking-widest space-x-3 md:space-x-10 text-sm lg:text-lg font-europa flex justify-center  w-full md:w-min md:ml-auto text-white  ">
              <Link href="/">
                <a>Avaleht</a>
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
            <GridGallery images={photos} openLightboxOnSlide={openLightboxOnSlide} />
            <FsLightbox
              toggler={lightboxController.toggler}
              sources={images}
              slide={lightboxController.slide + 1}
              />
          </div>
    );
}