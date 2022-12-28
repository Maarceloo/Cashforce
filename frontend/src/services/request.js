import axios from "axios";

export const getData = async () => {
  try {
    const URL = `http://localhost:3001/invoices`;
    const { data } = await axios.get(URL);
    return data;
  } catch (error) {
    return { mesage: error };
  }
};