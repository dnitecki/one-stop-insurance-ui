import "./Banner.scss";
import logo from "../../assets/OneStopInsuranceIcon.png";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <img src={logo} />
      </div>
    </div>
  );
};

export default Banner;
