import "./Banner.scss";
import groupPhoto from "../../assets/GroupPhoto.png";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <img className="group-photo" src={groupPhoto} alt="group photo" />
      </div>
    </div>
  );
};

export default Banner;
