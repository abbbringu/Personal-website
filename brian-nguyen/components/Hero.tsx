import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Hej! Trevlight Att Träffas! 👋</h1>

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
          mig <span className="font-bold blue_gradient">Next.js</span> och
          fullstack utveckling. Har dessutom programmerat i Python, JavaScript,
          C#, C++ och Java.
        </p>

        <button title="Explore Cars" />
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
