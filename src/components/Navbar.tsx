import { useState } from "react";
import Container from "./Container";
import { Link } from "react-scroll";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="bg-white">
      <Container>
        <nav>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
            <div className="flex items-center justify-between w-full h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link
                    to="/"
                    className="uppercase text-[#414141] font-extrabold cursor-pointer"
                    smooth={true}
                    duration={500}
                  >
                    twiscode
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex flex-grow justify-center">
                <div className="ml-4 flex items-center space-x-4">
                  <Link
                    to=""
                    className="text-black hover:bg-black hover:text-white hover:underline hover:underline-offset-8 rounded-lg p-2 cursor-pointer"
                    smooth={true}
                    duration={1000}
                    duration={500}
                  >
                    Home
                  </Link>
                  <Link
                    to="testimonial"
                    className="text-black hover:bg-black hover:text-white hover:underline hover:underline-offset-8 rounded-lg p-2 cursor-pointer"
                    smooth={true}
                    duration={1000}
                    duration={500}
                  >
                    Testimonial
                  </Link>
                  <Link
                    to="about"
                    className="text-black hover:bg-black hover:text-white hover:underline hover:underline-offset-8 rounded-lg p-2 cursor-pointer"
                    smooth={true}
                    duration={1000}
                  >
                    About
                  </Link>
                  <Link
                    to="services"
                    className="text-black hover:bg-black hover:text-white hover:underline hover:underline-offset-8 rounded-lg p-2 cursor-pointer"
                    smooth={true}
                    duration={1000}
                    duration={500}
                  >
                    About
                  </Link>
                  <a
                    href="/"
                    className="text-black hover:bg-black hover:text-white hover:underline hover:underline-offset-8 rounded-lg p-2"
                  >
                    Service
                  </Link>
                  <Link
                    to="teams"
                    className="text-black hover:bg-black hover:text-white hover:underline hover:underline-offset-8 rounded-lg p-2 cursor-pointer"
                    smooth={true}
                    duration={1000}
                  >
                    Teams
                  </Link>
                  <Link
                    to="articles"
                    className="text-black hover:bg-black hover:text-white hover:underline hover:underline-offset-8 rounded-lg p-2 cursor-pointer"
                    smooth={true}
                    duration={1000}
                  >
                    Article
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <span className="text-black rounded-lg p-2 hover:bg-blue-400 hover:text-white hover:underline hover:underline-offset-8 cursor-pointer">
                  Login
                </span>
              </div>
              <div className="md:hidden flex items-center">
                <button
                  className="inline-flex items-center justify-center p-2 rounded-md text-black md:text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
                  onClick={handleNav}
                >
                  {nav ? (
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          {nav && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 absolute">
                <Link
                  to=""
                  className="text-black block hover:bg-black hover:text-white hover:underline hover:underline-offset-8 rounded-lg p-2 cursor-pointer"
                  smooth={true}
                  duration={500}
                >
                  Home
                </Link>
                <Link
                  to="testimonial"
                  className="text-black block hover:bg-black hover:text-white hover:underline hover:underline-offset-8 rounded-lg p-2 cursor-pointer"
                  smooth={true}
                  duration={500}
                >
                  Testimonial
                </Link>
                <Link
                  to="about"
                  className="text-black hover:bg-black block hover:text-white hover:underline hover:underline-offset-8 rounded-lg p-2 cursor-pointer"
                  smooth={true}
                  duration={500}
                >
                  About
                </Link>
                <Link
                  to="services"
                  className="text-black hover:bg-black block hover:text-white hover:underline hover:underline-offset-8 rounded-lg p-2 cursor-pointer"
                  smooth={true}
                  duration={500}
                >
                  Services
                </Link>
                <Link
                  to="teams"
                  className="text-black hover:bg-black block hover:text-white hover:underline hover:underline-offset-8 rounded-lg p-2 cursor-pointer"
                  smooth={true}
                  duration={500}
                >
                  Teams
                </Link>
              </div>
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
