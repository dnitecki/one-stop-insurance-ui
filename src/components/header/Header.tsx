import "./Header.scss";
import logo from "../../assets/png/one-stop-icon-white.png";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import LanguageSelector from "../languageSelector/LanguageSelector";
import { INFO } from "../../constants/constants";
import { Link, useSearchParams } from "react-router-dom";
import { SeachParamEnum } from "../../enums/languageEnums";

const Header = () => {
  const [searchParams] = useSearchParams();
  const languageParam = searchParams.get(SeachParamEnum.LANG);
  return (
    <nav className="header-container">
      <div className="header-logo">
        <Link to={`/?lang=${languageParam}`} title="Home">
          <img src={logo} alt="one stop logo" />
        </Link>
      </div>
      <div className="header-options">
        <Link to={`/requestquote?lang=${languageParam}`} title="Get A Quote">
          <FactCheckIcon fontSize="inherit" />
          <p>Get A Quote</p>
        </Link>
        <a href={INFO.PHONE_HREF} title="Call">
          <PhoneIcon fontSize="inherit" />
        </a>
        <a href={INFO.EMAIL_HREF} title="Email">
          <EmailIcon fontSize="inherit" />
        </a>
        <LanguageSelector />
      </div>
    </nav>
  );
};

export default Header;
