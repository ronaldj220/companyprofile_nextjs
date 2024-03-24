import axios from "axios";

export const getTeamData = async () => {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=3");
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
