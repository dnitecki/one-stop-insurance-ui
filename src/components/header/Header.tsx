import "./Header.scss";
import logo from "../../assets/png/one-stop-icon-white.png";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import LanguageSelector from "../languageSelector/LanguageSelector";
import { INFO } from "../../constants/constants";
import { Link, useSearchParams } from "react-router-dom";
import { SeachParamEnum } from "../../enums/languageEnums";
import { ContentMapperType } from "../../types/types";
import ContentMapper from "../../content/contentMapper.json";

const Header = () => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);
  const content: ContentMapperType = ContentMapper;
  const bannerContent = content?.sections.header.body[language];

  return (
    <nav className="header-container">
      <div className="header-logo">
        <Link to={`/?lang=${language}`} title="Home">
          <img src={logo} alt="one stop logo" />
        </Link>
      </div>
      <div className="header-options">
        <Link to={`/requestquote?lang=${language}`} title="Get A Quote">
          <FactCheckIcon fontSize="inherit" />
          <p>{bannerContent?.quoteText}</p>
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
