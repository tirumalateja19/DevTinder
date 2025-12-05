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
        <div className="alert alert-info lg:w-1/6 max-w-sm sm:max-w-md md:max-w-lg">
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
    <div className="h-[100vh]">
      <h1 className="text-center my-10 text-bold text-xl">Requests</h1>

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
          <div key={_id}>
            <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl mb-4">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <img
                    className="h-48 w-full object-cover md:h-full md:w-44"
                    src={photoUrl}
                    alt="Modern building architecture"
                  />
                </div>
                <div className="p-4 text-justify">
                  <div className="text-lg font-semibold tracking-wide text-indigo-500 capitalize">
                    <h2>
                      {firstName + " " + lastName}
                      {age && "," + age}
                      {gender && ", " + gender}
                    </h2>
                  </div>
                  {skills && <p>{skills}</p>}
                  <p className="my-2 text-gray-500 text-start text-sm md:text-base">
                    {about}
                  </p>
                  <div className="card-actions justify-around">
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
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
