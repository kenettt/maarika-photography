import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Header from "../components/header";
import Head from "next/head";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import NextJsImage from "../components/NextJsImage";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import path from "path";
import sizeOf from "image-size";
import fs from "fs";

export default function Portfolio({ images }) {
  const [index, setIndex] = useState(-1);
  const animationDuration = 500;
  const maxZoomPixelRatio = 5;
  const zoomInMultiplier = 1;
  const wheelZoomDistanceFactor = 100;
  const pinchZoomDistanceFactor = 100;
  const scrollToZoom = true;
  const doubleTapDelay = 300;
  const doubleClickDelay = 300;
  const doubleClickMaxStops = 5;
  const keyboardMoveDistance = 40;

  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Looduse võrratu võlu ja inimese kaunis ilu"
        />
        <link rel="preload" as="image" href="/images/background/maarika.webp" />
      </Head>
      <Header />
      <div className="lg:pl-[90px] min-h-screen h-screen w-full flex flex-col">
        <PhotoAlbum
          renderPhoto={NextJsImage}
          sizes={{
            size: "calc(100vw - 40px)",
            sizes: [
              { viewport: "(max-width: 299px)", size: "calc(100vw - 10px)" },
              { viewport: "(max-width: 599px)", size: "calc(100vw - 20px)" },
              { viewport: "(max-width: 1199px)", size: "calc(100vw - 30px)" },
            ],
          }}
          defaultContainerWidth={1200}
          spacing={2}
          layout="rows"
          targetRowHeight={570}
          photos={images}
          onClick={({ index }) => setIndex(index)}
        />
        <Lightbox
          slides={images}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          zoom={{
            maxZoomPixelRatio,
            zoomInMultiplier,
            doubleTapDelay,
            doubleClickDelay,
            doubleClickMaxStops,
            keyboardMoveDistance,
            wheelZoomDistanceFactor,
            pinchZoomDistanceFactor,
            scrollToZoom,
          }}
          animation={{ zoom: animationDuration }}
        />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const portfolioDirectory = path.join(
    process.cwd(),
    "public/images/portfolio"
  );

  let images = [];

  // Check if the directory exists
  if (fs.existsSync(portfolioDirectory)) {
    const filenames = fs.readdirSync(portfolioDirectory);

    images = filenames
      .filter((file) => /\.(jpg|jpeg|png|gif|webp)$/.test(file)) // Filter only image files
      .map((filename) => {
        const filePath = path.join(portfolioDirectory, filename);
        const dimensions = sizeOf(filePath); // Get dimensions using image-size

        return {
          src: `/images/portfolio/${filename}`,
          width: dimensions.width, // Original width
          height: dimensions.height, // Original height
        };
      });
  }

  return {
    props: {
      images,
    },
  };
}
