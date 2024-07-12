import "./Banner.scss";
import groupPhoto from "../../assets/GroupPhoto.png";
import logo from "../../assets/OneStopLogo.png";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-header">
        <h1>ONE STOP</h1>
        <h2>INSURANCE</h2>
      </div>
      <div className="banner-content">
        <img className="group-photo" src={groupPhoto} />
        <img className="logo" src={logo} />
      </div>
    </div>
  );
};

export default Banner;
