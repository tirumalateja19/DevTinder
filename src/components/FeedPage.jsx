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

  return (
    feed && (
      <div className="flex justify-center items-center mt-7">
        <UserCard user={feed[0]} />
      </div>
    )
  );
};

export default FeedPage;
