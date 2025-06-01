import background from "../../assets/img/background.png";
import Navbar from "../fragments/Navbar";
import Welcome from "../fragments/Welcome";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen">
        <img src={background} alt="" className="w-full h-full object-cover" />
      </div>
      <Welcome />
    </div>
  );
};

export default Home;
