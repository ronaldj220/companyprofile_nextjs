import axios from "axios";

export const getTeamData = async () => {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=3");
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
// Import Gambar terkait teams
import img1 from "../../public/assets/img/01.webp";
import img2 from "../../public/assets/img/15.webp";
import img3 from "../../public/assets/img/18.webp";

export const teams = [
  {
    img: img2,
    name: "Andi Pratama",
    role: "Lead Developer",
  },
  {
    img: img1,
    name: "Siti Rahma",
    role: "UI/UX Designer",
  },
  {
    img: img3,
    name: "Budi Santoso",
    role: "Project Manager",
  },
];

