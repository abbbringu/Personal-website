import React from "react";
import { Button } from "../ui/button";
import { ArrowUpRightFromCircleIcon, InfoIcon } from "lucide-react";

const Certifications = () => {
  return (
    <div
      className="w-full flex justify-center items-center bg-white text-black"
      id="myWork"
    >
      <div className="max-w-6xl h-full w-full flex-col flex p-5 gap-3">
        <div className="text-center">
          <h1>My Work</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center">
          <div className="h-[450px] w-full rounded-2xl relative bg-black text-white overflow-hidden z-0 group">
            {/* Blob */}
            <div
              className="absolute -z-20 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 rounded-full w-64 h-64 opacity-0 group-hover:opacity-70 transition-all duration-1000  
                        bg-gradient-to-r from-purple-500 to-pink-600"
            ></div>
            <div className="absolute w-full h-full -z-10 blur"></div>
            {/* Image */}
            <div className="bg-sky-300 h-2/5"></div>
            <div className="p-3 flex flex-col w-full h-full ">
              <div className=" absolute bottom-5 right-5 text-black">
                <Button variant="default" size="sm" className="mr-3">
                  Demo
                  <ArrowUpRightFromCircleIcon className="w-4 h-4 ml-2 group-hover:ml-3 group-hover:scale-110 transition-all" />
                </Button>
                <Button variant="outline" size="sm">
                  Info
                  <InfoIcon className="w-4 h-4 ml-2 group-hover:ml-3 group-hover:scale-110 transition-all" />
                </Button>
              </div>
              <div>
                <h3>Personal Website</h3>
                <p>
                  sfnksa fjksafskfasdj fsld fsodjf uiosdj fahsdifhsdog
                  diushfisfhi asdfas dfasd fsad fsa df
                </p>
              </div>
            </div>
          </div>

          <div className="h-[450px] w-full rounded-2xl  bg-slate-900 text-white overflow-hidden">
            <div className="bg-sky-300 h-2/5"></div>
          </div>
          <div className="h-[450px] w-full rounded-2xl  bg-slate-900 text-white overflow-hidden">
            <div className="bg-sky-300 h-2/5"></div>3
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
