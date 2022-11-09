import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'


const navlinks = [
{
  name:"Portfolio",
  href:"/portfolio"
},
{
  name:"Minust",
  href:"/minust"
},
{
  name:"Kontakt",
  href:"/kontakt"
},
{
  name:"Hinnakiri",
  href:"/hinnakiri"
}]

export default function Home() {
  return (
    <div>
      <Head>
        <title>Maarika Kauksi Perefotograaf Viljandis</title>
        <meta name="description" content="Pakun fotograafi teenust, perefotograaf,stuudio,passipilt,portree,loodus" />
        <link rel="preload" as="image" href="/images/background/fog-nature-beauty.webp" />
      </Head>
      <Header className="md:hidden" color="text-white" />
      <div className="flex flex-col w-full h-screen bg-[center_20%] bg-cover bg-hero text-white font-light font-europa p-4">
        <div className="h-full flex flex-col justify-center items-end text-end max-w-[90%] mx-auto w-full ">
          <div className="text-4xl"> Maarika Kauksi </div>
          <div className="text-lg tracking-widest mt-2">Photography</div>
          <div className="md:flex tracking-widest mt-7 space-x-3 text-sm hidden">
            {navlinks.map((link,id) => (
              <Link href={link.href} key={id}>
                <a className="hover:text-[#ffc8d7] hover:scale-125  border-[#ffc8d7] transition duration-300">{link.name}</a>
              </Link>
            ))
            }
          </div>
        </div>
        <Footer hidden="hidden" className="text-white justify-end z-20 w-full" color="fill-white hover:fill-[#ffc8d7] hover:scale-125" />
      </div>
    </div>
  )
}
