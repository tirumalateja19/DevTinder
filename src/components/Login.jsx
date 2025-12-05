import axios from "axios";
import { useState } from "react";
import { SERVER_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [emailId, setemailId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        SERVER_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
      setError(err?.response?.data);
      console.error(err);
    }
  };
  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        SERVER_URL + "/signup",
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      navigate("/profile");
    } catch (err) {
      setError(err?.response?.data);
      console.error(err);
    }
  };
  return (
    <div className=" h-[80vh] flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl ">
        <div className="card-body">
          <h2 className="card-title text-center">
            {isLoginForm ? "Login" : "SignUp"}
          </h2>
          <div>
            {!isLoginForm && (
              <>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">FirstName : </span>
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="form-control w-full max-w-xs mt-3">
                  <label className="label">
                    <span className="label-text">LastName : </span>
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
              </>
            )}
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
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div>
            <span className="text-red-500 m-2">{error}</span>
          </div>
          <div className="card-actions justify-center">
            <button
              className="btn btn-sm btn-success"
              onClick={isLoginForm ? handleSubmit : handleSignUp}
            >
              {isLoginForm ? "login" : "signup"}
            </button>
          </div>
          <div>
            <p
              className="cursor-pointer text-center mt-3"
              onClick={() => setIsLoginForm((value) => !value)}
            >
              {isLoginForm
                ? "New User? Signup Here"
                : "Existing User? Login Here"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
