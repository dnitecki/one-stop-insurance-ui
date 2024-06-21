import "./Header.scss";
import logo from "../../assets/OneStopIconWhite.png";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img src={logo} />
      </div>
      <div className="header-options">
        <CallIcon fontSize="inherit" />
        <EmailIcon fontSize="inherit" />
        <PlaceIcon fontSize="inherit" />
      </div>
    </div>
  );
};

export default Header;
