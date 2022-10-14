import Header from "../components/header";

export default function Hinnakiri() {
    return (
        <div className="bg-red-400">
            <Header />
            <div className="h-screen bg-cover grayscale bg-priceHero bg-[center_90%] flex justfiy-center text-white filter"> 
                <div className="flex flex-col justify-center items-center w-full font-europa ">
                    <div className="flex justify-center items-center w-full lg:w-[500px] lg:h-[150px] w-[300px] h-[100px] bg-[#7b5151ad] border-white border-4 rounded-lg text-3xl lg:text-5xl font-bold tracking-[0.2em]"> Hinnakiri </div>
                    <div className="text-center  mt-10 rounded-xl p-10 bg-[#7b5151ad] m-4">
                        <div className="text-white tracking-widest text-2xl lg:text-4xl mt-6 font-medium"> Peresessioon õues: 100€ </div>
                        <div className="text-xl lg:text-2xl mt-4">1 tund+ session</div>
                        <div className="text-xl lg:text-2xl mt-1">Sisaldab kõiki õnnestunud fotosid digitaalsel kujul</div>
                        <div className="text-sm lg:text-base space-y-1 mt-4">
                            <div>Perekonnad 6 liikmelised või väiksemad</div>
                            <div>Üle 6 liikme lisanduvad lisa tasud</div>
                            <div>Digitaalne laadimine</div>
                            <div>PS! Soovin vähemalt ühte pilti meie sessioonist kasutada ka avalikult.</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}