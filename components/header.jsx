import Link from 'next/link'

export default function header({className=""}) {
    return (
      <div className={`${className} flex items-center sticky top-0 z-50 md:px-6 p-6 -mb-[77px] bg-gradient-to-b from-[#7b6c75b5]`}>
        <Link href="/" >
          <a className="text-sm text-center md:text-start md:text-lg text-white tracking-widest font-light font-europa hidden md:block">Maarika Kauksi Photography</a>
        </Link>
        <div className="tracking-widest space-x-3 md:space-x-10 text-sm lg:text-lg font-europa flex justify-center  w-full md:w-min md:ml-auto text-white  ">
          <Link href="/">
            <a>Avaleht</a>
          </Link>
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
          <Link href="/minust">
            <a>Minust</a>
          </Link>
          <Link href="/kontakt">
            <a>Kontakt</a>
          </Link>
          <Link href="/">
            <a>Hinnakiri</a>
          </Link>
        </div>
      </div>
    );
}