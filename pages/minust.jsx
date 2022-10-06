import Head from 'next/head'
import Link from 'next/link'

const text = `<span style="white-space: pre-wrap;"><p class="text-xl md:text-3xl">Hei!<p> 
<p>Mina olen Maarika. Elan armsas Viljandis mis pakub väga palju looduskauneid kohti pildistamiseks.</p>
<p>Fotograaf peab armastama loodust ja inimesi. Tänu sellele saab kõige täiuslikumalt pildile jäädvustatud inimesed ja nende emotsioonid ning hetked. Seda teen mina ka - armastan inimesi ja loodust.</p>
<p>Lisaks soovin inimestele rõõmu pakkuda ja naeratuse suule tuua, fotograafia on selleks just parim töö. Ma isegi ei tahaks seda tööks nimetada pigem kireks.</p>
<p>Ma tahan iga inimese jaoks aega võtta, et ta oleks võimalikult pingevaba omas loomulikkuses, nii saab kõige ehedamad emotsioonid ning hetked. See pole liini töö. See on kunst.</p>
<p>Iga inimene on harukordselt ja kaunilt loodud. Toon selle pildile. Üle Eesti </span></p>
`
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="w-full min-h-screen bg-center bg-cover bg-aboutHero "> 
        <div className="h-full p-8 ">
        <div className="text-white font-medium font-europa flex flex-col items-end justify-between min-h-[calc(100vh_-_65px)] md:max-w-[90%] my-auto mx-auto ">
        <div className="flex tracking-widest space-x-3 text-sm md:text-xl  w-full justify-center ">
            <Link href="/">
              <a>Avaleht</a>
            </Link>
            <Link href="/portfolio">
              <a>Portfolio</a>
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
        <div dangerouslySetInnerHTML={{ __html:text}} className="md:mx-10 text-white md:max-w-[700px] font-europa tracking-widest font-medium text-sm md:text-xl lg:ml-auto h-full flex items-center text-center lg:text-start py-10" />
        <div className="text-white flex space-x-2 w-full justify-between items-center">
            <div className="font-europa tracking-widest">
                <Link href="/">
                  <a>
                    <div className="text-md"> Maarika Kauksi </div>
                    <div className="text-xs tracking-widest mt-2">Photography</div>
                  </a>
                </Link>
            </div>
            <div className="flex space-x-3">
              <Link href="https://www.instagram.com/maarikakauksiphotography/?hl=en">
                <a target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" className='fill-white' width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=100083092881002">
                <a  target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" className='fill-white'width=" 24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z"/></svg>
                </a>
              </Link>
            </div>
            </div>
        </div>
        </div>
      </section>
    </div>
  )
}