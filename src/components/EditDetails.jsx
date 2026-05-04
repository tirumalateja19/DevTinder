import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { SERVER_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";
import UserCard from "./UserCard";

const EditDetails = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [about, setAbout] = useState(user.about);
  const [gender, setGender] = useState(user.gender);
  const [age, setAge] = useState(user.age || "");
  const [showToast, setShowToast] = useState(false);

  const dispatch = useDispatch();
  const apiUrl = process.env.REACT_APP_SERVER_URL;
  const saveProfile = async () => {
    try {
      const res = await axios.patch(
        apiUrl + "/profile/edit",
        { firstName, lastName, photoUrl, age, gender, about },
        { withCredentials: true },
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
    <div className="h-[100vh]">
      <div className=" lg:flex items-center justify-center gap-5">
        <div className="hidden lg:block w-[35%] h-full ml-10 lg:mt-0 mt-10">
          <UserCard
            user={{ firstName, lastName, photoUrl, age, about, gender }}
          />
        </div>
        <div className="lg:w-[70%] flex justify-center py-10">
          <div className="bg-gray-100 shadow-xl lg:w-[45vw] w-[90%] px-6 sm:px-10 py-6 text-[#4E4A62]">
            <h2 className="text-3xl font-semibold text-center m-auto mb-2 mt-4">
              Edit Profile
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">First Name</span>
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="input input-bordered h-12"
                  placeholder="Enter first name"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Last Name</span>
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="input input-bordered h-12"
                  placeholder="Enter last name"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Photo URL</span>
                </label>
                <input
                  type="text"
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                  className="input input-bordered h-12"
                  placeholder="Profile image link"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Age</span>
                </label>
                <input
                  type="text"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="input input-bordered h-12"
                  placeholder="Enter age"
                />
              </div>

              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text font-semibold">Gender</span>
                </label>
                <div className="flex items-center gap-6 mt-1">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      className="radio radio-primary"
                      value="male"
                      checked={gender === "male"}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <span>Male</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      className="radio radio-primary"
                      value="female"
                      checked={gender === "female"}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <span>Female</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      className="radio radio-primary"
                      value="others"
                      checked={gender === "others"}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <span>Other</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      className="hidden lg:block radio radio-primary"
                      value="rather not say"
                      checked={gender === "rather not say"}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <span className="hidden lg:block">Prefer not to say</span>
                  </label>
                </div>
              </div>

              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text font-semibold">About</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-28"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  placeholder="Write something about yourself..."
                ></textarea>
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <button
                className="btn bg-blue-600 hover:bg-blue-700 text-white px-10"
                onClick={saveProfile}
              >
                Save Profile
              </button>
            </div>
          </div>
        </div>

        {showToast && (
          <div className="toast toast-top toast-end">
            <div className="alert alert-success mt-16">
              <span>Profile saved successfully.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditDetails;
