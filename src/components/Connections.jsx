import axios from "axios";
import React, { useEffect } from "react";
import { SERVER_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.connection);
  const fetchConnections = async () => {
    try {
      const res = await axios.get(SERVER_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnection(res.data.data));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchConnections();
  }, []);
  if (!data) return;

  if (data.length === 0) return <h1> No Connections Found</h1>;
  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-3xl">Connections</h1>

      {data.map((connection) => {
        const {
          _id,
          firstName,
          lastName,
          photoUrl,
          age,
          gender,
          about,
          skills,
        } = connection;

        return (
          <div
            key={_id}
            className=" flex m-4 p-4 rounded-lg bg-base-300 w-2/5 mx-auto"
          >
            <div className="avatar">
              <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={photoUrl} alt="userImage" />
              </div>
            </div>
            <div className="text-left mx-4 ">
              <h2 className="font-bold text-xl capitalize">
                {firstName + " " + lastName}
              </h2>
              {age && <p>{age}</p>}
              {gender && <p className="capitalize">{gender}</p>}
              {skills && <p>{skills}</p>}
              <p>{about}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
