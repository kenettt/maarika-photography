import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";

const text = `<span style="white-space: pre-wrap;"><p class="text-xl md:text-3xl">Hei!<p> 
<p>Mina olen Maarika. Elan armsas Viljandis mis pakub väga palju looduskauneid kohti pildistamiseks.</p>
<p>Fotograaf peab armastama loodust ja inimesi. Tänu sellele saab kõige täiuslikumalt pildile jäädvustatud inimesed ja nende emotsioonid ning hetked. Seda teen mina ka - armastan inimesi ja loodust.</p>
<p>Lisaks soovin inimestele rõõmu pakkuda ja naeratuse suule tuua, fotograafia on selleks just parim töö. Ma isegi ei tahaks seda tööks nimetada pigem kireks.</p>
<p>Ma tahan iga inimese jaoks aega võtta, et ta oleks võimalikult pingevaba omas loomulikkuses, nii saab kõige ehedamad emotsioonid ning hetked. See pole liini töö. See on kunst.</p>
<p>Iga inimene on harukordselt ja kaunilt loodud. Toon selle pildile. Üle Eesti </span></p>
`;
export default function Home() {
  return (
    <div>
      <Head>
        <title>Kes on Maarika Kauksi?</title>
        <meta
          name="description"
          content="Elan armsas Viljandis mis pakub väga palju looduskauneid kohti pildistamiseks."
        />
        <link rel="preload" as="image" href="/images/background/maarika.webp" />
      </Head>
      <Header />
      <section className="w-full min-h-svh h-svh bg-[center_90%] 3xl:bg-center bg-cover bg-aboutHero relative overflow-hidden pr-4 pl-8 py-4 flex flex-col">
        <div className=" text-white font-medium font-europa flex flex-col items-center lg:items-end my-auto max-w-[1600px] mx-auto w-full">
          <div
            dangerouslySetInnerHTML={{ __html: text }}
            className="md:mx-10 text-white md:max-w-[700px] font-europa tracking-widest font-medium text-xs md:text-xl lg:ml-auto h-full flex items-center text-center lg:text-start py-10"
          />
        </div>
        <Footer
          className="z-20 w-full text-white justify-between"
          color="fill-white hover:fill-[#ffc8d7] hover:scale-125"
        />
      </section>
    </div>
  );
}
