import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";

interface IServiceProps {}

const Service: React.FunctionComponent<IServiceProps> = (props) => {
  return (
    <div>
      <Navbar />
      <Slider />
    </div>
  );
};

export default Service;
