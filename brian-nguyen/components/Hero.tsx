import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 mx-5">
        <h1 className="hero__title">Hej! Trevligt Att Träffas 👋</h1>

        <p className="hero__subtitle">
          Jag heter <span className="font-bold blue_gradient">Brian</span> och
          jag är en <span className="font-bold blue_gradient">datateknik</span>{" "}
          student på{" "}
          <span className="font-bold blue_gradient">
            Chalmers Tekniska Högskola
          </span>
          . Jag har programmerat sedan gymnasiet och skapat IoT-enheter och
          applikationer. Jag fortsatt med programmering och lärt mig olika
          koncept som funktionell programmering, objektorienterad programmering,
          datastrukturer, parallell programmering osv. För tillfället lär jag
          mig fullstack-utveckling med{" "}
          <span className="font-bold blue_gradient">Next.js</span>. Har dessutom
          programmerat i Python, JavaScript, C#, C++ och Java.
        </p>

        <a
          className=" mt-5 flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
          href="https://github.com/steven-tey/precedent"
          target="_blank"
        >
          <p className="font-semibold">Mer info</p>
        </a>
      </div>
      <div className="hero__image-container">
        <div className="hero__image flex justify-center items-center">
          <div className="p-10 bg-white rounded-full mb-10">
            <Image
              src="/brian.jpg"
              alt="hero"
              width={512}
              height={512}
              className="object-contain rounded-full drop-shadow-xl"
            />
          </div>
        </div>
        {/* Overlay */}
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};
export default Hero;
