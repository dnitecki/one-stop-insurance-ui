import "./Header.scss";
import logo from "../../assets/png/one-stop-icon-white.png";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import LanguageSelector from "../languageSelector/LanguageSelector";
import { INFO } from "../../constants/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header-container">
      <div className="header-logo">
        <img src={logo} alt="one stop logo" />
      </div>
      <div className="header-options">
        <Link to="quote">
          <FactCheckIcon fontSize="inherit" />
          <p>Quote Form</p>
        </Link>
        <a href={INFO.PHONE_HREF}>
          <PhoneIcon fontSize="inherit" />
        </a>
        <a href={INFO.EMAIL_HREF}>
          <EmailIcon fontSize="inherit" />
        </a>
        <LanguageSelector />
      </div>
    </nav>
  );
};

export default Header;
