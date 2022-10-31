import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="relative">
      <div className="relative">
        <nav className="bg-white fixed top-0 z-[99] w-full">
          <div className="flex items-center my-[25px] px-20 w-[91%] max-w-[1280px] mx-auto">
          <Link href="/dacade">
            <div className="flex items-center">
              <div>
                <img src="/assets/logo.svg" />
              </div>
              <div className="ml-2 hidden md:block text-zinc-700 font-bold text-lg">
                <p>Dacade</p>
              </div>
            </div>
            </Link>
            <div class="border-gray-200 border-solid border-r-2 lg:mx-[11px] mx-1.5"></div>
            <Link href="/near">
            <div className="w-full h-full">
              <img src="/assets/svgexport-2.svg"  />
            </div>
            </Link>
            <div className="flex text-black font-normal lg:text-lg text-base items-center ml-auto font-primary">
              <button className="lg:block bg-transparent  border-none text-default focus:outline-none cursor-pointer leading-4 transition-250ms w-fit border-accent border rounded-full px-5 py-3 rounded-4xl inline-block">
                Start the Course
              </button>
              <Link href="/create-wallet">
              <button className="ml-12 bg-zinc-700 text-white  focus:outline-none cursor-pointer leading-4 transition-250ms w-fit border-accent border-solid border rounded-full px-5 py-3 rounded-4xl inline-block">
                Create Wallet
              </button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
