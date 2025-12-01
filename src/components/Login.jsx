import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [emailId, setemailId] = useState("sheldon@gmail.com");
  const [password, setPassword] = useState("bazzinga@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5656/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-base-100 shadow-xl ">
        <div className="card-body">
          <h2 className="card-title text-center">Login</h2>
          <div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Mail Id: </span>
              </label>
              <input
                type="text"
                value={emailId}
                onChange={(e) => {
                  setemailId(e.target.value);
                }}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs mt-3">
              <label className="label">
                <span className="label-text">Password: </span>
              </label>
              <input
                type="text"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="card-actions justify-center mt-5">
            <button className="btn btn-sm btn-success" onClick={handleSubmit}>
              login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
