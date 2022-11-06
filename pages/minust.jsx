import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'

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
      </Head>
      <Header />
      <section className="w-full min-h-screen bg-center bg-cover bg-aboutHero "> 
        <div className="min-h-screen p-4 lg:p-8 flex flex-col">
          <div className="text-white font-medium font-europa flex flex-col items-center lg:items-end my-auto ">
            <div dangerouslySetInnerHTML={{ __html:text}} className="md:mx-10 text-white md:max-w-[700px] font-europa tracking-widest font-medium text-xs md:text-xl lg:ml-auto h-full flex items-center text-center lg:text-start py-10" />
            </div>
            <div className="fixed bottom-4 z-20 px-6 w-full">
                <Footer  />
            </div>
        </div>
      </section>
    </div>
  )
}
