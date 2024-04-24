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

const BlogPost = ({ blogPost, slug }) => {
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
  const photos = blogPost.attributes.galleri.data.map((photo) => {
    return {
      src: photo.attributes.url,
      width: photo.attributes.formats.medium.width,
      height: photo.attributes.formats.medium.height,
    };
  });

  return (
    <>
      <Head>
        <title>{blogPost.attributes.seo?.tiitel || ""}</title>
        <meta
          name="description"
          content={blogPost.attributes.seo?.kirjeldus || ""}
        />
      </Head>
      <Header color="text-black" />
      <MailingList />
      <div className="lg:flex xl:flex-row flex-col max-w-desktop mx-auto justify-between bg-white md:bg-darker-grey">
        <div className="lg:pl-[120px] pl-[30px] pr-[30px] pt-10 sm:pt-[70px] pb-8 max-w-[1600px] w-full mx-auto">
          <div className="flex justify-between items-center flex-wrap">
            <BreadCrumbs routes={[blogPost.attributes.pealkiri]} />
            <div className="text-2xl lg:text-3xl text-center w-full mt-8">
              {blogPost.attributes.pealkiri}
            </div>
          </div>
          <div className="py-10 lg:text-xl text-center">
            <BlocksRenderer content={blogPost.attributes.sisu} />
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

export const getStaticPaths = async function () {
  const query = qs.stringify({
    fields: ["slug"],
  });

  const getRoutes = await fetch(
    `https://api.maarikakauksi.com/api/blogs?${query}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const routes = await getRoutes.json();

  const paths = routes.data.map((item) => ({ params: item.attributes }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async function ({ params }) {
  const query = qs.stringify(
    {
      fields: ["pealkiri", "sisu"],
      populate: {
        galleri: {
          fields: ["formats", "url", "alternativeText"],
        },
        seo: {
          fields: ["kirjeldus", "tiitel"],
        },
      },
      filters: {
        slug: {
          $eq: params.slug,
        },
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  const res = await fetch(`https://api.maarikakauksi.com/api/blogs?${query}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const blogPost = await res.json();

  return {
    props: {
      blogPost: blogPost.data[0],
      slug: params.slug,
    },
  };
};
