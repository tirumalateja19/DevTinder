import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import axios from "axios";
import { SERVER_URL } from "../utils/constants";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";

const FeedPage = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const fetchFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(SERVER_URL + "/user/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.data));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchFeed();
  }, []);
  if (!feed) return;

  if (feed.length === 0)
    return (
      <div className="flex justify-center items-center my-14">
        <div className="alert alert-info lg:w-1/6 max-w-sm sm:max-w-md md:max-w-lg ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>No New Users Found</span>
        </div>
      </div>
    );
  return (
    feed && (
      <div className="flex justify-center items-center lg:h-[80vh] h-[70vh]">
        <UserCard user={feed[0]} />
      </div>
    )
  );
};

export default FeedPage;
