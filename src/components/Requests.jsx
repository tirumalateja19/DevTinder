import axios from "axios";
import { SERVER_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequest, removeRequest } from "../utils/requestSlice";
import { useEffect } from "react";

const Requests = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.request);

  const reviewRequest = async (status, _id) => {
    try {
      await axios.post(
        SERVER_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(_id));
    } catch (err) {
      console.error(err);
    }
  };

  const fetchRequest = async () => {
    try {
      const res = await axios.get(SERVER_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequest(res.data.data));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchRequest();
  }, []);

  if (!data) return;

  if (data.length === 0)
    return (
      <div className="flex justify-center items-center my-14">
        <div className="alert alert-info w-1/6 ">
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
          <span>No Requests Found</span>
        </div>
      </div>
    );
  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-3xl">Connections</h1>

      {data.map((request) => {
        const {
          _id,
          firstName,
          lastName,
          photoUrl,
          age,
          gender,
          about,
          skills,
        } = request.fromUserId;

        return (
          <div>
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
              <div className="card-actions">
                <button
                  className="btn btn-sm btn-error"
                  onClick={() => {
                    reviewRequest("rejected", request._id);
                  }}
                >
                  Reject
                </button>
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => {
                    reviewRequest("accepted", request._id);
                  }}
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
