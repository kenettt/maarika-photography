import Image from 'next/image'
import photos from '../components/photos'
import { useState } from 'react';
import GridGallery from "../components/grid-gallery";
import ImageGallery from 'react-image-gallery';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
export default function Portfolio() {

    const [index, setIndex] = useState(-1);
    const [open, setOpen] = useState(false);
    console.log(index)


    return (
        <div className="p-2 lg:p-0 lg:max-w-[96%] mx-auto">
          <div className="flex items-center sticky top-0 z-50  p-3 bg-white ">
            <a href="/" className="text-lg tracking-widest font-light font-europa">Maarika Kauksi Photography</a>
            <div className="tracking-widest space-x-3 md:space-x-10 text-lg font-medium font-europa ml-auto ">
                <a href="/">Avaleht</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Blog</a>
                <a href="/blog">Price</a>
            </div>
          </div>
          <div className="">
            <GridGallery images={photos} setIndex={setIndex} />
            <button type="button" onClick={() => setOpen(true)}>
              Open Lightbox
            </button>

            <Lightbox
              open={index >= 0}
              slides={photos}
              index={index}
              close={() => setIndex(-1)}
              plugins={[Fullscreen,Slideshow,Zoom]}
            />
          </div>
        </div>
    );
}