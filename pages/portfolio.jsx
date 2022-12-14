import photos from '../components/photos'
import { useState } from 'react';
import GridGallery from "../components/grid-gallery";
import Header from "../components/header"
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
        <div>
          <Head>
            <title>Portfolio</title>
            <meta name="description" content="Looduse võrratu võlu ja inimese kaunis ilu" />
            <link rel="preload" as="image" href="/images/background/maarika.webp" />
          </Head>
            <Header />
            <div className="min-h-screen h-screen w-full flex flex-col" >
              <GridGallery images={photos} openLightboxOnSlide={openLightboxOnSlide} className="relative"/>
              <FsLightbox
                toggler={lightboxController.toggler}
                sources={images}
                slide={lightboxController.slide + 1}
                />
            </div>
          

          </div>
    );
}