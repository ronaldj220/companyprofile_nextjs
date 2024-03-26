"use client";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = (props) => {
  return (
    <div>
      <Navbar />
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <h1 className="text-2xl lg:text-3xl font-bold leading-9 text-gray-800 dark:text-black pb-4 text-center">
                About Us
              </h1>
              <p className="font-normal text-base leading-6 text-gray-600 dark:text-black md:text-justify text-justify">
                Twiscode adalah perusahaan teknologi yang berfokus pada
                pengembangan perangkat lunak inovatif untuk memenuhi kebutuhan
                bisnis modern. Didirikan pada tahun 2023, Twiscode telah menjadi
                mitra terpercaya bagi berbagai perusahaan di seluruh dunia dalam
                menghadapi tantangan teknologi yang kompleks.
              </p>
              <div className="flex justify-center space-y-5 mt-5">
                <Link
                  href="/"
                  className="bg-orange-500 text-white rounded-full px-4 py-2 pb-2"
                >
                  <div className="flex justify-center items-center">
                    <span>
                      <FaArrowLeft />
                    </span>
                    Kembali
                  </div>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-8/12 relative lg:block">
              <Image
                src="/assets/img/Rectangle-116.png"
                alt="Full of Teams"
                width={733}
                height={415}
                className="rounded-[6rem] rounded-br-none rounded-tl-none"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-8 pt-12">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <h2 className="text-2xl lg:text-3xl font-bold leading-9 text-gray-800 dark:text-black pb-4 text-center">
                Visi
              </h2>
              <p className="font-normal text-base leading-6 text-gray-600 dark:text-black md:text-justify text-justify">
                Menjadi penyedia solusi teknologi informasi terkemuka yang
                memberdayakan perubahan positif di berbagai bidang dengan
                menghadirkan inovasi dan keunggulan teknologi.
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold leading-9 text-gray-800 dark:text-black pb-4 text-center pt-6">
                Misi
              </h2>
              <p className="font-normal text-base leading-6 text-gray-600 dark:text-black md:text-justify text-justify">
                Mengintegrasikan keahlian dalam pengembangan sistem informasi,
                baik untuk web, Android, maupun desain UI/UX, guna menciptakan
                solusi yang efisien, intuitif, dan berkualitas tinggi untuk
                memenuhi kebutuhan klien.
              </p>
            </div>
            <div className="w-full lg:w-8/12 relative lg:block">
              <Image
                src="/assets/img/Rectangle 2.png"
                alt="Full of Teams"
                width={733}
                height={415}
                className="rounded-[6rem] rounded-br-none rounded-tl-none"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default About;
