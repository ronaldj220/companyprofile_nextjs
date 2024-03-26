"use client";
import Link from "next/link";
import * as React from "react";
import { ReactTyped } from "react-typed";
import { useState, useEffect } from "react";
import { getblogPost } from "@/utils/contentful";
import Image from "next/image";
import * as React from "react";

interface IArticlesProps {}

const Articles: React.FunctionComponent<IArticlesProps> = (props) => {
  const [article, setArticle] = useState<any[]>([]);
  const getOtherArticles = async () => {
    try {
      const res = await getblogPost();
      console.log(res);
      setArticle(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getOtherArticles();
  }, []);
  return (
    <div id="articles" className="container flex justify-center mx-auto">
      <div>
        <p className="text-gray-700 text-4xl text-center font-semibold mb-7 mt-10">
          Our Post
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
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-40">
          {article.map((article, index) => (
            <li key={index} className="text-center">
              <Image
                unoptimized
                src={article.image.fields.file.url || "/default-image.jpg"}
                alt={article.title || "Article Image"}
                width={100}
                height={50}
                className="mx-auto w-24 h-24 rounded-full mb-2"
              />
              <div className="p-4">
                <p className="text-xl font-semibold text-gray-800">
                  {article.title}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <Link
            href="/article"
            className="bg-orange-500 text-white rounded-full p-2"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Articles;
