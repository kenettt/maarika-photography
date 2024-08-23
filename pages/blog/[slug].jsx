import Head from "next/head";
import qs from "qs";
import Header from "../../components/header";
import NextJsImage from "../../components/NextJsImage";
import BreadCrumbs from "../../components/breadCrumbs";
import PhotoAlbum from "react-photo-album";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import MailingList from "../../components/mailingList";
import fs from "fs";
import path from "path";

const BlogPost = ({ blogPost }) => {
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
  const photos = blogPost.galleri.data.map((photo) => {
    return {
      src: photo.attributes.url,
      width: photo.attributes.formats.medium.width,
      height: photo.attributes.formats.medium.height,
    };
  });

  return (
    <>
      <Head>
        <title>{blogPost.seo?.tiitel || ""}</title>
        <meta name="description" content={blogPost.seo?.kirjeldus || ""} />
      </Head>
      <Header color="text-black" />
      <MailingList />
      <div className="lg:flex xl:flex-row flex-col max-w-desktop mx-auto justify-between bg-white md:bg-darker-grey">
        <div className="lg:pl-[120px] pl-[30px] pr-[30px] pt-10 sm:pt-[70px] pb-8 max-w-[1600px] w-full mx-auto">
          <div className="flex justify-between items-center flex-wrap">
            <BreadCrumbs routes={[blogPost.pealkiri]} />
            <div className="text-2xl lg:text-3xl text-center w-full mt-8  dark:text-gray-900">
              {blogPost.pealkiri}
            </div>
          </div>
          <div className="py-10 lg:text-xl text-center dark:text-gray-700">
            <BlocksRenderer content={blogPost.sisu} />
          </div>
          <div className="">
            <PhotoAlbum
              renderPhoto={NextJsImage}
              sizes={{
                size: "calc(100vw - 40px)",
                sizes: [
                  {
                    viewport: "(max-width: 299px)",
                    size: "calc(100vw - 10px)",
                  },
                  {
                    viewport: "(max-width: 599px)",
                    size: "calc(100vw - 20px)",
                  },
                  {
                    viewport: "(max-width: 1199px)",
                    size: "calc(100vw - 30px)",
                  },
                ],
              }}
              defaultContainerWidth={1200}
              spacing={8}
              layout="rows"
              targetRowHeight={570}
              photos={photos}
              onClick={({ index }) => setIndex(index)}
            />
            <Lightbox
              slides={photos}
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
      </div>
    </>
  );
};

export default BlogPost;

export async function getStaticPaths() {
  // Path to the data folder
  const blogDir = path.join(process.cwd(), "blogData");

  // Get all filenames in the data directory
  const filenames = fs.readdirSync(blogDir);

  // Generate paths based on the filenames
  const paths = filenames.map((filename) => {
    const slug = filename.replace(".json", ""); // Remove .json extension to get the slug

    return {
      params: { slug }, // Pass the slug as a parameter
    };
  });

  console.log(paths);

  // Return the paths and set fallback to false (404 for missing pages)
  return { paths, fallback: false };
}
export const getStaticProps = async function ({ params }) {
  const filePath = path.join(process.cwd(), "blogData", `${params.slug}.json`);

  const fileContents = fs.readFileSync(filePath, "utf8");

  const post = JSON.parse(fileContents);
  console.log(post);

  return {
    props: {
      blogPost: post,
    },
  };
};
