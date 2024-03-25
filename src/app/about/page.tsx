"use client";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import { getTeamData } from "@/datas/teams";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";

interface IAboutPageProps {
  name?: {
    first?: string;
    last?: string;
  };
  picture?: {
    large: string;
  };
}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
  const [team, setTeam] = useState<IAboutPageProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getTeamData();
      setTeam(userData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div
        className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4"
      >
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
              <div className="flex justify-center space-y-5">
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
          <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
            <div className="w-full lg:w-8/12 lg:pt-16">
              <div className="hidden md:grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                {team.map((user, index) => (
                  <div
                    key={index}
                    className="p-4 pb-6 flex justify-center flex-col items-center "
                  >
                    <div className="flex flex-col items-center">
                      <Image
                        unoptimized
                        src={user.picture?.large || "/default-image.jpg"}
                        alt={`${user.name?.first} ${user.name?.last}`}
                        width={50}
                        height={50}
                        className="mx-auto w-24 h-24 rounded-full mb-2"
                      />
                      <p className="font-bold mt-2">{`${user.name?.first} ${user.name?.last}`}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-7/12 flex flex-col justify-center">
              <h1 className="text-2xl lg:text-3xl font-bold leading-9 text-gray-800 dark:text-black pb-4 text-center">
                Cerita Kami
              </h1>
              <p className="font-normal text-base leading-6 text-gray-600 dark:text-black text-justify">
                Di tengah lautan teknologi yang terus berubah dan berkembang,
                Twiscode lahir dari semangat inovasi dan tekad untuk menciptakan
                solusi-solusi digital yang mengubah paradigma, memulai
                perjalanannya sebagai impian kecil yang ditanamkan oleh
                sekelompok visioner yang bercita-cita tinggi, dan berkembang
                menjadi salah satu pemimpin dalam industri dengan fokus tak
                tergoyahkan pada keunggulan teknologi, pelayanan pelanggan yang
                tak tertandingi, dan komitmen yang teguh untuk memberikan dampak
                positif bagi masyarakat. Mereka lah yang membangun perusahaan
                ini agar bisa berkembang hingga saat ini.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-8 pt-12">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <h2 className="text-2xl lg:text-3xl font-bold leading-9 text-gray-800 dark:text-black pb-4 text-center pt-6">
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
            <div className="w-full lg:w-5/12 relative lg:block">
              <Image
                src="/assets/img/Rectangle 2.png"
                alt="Full of Teams"
                width={500}
                height={400}
                className="rounded-[6rem] rounded-br-none rounded-tl-none"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AboutPage;

