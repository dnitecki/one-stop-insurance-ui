import { Link } from "react-router-dom";
import "./PageNotFound.scss";
import useTranslateContent from "../../hooks/useTranslateContent";
import { ContentSectionEnum } from "../../enums/enums";

const PageNotFound = () => {
  const { content, language } = useTranslateContent(
    ContentSectionEnum.PAGE_NOT_FOUND
  );

  return (
    <div className="not-found-container">
      <h1>{content?.pageNotFound}</h1>
      <Link to={`/?lang=${language}`} title="Home" className="home-btn">
        <h2>{content?.home}</h2>
      </Link>
    </div>
  );
};

export default PageNotFound;
