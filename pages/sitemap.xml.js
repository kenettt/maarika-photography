import { SitemapStream, streamToPromise } from "sitemap";
const { Readable } = require("stream");
import qs from "qs";

function SiteMap() {}

export async function getServerSideProps({ res }) {
  const query = qs.stringify({
    fields: ["slug"],
  });

  const getPosts = await fetch(
    `https://api.maarikakauksi.com/api/blogs?${query}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const posts = await getPosts.json();

  const blogPageRoutes = posts.data.map(
    (item) => `/blog/${item.attributes.slug}`
  );

  const routes = [
    "/",
    "portfolio",
    "/hinnakiri",
    "/minust",
    "/kontakt",
    ...blogPageRoutes,
  ];

  const links = routes.map((route) => {
    return {
      priority: route === "/" ? 1 : 0.3,
      url: route,
    };
  });

  const stream = new SitemapStream({
    hostname: `https://www.maarikakauksi.com`,
  });
  const sitemap = await streamToPromise(Readable.from(links).pipe(stream));
  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
