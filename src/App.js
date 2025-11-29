import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroBody from "./HeroBody";
import SignUp from "./SignUp.jsx";
import Login from "./Login.jsx";

function App() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<HeroBody />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
