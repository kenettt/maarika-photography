import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import qs from "qs";
import { useState } from "react";
import MailingList from "../components/mailingList";
const options = { month: "long", day: "numeric", year: "numeric" };

const kategooria = [
  {
    label: "Kõik",
    value: "all",
  },
  {
    label: "Pere",
    value: "pere",
  },
  {
    label: "Pulm",
    value: "pulm",
  },
  {
    label: "Portree",
    value: "portree",
  },
  {
    label: "Üritus",
    value: "üritus",
  },
  /*   {
    label: "Kinnisvara",
    value: "kinnisvara",
  }, */
];

const filterPosts = (posts, selectedCategory) => {
  if (selectedCategory === "all") {
    return posts;
  }

  return posts.filter(
    (post) => post.attributes.kategooria === selectedCategory
  );
};

export default function Home({ blogPosts }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

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
      <Header color="text-black" />
      <MailingList />
      <section>
        <div className="bg-white pt-10 sm:pt-[70px] pb-8">
          <div className="lg:ml-48 flex flex-col items-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center w-full">
              Igal hetkel on oma lugu
            </h1>
            <div className="flex mt-10 mx-4 sm:text-lg justify-center font-semibold max-w-[700px] mx-auto flex-wrap">
              {kategooria.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`${
                    selectedCategory === category.value
                      ? "border-b-2 border-pink-300"
                      : ""
                  } uppercase m-2`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-10 space-y-20 lg:mt-16 lg:space-y-20 ">
            {filterPosts(blogPosts, selectedCategory).map(
              (
                {
                  attributes: {
                    pealkiri,
                    slug,
                    kirjeldus,
                    kategooria,
                    createdAt,
                    esifoto: {
                      data: {
                        attributes: { url, alternativeText },
                      },
                    },
                  },
                },
                index
              ) => (
                <article
                  key={index}
                  className={`${
                    index % 2 === 0
                      ? "lg:pl-[120px] pl-[30px] pr-[30px] "
                      : "pr-[30px] lg:pl-[120px] pl-[30px]"
                  } flex flex-col gap-8 lg:flex-row justify-evenly py-10 flex-wrap`}
                  style={{
                    background: `linear-gradient(${
                      index % 2 === 0 ? 270 : 90
                    }deg, #f9f9f9 75%, 0, #fff)`,
                  }}
                >
                  <img
                    src={url}
                    alt=""
                    height={500}
                    width={700}
                    className={`${index % 2 === 0 ? "" : "order-1 "} shadow-xl`}
                  />

                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={createdAt} className="text-gray-500">
                        {new Date(createdAt).toLocaleDateString(
                          "et-EE",
                          options
                        )}
                      </time>
                      <div className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                        {kategooria}
                      </div>
                    </div>
                    <div className="group relative max-w-xl">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={`/blog/${slug}`}>
                          <span className="absolute inset-0" />
                          {pealkiri}
                        </a>
                      </h3>
                      <p className="mt-5 text-sm leading-6 text-gray-600">
                        {kirjeldus}
                      </p>
                    </div>
                    <a
                      className="font-medium mt-5 text-sm"
                      href={`/blog/${slug}`}
                    >
                      Loe edasi
                    </a>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
        <Footer
          className="z-20 w-full text-white justify-between"
          color="fill-white hover:fill-[#ffc8d7] hover:scale-125"
        />
      </section>
    </div>
  );
}

export const getStaticProps = async () => {
  const query = qs.stringify(
    {
      fields: ["pealkiri", "slug", "kirjeldus", "kategooria", "createdAt"],
      sort: ["createdAt:desc"],
      populate: {
        esifoto: {
          fields: ["formats", "url", "alternativeText"],
        },
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  const res = await fetch(`https://api.maarikakauksi.com/api/blogs?${query}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const blogPosts = await res.json();

  return {
    props: {
      blogPosts: blogPosts.data,
    },
  };
};
