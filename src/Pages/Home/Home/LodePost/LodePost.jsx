
import PostCatd from "./PostCatd";
import usePost from "../../../../Hooks/usePost";

const LodePost = () => {
    const [postInfos,refetch] = usePost();

  return (
    <div>
      <div className="text-center md:w-4/12 mx-auto my-8">
        <p className="text-[#D99904] font-medium pb-2">POST</p>
        <h3 className="text-4xl border-y-2 ">NEWS FEED</h3>
        <p>What is on your mind</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 justify-center items-center">
        { postInfos &&
          postInfos.map((item) => (
            <PostCatd key={item._id} refetch={refetch} item={item}></PostCatd>
          ))}
      </div>
    </div>
  );
};

export default LodePost;
