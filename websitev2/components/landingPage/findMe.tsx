import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";

const CV = () => {
  return (
    <div className="w-full flex justify-center items-center" id="cv">
      <div className="max-w-6xl w-full flex-col items-center flex p-5 gap-3">
        <div className="text-center">
          <h1>CV</h1>
        </div>
        <Button>Download CV</Button>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>View CV</AccordionTrigger>
            <AccordionContent>
              <div className="w-[90vw] h-[80vh] bg-emerald-400">
                <object
                  data="BrianNguyenCV.pdf"
                  type="application/pdf"
                  width="100%"
                  height="100%"
                >
                  <p>CV did not load right, Please download the PDF</p>
                </object>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default CV;
