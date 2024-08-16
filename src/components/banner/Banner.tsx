import "./Banner.scss";
import groupPhoto from "../../assets/group-photo.png";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <img
          className="group-photo"
          src={groupPhoto}
          alt="One Stop Insurance Agency"
        />
      </div>
    </div>
  );
};

export default Banner;
