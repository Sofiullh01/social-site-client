import axios from "axios";

const axiosOpne = axios.create({
    baseURL: 'https://assignment-12-server-roan.vercel.app',
  });

const useAxionOpne = () => {
    return axiosOpne
};

export default useAxionOpne;