import Image from "next/image";
import Container from "./Container";
import Link from "next/link";

interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = (props) => {
  return (
    <div
      className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4"
      id="about"
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
            <div className="flex justify-center">
              <Link
                href="/about"
                className="bg-orange-500 text-white p-2 rounded-full"
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-8/12 relative hidden lg:block">
            <Image
              src="/assets/img/Rectangle-116.png"
              alt="Full of Teams"
              width={733}
              height={415}
              className="rounded-[6rem] rounded-br-none rounded-tl-none"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
