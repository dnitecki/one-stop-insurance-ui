import "./Header.scss";
import logo from "../../assets/OneStopIconWhite.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img src={logo} />
      </div>
    </div>
  );
};

export default Header;
