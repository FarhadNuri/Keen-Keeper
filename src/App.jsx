import "./App.css";
import HomeBanner from "./components/Home/HomeBanner";
import Navbar from "./components/Navbar/Navbar";
import axios from "axios";
import HomeDataContext from "./components/Home/HomeDataContext";
const userPromise = axios.get("userData.json")

function App() {
  return (
    <>
      <Navbar />
      <HomeDataContext userPromise={userPromise}>
        <HomeBanner />
      </HomeDataContext>
    </>
  );
}

export default App;
