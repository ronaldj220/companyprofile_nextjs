"use client";
import { getTeamData } from "@/utils/teams";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";

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
    <div className="container flex justify-center mx-auto" id="teams">
      <div>
        <p className="text-gray-700 text-4xl text-center font-semibold mb-7">
          Our Team
        </p>
        <div className="flex justify-center">
          <ReactTyped
            className="max-w-lg text-[20px] font-semibold sm:text-[20px] md:text-center mb-10"
            strings={["Twiscode"]}
            backSpeed={140}
            typeSpeed={120}
            loop
          />
        </div>
        <ul className="grid grid-cols-1 gap-40 md:grid-cols-3">
          {team.map((user, index) => (
            <li key={index} className="text-center">
              <Image
                unoptimized
                src={user.picture?.large || "/default-image.jpg"}
                alt={`${user.name?.first} ${user.name?.last}`}
                width={50}
                height={50}
                className="mx-auto w-24 h-24 rounded-full mb-2"
              />
              <p className="font-bold">{`${user.name?.first} ${user.name?.last}`}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Teams;
