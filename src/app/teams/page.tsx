"use client";
import Navbar from "@/components/Navbar";
import * as React from "react";
import { ReactTyped } from "react-typed";
import { useState, useEffect } from "react";
import { getTeamData } from "@/utils/teams";
import Image from "next/image";
import Link from "next/link";

interface ITeamsProps {
  name?: {
    first?: string;
    last?: string;
  };
  picture?: {
    large: string;
  };
}

const Teams: React.FunctionComponent<ITeamsProps> = (props) => {
  const [team, setTeam] = useState<ITeamsProps[]>([]);

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
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black">
              Our Team
            </h2>
            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              Explore the whole collection of open-source web components and
              elements built with the utility classes from
              <span className="ml-2">
                <ReactTyped
                  className="max-w-lg text-[20px] font-semibold sm:text-[20px] md:text-center mb-10"
                  strings={["Twiscode"]}
                  backSpeed={140}
                  typeSpeed={120}
                  loop
                />
              </span>
            </p>
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800">
              {team.map((val, idx) => (
                <li key={idx} className="text-center">
                  <Image
                    unoptimized
                    src={val.picture?.large || "/default-image.jpg"}
                    alt={`${val.name?.first} ${val.name?.last}`}
                    width={50}
                    height={50}
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  />
                  <p className="font-bold text-white">{`${val.name?.first} ${val.name?.last}`}</p>
                </li>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <Link
              href="/"
              className="bg-orange-300 text-white p-2 rounded-full"
            >
              Kembali
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teams;
