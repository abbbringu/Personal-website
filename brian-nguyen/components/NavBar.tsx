import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="w-full  absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-4 py-4 bg-transparent">
        <Link href="/" className="flex-1 justify-center items-center">
          <h1 className="2xl:text-[42px] sm:text-[36px] text-[24px] font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
            Brian Nguyen
          </h1>
        </Link>
        <div className="items-center flex justify-center gap-2 pr-5">
          <a
            className="animate-pulse hover:animate-none flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-md text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href="https://github.com/steven-tey/precedent"
            target="_blank"
          >
            <p>
              <span className="hidden sm:inline-block">Visa</span> CV
            </p>
          </a>
          <Link
            href="https://www.linkedin.com/in/brian-nguyen-data/"
            target="_blank"
          >
            <Image
              src="/linkedin.svg"
              alt="logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </Link>

          <Link href="https://github.com/abbbringu" target="_blank">
            <Image
              src="/github.svg"
              alt="logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
