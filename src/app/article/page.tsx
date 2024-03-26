"use client";
import Navbar from "@/components/Navbar";
import { getblogPost } from "@/utils/contentful";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useEffect, useState } from "react";

interface IArticleProps {}

const Article: React.FunctionComponent<IArticleProps> = (props) => {
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
    <div>
      <Navbar />
      <div>
        <p className="text-gray-700 text-4xl text-center font-semibold mb-7 mt-10">
          Our Article
        </p>
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
                <p className="text-gray-600 mt-2 text-justify">
                  {article.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <Link href="/" className="bg-orange-500 text-white p-2">
            Kembali
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Article;
