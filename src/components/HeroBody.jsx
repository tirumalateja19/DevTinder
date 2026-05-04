import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
// import { SERVER_URL } from "../utils/constants.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice.jsx";
import { useCallback, useEffect } from "react";

const HeroBody = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);
  const apiUrl = process.env.REACT_APP_SERVER_URL;

  const fetchUser = useCallback(async () => {
    if (userData) return;
    try {
      const res = await axios.get(apiUrl + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (err) {
      if (err.status === 401) {
        navigate("/login");
      }
      console.error(err);
    }
  }, [userData, apiUrl, dispatch, navigate]);
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HeroBody;
