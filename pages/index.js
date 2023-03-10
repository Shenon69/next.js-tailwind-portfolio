import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>STG Phillipsz</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className=" min-h-screen ">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons cursor-pointer dark:text-white">
              STGPhillipsz
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className="text-xl dark:text-white cursor-pointer"
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="text-4xl text-teal-600 font-medium md:text-6xl">
              Trishan Phillipsz
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Loves Shimara Ferdinandez
            </h3>
            <p className="text-md py-5 leading-7 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
              I&apos;m an undergraduate student with a passion for front-end
              development and a deep love for software engineering.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-10 py-3 text-gray-600 dark:text-white">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative overflow-hidden bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" alt="avatar" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl pt-10 pb-5 dark:text-white">
              Services I offer
            </h3>
            <p className="text-md leading-7 text-gray-700 dark:text-white">
              Since the beginning of my journey as a freelance designer and
              developer, I&apos;ve done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-7 text-gray-700 dark:text-white">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className=" lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white ">
              <Image
                src={design}
                className="mx-auto"
                width={80}
                height={100}
                alt="Desing-Image"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I use</h4>
              <p className="text-gray-700 py-1">Figma</p>
              <p className="text-gray-700 py-1">Illustrator</p>
              <p className="text-gray-700 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                src={code}
                className="mx-auto"
                width={80}
                height={100}
                alt="Code-Image"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I use</h4>
              <p className="text-gray-700 py-1">Figma</p>
              <p className="text-gray-700 py-1">Illustrator</p>
              <p className="text-gray-700 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                src={consulting}
                className="mx-auto"
                width={80}
                height={100}
                alt="consulting-Image"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I use</h4>
              <p className="text-gray-700 py-1">Figma</p>
              <p className="text-gray-700 py-1">Illustrator</p>
              <p className="text-gray-700 py-1">Figma</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl pt-10 pb-5 dark:text-white">Portfolio</h3>
            <p className="text-md leading-7 text-gray-700 dark:text-white">
              Since the beginning of my journey as a freelance designer and
              developer, I&apos;ve done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-7 text-gray-700 dark:text-white">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div>
              <Image src={web1} alt="web-1" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="web-2"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="web-3"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="web-4"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="web-5"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="web-6"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
