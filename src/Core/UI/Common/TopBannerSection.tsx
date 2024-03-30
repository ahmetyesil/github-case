import * as React from "react";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
const TopBannerSection = () => {
    const router = useRouter();
    return (
        <section>
            <div className="relative  min-h-[200px] p-5 bg-gray-200">
              {router.pathname !== '/' &&  <Link href="/">
                <IoMdArrowBack className="text-2xl" />
              </Link>}
            </div>
        </section>
    );
};

export default TopBannerSection;
