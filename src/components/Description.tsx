import { images } from "@/utils/images";

import left from "../../public/assets/img/left.svg";
import right from "../../public/assets/img/right.svg";
import Image from "next/image";
import { motion } from "framer-motion";

interface IDescriptionProps {
  clickPrev: any;
  cickNext: any;
  activeImgIndex: any;
}

const Description: React.FunctionComponent<IDescriptionProps> = (props) => {
  return (
    <div className="grid place-items-center w-full bg-[#e7dfd9] relative rounded-tr-3xl rounded-br-3xl ">
      <div className="uppercase text-sm absolute right-16 top-3 underline-offset-4 underline ">
        Services
      </div>
      {images.map((elem, idx) => (
        <div
          key={idx}
          className={
            idx === props.activeImgIndex
              ? `block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out`
              : `hidden`
          }
        >
          <motion.div
            initial={{
              opacity: idx === props.activeImgIndex ? 0 : 0.5,
              scale: idx === props.activeImgIndex ? 0.5 : 0.3,
            }}
            animate={{
              opacity: idx === props.activeImgIndex ? 1 : 0.5,
              scale: idx === props.activeImgIndex ? 1 : 0.3,
            }}
            transition={{ ease: "linear", duration: 2, x: { duration: 1 } }}
            className="w-full"
          >
            <div className="py-16 text-5xl font-extrabold ">{elem.title}</div>
            <div className="leading-relaxed font-medium text-base tracking-wide h-40 italic text-gray-600">
              {elem.desc}
            </div>
          </motion.div>
          <div className="absolute bottom-1 w-full flex justify-center items-center">
            <div
              className="absolute bottom-2 right-10 cursor-pointer"
              onClick={props.clickPrev}
            >
              <Image src={left} alt="alt" width={20} height={20} />
            </div>
            <div
              className="absolute bottom-2 right-2 cursor-pointer"
              onClick={props.cickNext}
            >
              <Image src={right} alt="alt" width={20} height={20} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;
