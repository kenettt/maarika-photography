import Link from "next/link";
import { useRouter } from "next/router";

const BreadCrumbs = ({ routes }) => {
  const router = useRouter();
  return (
    <div className="flex flew-row uppercase text-xs sm:text-base font-medium py-2">
      <Link href="/">
        <div className="text-dark-green cursor-pointer">Kodu</div>
      </Link>
      {router.route.includes("/blog/[slug]") ? (
        <div className="flex">
          <div className="mx-2 text-grey "> {">"} </div>
          <Link href="/blog">
            <div className="text-dark-green cursor-pointer">BLOG</div>
          </Link>
        </div>
      ) : null}
      {routes.map((route, i) => (
        <div key={i} className="ml-2 text-grey flex cursor-pointer">
          {" "}
          {">"} <span className="ml-1"></span>
          {route}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumbs;
