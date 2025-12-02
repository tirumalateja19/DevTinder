import { useSelector } from "react-redux";
import EditDetails from "./EditDetails";

const Profile = () => {
  const user = useSelector((store) => store.user);
  return (
    user && (
      <div className=" h-[100vh] overflow-hidden flex justify-center items-center gap-2">
        <EditDetails user={user} />
      </div>
    )
  );
};

export default Profile;
