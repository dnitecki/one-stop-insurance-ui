import { LINKS } from "../../constants/constants";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Arrow from "../../assets/png/arrow.png";
import "./SocialFeed.scss";

const SocialFeed = () => {
  return (
    <div className="feed-container">
      <div className="media-links">
        <img className="left-arrow" src={Arrow} alt="arrow" />
        <a
          className="link-container"
          href={LINKS.FB}
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon fontSize="inherit" />
        </a>
        <a
          className="link-container"
          href={LINKS.INSTA}
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon fontSize="inherit" />
        </a>
        <a
          className="link-container"
          href={LINKS.LINKEDIN}
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon fontSize="inherit" />
        </a>
        <img className="right-arrow" src={Arrow} alt="arrow" />
      </div>
      <iframe
        width="100%"
        height="500"
        src="https://www.instagram.com/onestopinsuranceagency/embed/"
      ></iframe>
    </div>
  );
};

export default SocialFeed;
