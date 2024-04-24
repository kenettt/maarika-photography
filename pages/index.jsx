import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import { HeartIcon, StarIcon, UserGroupIcon } from "@heroicons/react/20/solid";
import Footer from "../components/footer";
import Image from "next/image";
import MailingList from "../components/mailingList";

const navlinks = [
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Minust",
    href: "/minust",
  },
  {
    name: "Kontakt",
    href: "/kontakt",
  },
  {
    name: "Blogi",
    href: "/blog",
  },
  {
    name: "Hinnakiri",
    href: "/hinnakiri",
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Maarika Kauksi Fotograafia – Hetkedest Maalitud Mälestused Viljandis
          ja üle Eesti
        </title>
        <meta
          name="description"
          content="Kohtume Maarika Kauksi fotograafiamaailmas, kus pulmafotograafia, kontserdijäädvustused ja ainulaadsed pereportreed saavad elule uue mõõtme. Viljandis baseeruv fotograaf Maarika loob kunstilisi ja ajatuid fotosid, et jäädvustada teie erilisi hetki. Usaldage oma mälestused meie kätesse!"
        />
        <link
          rel="preload"
          as="image"
          href="/images/background/fog-nature-beauty.webp"
        />
      </Head>
      <Header className="md:hidden" color="text-white" />
      <div className="flex flex-col w-full h-screen min-h-screen bg-[center_20%] bg-cover bg-hero text-white font-light font-europa pr-4 pl-8 py-4">
        <div className="h-full flex flex-col justify-center items-end text-end max-w-[90%] mx-auto w-full ">
          <div className="text-4xl"> Maarika Kauksi </div>
          <div className="text-lg tracking-widest mt-2">Photography</div>
          <div className="md:flex tracking-widest mt-7 space-x-3 text-sm hidden">
            {navlinks.map((link, id) => (
              <Link href={link.href} key={id}>
                <a className="hover:text-[#ffc8d7] hover:scale-125  border-[#ffc8d7] transition duration-300">
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <Footer
          hidden="hidden"
          className="text-white justify-end z-20 w-full"
          color="fill-white hover:fill-[#ffc8d7] hover:scale-125"
        />
      </div>
      <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
        <div
          className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
          aria-hidden="true"
        >
          <div
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <MailingList />
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-lg font-semibold leading-8 tracking-tight text-pink-400">
              Kaunid Mälestused, Püütud Pildina
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Maarika Kauksi - Fotograaf Viljandis:
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              Tere tulemast Maarika Kauksi fotograafia maailma! Olen Viljandis
              baseeruv professionaalne fotograaf, kes on pühendunud hetkede
              jäädvustamisele pulmades, kontsertidel, portreedel ja perefotodel
              ning erinevatel üritustel. Minu eesmärk on luua kaunid ja ajatud
              pildid, mis jäävad meelde kogu eluks.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
            <div className="relative lg:order-last lg:col-span-5">
              <svg
                className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M0.5 0V200M200 0.5L0 0.499983" />
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)"
                />
              </svg>
              <figure className="border-l border-pink-400 pl-8 pb-2">
                <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                  <p>
                    “Võrratult soe ja hoitud tunne oli terve sessiooni vältel.
                    No ja need pildid...mis mõttes ?!?!😶 Päriselt olen nii ilus
                    väää ?!?!😅 Uskumatu kuidas ta tabab hetke ja oskab märgata
                    su häid/ilusaid külgi. Lihtsalt võrratud pildid. Mega suured
                    tänud ❤️ Pole sõnu piisavalt kirjeldamaks mu rahulolu. ❤️”
                  </p>
                </blockquote>
                <figcaption className="mt-8 flex gap-x-4">
                  <Image
                    src="/images/feedback/4043247-1-avatar-female-portrait-woman_113261.png"
                    alt=""
                    height={50}
                    width={50}
                    className="mt-1 h-10 w-10 flex-none rounded-full bg-gray-50 object-cover"
                  />
                  <div className="text-sm leading-6">
                    <div className="font-semibold text-gray-900">Kadri.B</div>
                    <div className="text-gray-600">@kadri</div>
                  </div>
                </figcaption>
              </figure>
              <figure className="border-l border-pink-400 pl-8 pt-2">
                <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900 ">
                  <p>
                    “Plaanisime minna pildistama sügisel, kuid nähes neid pilte
                    mis Maarika ülesse pani teistest peredest, ei lasnud mul
                    enam sammugi edasi lükata pildistamist. Otsus langes kiirelt
                    perega ühiselt tema kasuks ja teate mis.. pilte kätte saades
                    need on lihtsalt nii ilusad , et raske on ekraani sulgeda ja
                    valida vaid ühe pildi vahel 😃 meie oleme õnnelikud ja mega
                    super rahul ❤🥰 kindlasti kohtume peagi uuesti ”
                  </p>
                </blockquote>
                <figcaption className="mt-8 flex gap-x-4">
                  <Image
                    src="/images/feedback/4043252-child-girl-kid-person_113255.png"
                    alt=""
                    height={50}
                    width={50}
                    className="mt-1 h-10 w-10 flex-none rounded-full bg-gray-50 object-cover"
                  />
                  <div className="text-sm leading-6">
                    <div className="font-semibold text-gray-900">Heelika.R</div>
                    <div className="text-gray-600">@heelika</div>
                  </div>
                </figcaption>
              </figure>
              <figure className="border-l border-pink-400 pl-8 pt-2">
                <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                  <p>
                    “Supper ägedad. Ma olen väga rahul.Tead esimest korda saame
                    pildid mida pole soov üle töödelda. Alati on nagu midagi
                    puudu. 😀 Aga seekord on kõik nii paigas”
                  </p>
                </blockquote>
                <figcaption className="mt-8 flex gap-x-4">
                  <Image
                    src="/images/feedback/4043261-artist-avatar-marilyn-monroe_113252.png"
                    alt=""
                    height={50}
                    width={50}
                    className="mt-1 h-10 w-10 flex-none rounded-full object-cover object-left bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <div className="font-semibold text-gray-900">Kadri.M</div>
                    <div className="text-gray-600">@kadri</div>
                  </div>
                </figcaption>
              </figure>
              <figure className="border-l border-pink-400 pl-8 pt-2">
                <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                  <p>
                    “Tead.. ma olen väga rahul ja super ilusad pildid. Tahtsin
                    perepilte ja sain perepildid ♥ Väga tänan sind kiire töö
                    eest ja aitäh et vastu tulid. Kirjutasin ju ainult üks päev
                    ette kas aega on pakkuda. 👍🏼 Super”
                  </p>
                </blockquote>
                <figcaption className="mt-8 flex gap-x-4">
                  <Image
                    src="/images/feedback/4043251-avatar-female-girl-woman_113291.png"
                    alt=""
                    height={50}
                    width={50}
                    className="mt-1 h-10 w-10 flex-none rounded-full object-cover object-left bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <div className="font-semibold text-gray-900">Gelli.J</div>
                    <div className="text-gray-600">@gelli</div>
                  </div>
                </figcaption>
              </figure>
              <figure className="border-l border-pink-400 pl-8 pt-2">
                <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                  <p>
                    “Appi kui ilusad pildid! ❤Ma pole eriline nutja aga nüüd
                    läks küll silm märjaks🥲🫣.Ma sain kõik mis ma tahtsin,
                    väga super. Aitäh 🥰”
                  </p>
                </blockquote>
                <figcaption className="mt-8 flex gap-x-4">
                  <Image
                    src="/images/feedback/4043250-avatar-child-girl-kid_113270.png"
                    alt=""
                    height={50}
                    width={50}
                    className="mt-1 h-10 w-10 flex-none rounded-full object-cover object-left bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <div className="font-semibold text-gray-900">Mairis.M</div>
                    <div className="text-gray-600">@mairis</div>
                  </div>
                </figcaption>
              </figure>
              <figure className="border-l border-pink-400 pl-8 pt-2">
                <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                  <p>
                    “Ma juba viiendat korda vaatan pilte üle ja ei jõua ära
                    imestada, kui ilusad ja toredad need on. 😍 Aitäh Sulle
                    jäädvustamast! Kogu meie suur pere on väga rahul!”
                  </p>
                </blockquote>
                <figcaption className="mt-8 flex gap-x-4">
                  <Image
                    src="/images/feedback/4043248-avatar-female-portrait-woman_113285.png"
                    alt=""
                    height={50}
                    width={50}
                    className="mt-1 h-10 w-10 flex-none rounded-full object-cover object-left bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <div className="font-semibold text-gray-900">Maris.K</div>
                    <div className="text-gray-600">@maris</div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
              <h2 className="font-medium">Miks valida Maarika Kauksi?</h2>
              <ul role="list" className="list-disc marker:text-pink-400">
                <li className="mt-4">
                  Olen pikaajalise kogemusega fotograaf Viljandis ja selle
                  ümbruses.
                </li>
                <li className="mt-4">
                  Unikaalsed fotod: Loon personaalseid ja kunstipäraseid
                  fotosid, mis räägivad teie loo.
                </li>
                <li className="mt-4">
                  Professionaalne varustus: Kasutan tipptasemel tehnikat, et
                  tagada parima võimaliku kvaliteediga pildid.
                </li>
              </ul>

              <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <HeartIcon
                    className="mt-1 h-5 w-5 flex-none text-pink-400"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Pulmafotograafia
                    </strong>{" "}
                    Unistate oma unikaalsest pulmapäevast? Olen
                    spetsialiseerunud pulmafotograafiana, püüdes tabada
                    armastuse, rõõmu ja emotsioone, et need jääksid teie
                    mälestustesse alatiseks. Iga pulmapäev on ainulaadne, ning
                    minu eesmärk on jäädvustada need erilised hetked
                    kvaliteetsete ja meeldejäävate fotode abil.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <StarIcon
                    className="mt-1 h-5 w-5 flex-none text-pink-400"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Kontsertide ja ürituste jäädvustamine:
                    </strong>{" "}
                    Olen kogenud sündmuste fotograaf, kes oskab tabada hetki ka
                    kõige dünaamilisematel kontsertidel ja üritustel. Minu
                    kaamera on alati valmis püüdma artistide sära, publiku
                    emotsioone ning ürituse üldist atmosfääri.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <UserGroupIcon
                    className="mt-1 h-5 w-5 flex-none text-pink-400"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Portree- ja perefotograafia:
                    </strong>{" "}
                    Olen kirglik portree- ja perefotograaf, kes suudab tabada
                    iga inimese individuaalsust ning luua intiimseid ja
                    südamlikke hetki. Olen valmis jäädvustama teie pere
                    igapäevaseid hetki ning looma portreefotosid, mis
                    väljendavad teie isiksust.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Kui otsite professionaalset fotograafi Viljandis, kes suudab
                tabada hetki pulmades, kontsertidel, portreedel ja perefotodel
                ning üritustel, siis olete õiges kohas. Võtke minuga ühendust,
                et arutada, kuidas saan teid parimal viisil aidata. Maarika
                Kauksi fotograafia - Teie hetked, minu käes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
