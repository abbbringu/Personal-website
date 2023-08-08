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
import { DownloadIcon } from "lucide-react";

const CV = () => {
  return (
    <div className="w-full flex justify-center items-center" id="cv">
      <div className="max-w-6xl w-full flex-col items-center flex p-5 gap-3">
        <div className="text-center">
          <h1>CV</h1>
        </div>
        <Button>
          Download
          <DownloadIcon className="ml-3 w-5 h-5x" />
        </Button>

        <Accordion type="single" collapsible>
          <AccordionItem
            value="item-1"
            className="w-[90vw] md:w-[70vw] lg:w-[60vw]"
          >
            <AccordionTrigger>View CV</AccordionTrigger>
            <AccordionContent>
              <div className="w-[90vw] md:w-[70vw] lg:w-[60vw] h-[80vh]">
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
