import { Routes, Route } from "react-router-dom";
import HomeUser from "../pages/HomeUser";
import "../css/app.css";
import Home from "../pages/Home";
import NavBar from "../components/NavBar";
import LeftBar from "../components/LeftBar";
import Error from "../pages/Error";
import ErrorPage from "../pages/ErrorPage";

function App() {
  return (
    <div>
      <NavBar />
      <div className="home-bloc">
        <LeftBar />
        <Routes>
          <Route path="/" element={<HomeUser />} />
          <Route path="/user/:userId" element={<Home />} />
          <Route path="/error/:errorType" element={<ErrorPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
