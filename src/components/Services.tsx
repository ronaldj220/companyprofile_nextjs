import * as React from "react";
import Container from "./Container";
import { FaChrome, FaMobile, FaUser } from "react-icons/fa";

interface IServicesProps {}

const Services: React.FunctionComponent<IServicesProps> = (props) => {
  return (
    <div className="container flex justify-center mx-auto" id="services">
      <Container>
        <div>
          <p className="text-gray-700 text-4xl text-center font-semibold mb-5">
            What We Do?
          </p>
          <div className="grid md:grid-cols-3 max-w-screen-lg mx-auto gap-10 mt-16 px-5 mb-20">
            <div className="flex gap-4 items-center flex-col ">
              <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
                <FaMobile />
              </span>
              <div>
                <h3 className="font-semibold text-xl text-center">
                  Mobile Developer
                </h3>
                <p className="mt-1 text-gray-500 text-justify">
                  Membuat aplikasi canggih untuk perangkat bergerak,
                  menerjemahkan ide menjadi pengalaman digital yang dinamis,
                  menggabungkan kreativitas dengan teknologi untuk membangun
                  solusi yang intuitif dan responsif
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-center flex-col ">
              <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
                <FaChrome />
              </span>
              <div>
                <h3 className="font-semibold text-xl text-center">
                  Web Developer
                </h3>
                <p className="mt-1 text-gray-500 text-justify">
                  Membangun situs web interaktif dan responsif dengan koding
                  yang canggih, memadukan desain dan fungsionalitas untuk
                  menciptakan pengalaman online yang menarik dan efisien.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-center flex-col ">
              <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
                <FaUser />
              </span>
              <div>
                <h3 className="font-semibold text-xl text-center">
                  UI/UX Designer
                </h3>
                <p className="mt-1 text-gray-500 text-justify">
                  Merancang antarmuka yang menawan dan intuitif untuk
                  memaksimalkan pengalaman pengguna, memperhatikan detail visual
                  dan interaksi, menciptakan desain yang menginspirasi dan
                  memudahkan navigasi bagi pengguna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
