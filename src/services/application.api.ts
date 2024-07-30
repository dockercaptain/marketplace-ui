import axios from "axios";

export const fetchApplications = async () => {
  const response = await axios.get("/apps");
  return response.data;
};
