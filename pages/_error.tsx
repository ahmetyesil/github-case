import { BsArrowRight } from "react-icons/bs";
import * as React from "react";
import router from "next/router";
import {SeoHead} from "@/Core/index";
import useTranslation from "next-translate/useTranslation";

export type ErrorProps = {
  statusCode: number;
  title?: string;
  withDarkMode?: boolean;
};
const Error = ({ statusCode }: ErrorProps) => {
  const {t, lang} = useTranslation("common");
  return (
     <>
       <SeoHead title="Github Case - Not Found" />
         <div className=" min-h-[500px] relative z-[0] bg-white">
             <div className="text-center  bg-cover bg-bottom bg-center py-20  font-bold ">
                 <p className="text-2xl md:text-4xl text-dark-green mt-5 md:mt-9 font-bold">
                     Page not found!
                 </p>
                 <p className="font-normal text-base md:text-lg text-black mt-8 max-w-[380px] mx-auto">
                     This page does not exist or has been removed! We recommend that you return to the Home Page.
                 </p>
                 <button
                     className="cursor-pointer text-green text-xl mt-10 md:mt-8"
                     onClick={() => router.push("/")}
                 >
                     {t("home")} <BsArrowRight/>
                 </button>
             </div>
         </div>
     </>
)
    ;
};

Error.getInitialProps = ({res, err}: any) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return {statusCode};
};

export default Error;
