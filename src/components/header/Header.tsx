import "./Header.scss";
import logo from "../../assets/OneStopIconWhite.png";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LanguageSelector from "../languageSelector/LanguageSelector";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img src={logo} />
      </div>
      <div className="header-options">
        <CallIcon fontSize="inherit" />
        <EmailIcon fontSize="inherit" />
        <LanguageSelector />
      </div>
    </div>
  );
};

export default Header;
