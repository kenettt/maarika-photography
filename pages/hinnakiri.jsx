import Header from "../components/header";
import Footer from "../components/footer"
import Head from "next/head"

export default function Hinnakiri() {
    return (
        <div>
            <Head>
              <title>Maarika Kauksi Perefotograaf Viljandis</title>
              <meta name="description" content="Pakun fotograafi teenust, perefotograaf,stuudio,passipilt,portree,loodus" />
              <link rel="preload" as="image" href="/images/portfolio/DSC08373.webp" />
            </Head>
            <Header />
            <div className="min-h-screen h-screen flex flex-col bg-cover bg-priceHero bg-[center_90%] text-white p-4 lg:pr-4 lg:pl-8 py-4"> 
                <div className="flex flex-col justify-center items-center w-full font-europa h-full">
                    <div className="flex justify-center items-center w-full lg:w-[500px] lg:h-[150px] w-[300px] h-[100px] bg-[#7b5151ad] border-white border-4 rounded-lg text-3xl lg:text-5xl font-bold tracking-[0.2em]"> Hinnakiri </div>
                    <div className="text-center  mt-10 rounded-xl p-4 lg:p-10 bg-[#7b5151ad]">
                        <div className="text-white tracking-widest text-xl sm:text-2xl lg:text-5xl mt-6 font-medium"> Fotosessioon : 60€ </div>
                        <div className="text-xl lg:text-3xl mt-4">Sisaldab kõiki õnnestunud fotosid digitaalsel kujul</div>
                        <div className="text-sm lg:text-lg space-y-1 mt-4">
                            <div>Perekonnad 6 liikmelised või väiksemad</div>
                            <div>Üle 6 liikme lisanduvad lisa tasud</div>
                            <div>Digitaalne laadimine</div>
                            <div>PS! Kasutan mõnda pilti meie sessioonist ka avalikult</div>
                            <div>Pulmad,Firma peod,Suur üritused kokkuleppel </div>
                        </div>
                    </div>
                </div>
                <Footer className="z-20 w-full text-white justify-between " color="fill-white hover:fill-[#ffc8d7] hover:scale-125" />
            </div>
        </div>
    );
}