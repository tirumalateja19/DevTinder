import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroBody from "./components/HeroBody.jsx";
import SignUp from "./components/SignUp.jsx";
import Login from "./components/Login.jsx";
import FeedPage from "./components/FeedPage.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.jsx";
import Profile from "./components/Profile.jsx";
import Error from "./components/Error.jsx";
import Connections from "./components/Connections.jsx";
import Requests from "./components/Requests.jsx";

function App() {
  return (
    <div data-theme="emerald">
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<HeroBody />}>
              <Route path="/" element={<FeedPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/error" element={<Error />} />
              <Route path="/signup" element={<SignUp />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
