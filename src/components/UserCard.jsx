import axios from "axios";
import React from "react";
import { SERVER_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const { firstName, lastName, gender, about, photoUrl, skills, age, _id } =
    user;
  const dispatch = useDispatch();
  const sendRequest = async (status, userId) => {
    try {
      await axios.get(SERVER_URL + "/request/send/" + status + "/" + userId, {
        withCredentials: true,
      });
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={photoUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title capitalize">
          {firstName + " " + lastName}
          {age && "," + age}
        </h2>
        {gender && <p className="capitalize">{gender}</p>}
        {skills && <p>{skills}</p>}
        <p className="text-justify">{about}</p>
        <div className="card-actions justify-between mt-3">
          <button
            className="btn btn-sm btn-secondary"
            onClick={() => {
              sendRequest("ignored", _id);
            }}
          >
            Ignore
          </button>
          <button
            className="btn btn-sm btn-primary"
            onClick={() => {
              sendRequest("interested", _id);
            }}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
