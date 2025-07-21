import "./Header.scss";
import logo from "../../assets/png/one-stop-icon-white.png";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import LanguageSelector from "../languageSelector/LanguageSelector";
import { INFO } from "../../constants/constants";
import { Link } from "react-router-dom";
import useTranslateContent from "../../hooks/useTranslateContent";
import { ContentSectionEnum } from "../../enums/enums";

const Header = () => {
  const { content, language } = useTranslateContent(ContentSectionEnum.HEADER);

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="header-logo">
          <Link to={`/?lang=${language}`} title="Home">
            <img src={logo} alt="One Stop Logo" />
          </Link>
        </div>
        <div className="header-options">
          <Link
            to={`/requestquote?lang=${language}`}
            title="Get A Quote"
            id="quoteLink"
          >
            <FactCheckIcon fontSize="inherit" />
            <p>{content?.quoteText}</p>
          </Link>
          <a href={INFO.PHONE_HREF} title="Call">
            <PhoneIcon fontSize="inherit" />
          </a>
          <a href={INFO.EMAIL_HREF} title="Email">
            <EmailIcon fontSize="inherit" />
          </a>
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
};

export default Header;
