import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SERVER_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";
import UserCard from "./UserCard";

const EditDetails = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [about, setAbout] = useState(user.about);
  const [gender, setGender] = useState(user.gender);
  const [age, setAge] = useState(user.age);
  const [showToast, setShowToast] = useState(false);

  const dispatch = useDispatch();
  const saveProfile = async () => {
    try {
      const res = await axios.patch(
        SERVER_URL + "/profile/edit",
        { firstName, lastName, photoUrl, age, gender, about },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="flex justify-center gap-10">
        <div className="card w-96 bg-base-100 shadow-xl ">
          <div className="card-body">
            <h2 className="card-title text-center">Edit Profile</h2>
            <div>
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
              <div className="form-control w-full max-w-xs">
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
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">PhotoUrl : </span>
                </label>
                <input
                  type="text"
                  value={photoUrl}
                  onChange={(e) => {
                    setPhotoUrl(e.target.value);
                  }}
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Age : </span>
                </label>
                <input
                  type="text"
                  value={age}
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Gender : </span>
                </label>
                <select
                  className="select w-full max-w-xs"
                  value={gender}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                >
                  <option disabled selected>
                    Pick your Gender
                  </option>
                  <option>male</option>
                  <option>female</option>
                  <option>others</option>
                  <option>rather not say</option>
                </select>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">About : </span>
                </label>
                <textarea
                  value={about}
                  onChange={(e) => {
                    setAbout(e.target.value);
                  }}
                  className="textarea textarea-warning"
                  placeholder="Bio"
                ></textarea>
              </div>
            </div>
            <div className="card-actions justify-center mt-3">
              <button className="btn btn-sm btn-success" onClick={saveProfile}>
                Save profile
              </button>
            </div>
          </div>
        </div>
        <UserCard
          user={{ firstName, lastName, photoUrl, age, about, gender }}
        />
      </div>
      {showToast && (
        <div className="toast toast-top toast-end">
          <div className="alert alert-success mt-16">
            <span>Profile saved successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditDetails;
