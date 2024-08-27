import "./Header.scss";
import logo from "../../assets/png/one-stop-icon-white.png";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageSelector from "../languageSelector/LanguageSelector";
import { INFO } from "../../constants/constants";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img src={logo} alt="one stop logo" />
      </div>
      <div className="header-options">
        <a href={INFO.PHONE_HREF}>
          <PhoneIcon fontSize="inherit" />
        </a>
        <a href={INFO.EMAIL_HREF}>
          <EmailIcon fontSize="inherit" />
        </a>
        <LanguageSelector />
      </div>
    </div>
  );
};

export default Header;
