import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const usePost = () => {
    const axiosSecure = useAxiosSecure();
    const {refetch, data:postInfos=[]} = useQuery({
        queryKey: ['postInfos'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/post')
            return res.data;
        }
    })
    return [postInfos,refetch]
};

export default usePost;