import { Link } from "react-router-dom";
import "../pages/home/home.css";
import Image from "../images/main_header.png";

const MainHeader = () => {
  return (
    <div className="main__header">
      <div className="main__header-container container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
            explicabo nobis, facilis fuga aspernatur non!
          </p>
          <Link to="/plans" className="btn lg">
            Get Started
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
