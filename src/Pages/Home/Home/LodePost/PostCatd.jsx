import PropTypes from "prop-types";
import { IoHeartDislikeCircle } from "react-icons/io5";
import { IoIosHeartHalf } from "react-icons/io";
import { FaShare, FaComment } from "react-icons/fa";
import { useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
const PostCatd = ({ item,refetch}) => {
  const axiosSecure = useAxiosSecure();

  const {
    authorImage,
    authorName,
    date,
    downVote,
    postDescription,
    postTitle,
    tag,
    time,
    upVote,
    _id,
  } = item || {};
  const [upvotes, setUpvotes] = useState(upVote);
  const [downvotes, setDownvotes] = useState(downVote);

  const handleUpvote = (id) => {
    setUpvotes(upvotes + 1);
    axiosSecure.patch(`/post/${id}`,upvotes)
    .then(res =>{
        if(res.data.modifiedCount > 0){
            refetch()
        }
    })
  };

  const handleDownvote = (id) => {
    setDownvotes(downvotes + 1);
    axiosSecure.patch(`/post/${id}`,downvotes)
    .then(res =>{
        if(res.data.modifiedCount > 0){
            refetch()
        }
    })
  };
  return (
    <article className="flex flex-col dark:bg-gray-900 shadow-md rounded-md">
      <div className="flex flex-col flex-1 p-6">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Te nulla oportere reprimique his dolorum"
        ></a>
        <a
          rel="noopener noreferrer"
          href="#"
          className="text-xs tracki uppercase hover:underline dark:text-violet-400 font-medium"
        >
          #{tag}
        </a>

        <div className="flex flex-wrap justify-between -pt-4 space-x-2 text-xs dark:text-gray-400 mt-3">
          <div className="avatar gap-3">
            <div className="w-8 h-8 rounded-full">
              <img src={authorImage} />
            </div>
            <div>
              <p className="font-semibold">{authorName}</p>
              <span>
                {time} {date}
              </span>
            </div>
          </div>
          <span>2.1K views</span>
        </div>
        <h3 className="flex-1 py-2 -mt-16 text-lg font-semibold leadi">
          {postTitle}
        </h3>
        <p>
          {postDescription && postDescription.length <= 100
            ? postDescription
            : postDescription.slice(0, 100)}
        </p>
        <div className="divider"></div>
        <div className="flex justify-between items-center  gap-4 -mt-5">
          <div className="flex flex-col-reverse justify-center items-center gap-2 ">
            <span
              
              className="flex gap-0.5 text-xs items-center"
            >
              <IoIosHeartHalf onClick={() => handleUpvote(_id)}
              className="text-2xl" />
              Like
            </span>
            <span className="">{upvotes}</span>
          </div>
          <div className="flex flex-col-reverse justify-center items-center gap-2 ">
            <span
              
              className="flex gap-0.5 text-xs items-center"
            >
              <IoHeartDislikeCircle onClick={()=>handleDownvote(_id)}
               className="text-2xl" />
              Dislike
            </span>
            <span className="">{downvotes}</span>
          </div>
          <div className="flex flex-col-reverse justify-center items-center gap-2 ">
            <span className="flex gap-0.5 text-xs items-center">
              <FaComment className="text-2xl" />
              Comments
            </span>
            <span className="divider-success">{43}</span>
          </div>
          <div className="flex flex-col-reverse justify-center items-center gap-2 ">
            <span className="flex gap-0.5 text-xs items-center">
              <FaShare className="text-2xl" />
              Share
            </span>
            <span className="divider-success">{43}</span>
          </div>
        </div>
      </div>
    </article>
  );
};
PostCatd.propTypes = {
  item: PropTypes.object,
  refetch: PropTypes.func,
};
export default PostCatd;
