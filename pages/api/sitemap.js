const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
 
module.exports = async (req, res) => {
 

  const routes = ['/', 'portfolio', '/hinnakiri', '/minust', '/kontakt'];


  const links = routes.map(route => {
    return {
      priority: route === '/' ? 1 : 0.3,
      url: route
    }
  });
  const stream = new SitemapStream( { hostname: `https://www.maarikakauksi.com` } );
  const sitemap = await streamToPromise(Readable.from(links).pipe(stream));
  res.setHeader('Content-Type', 'text/xml');
  res.send(sitemap.toString());
}