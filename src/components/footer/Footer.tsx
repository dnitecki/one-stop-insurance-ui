import "./Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { LINKS } from "../../constants/constants";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="link-cluster">
          <a href={LINKS.FB} target="_blank" rel="noreferrer" title="Facebook">
            <FacebookIcon fontSize="inherit" />
          </a>
          <a
            href={LINKS.INSTA}
            target="_blank"
            rel="noreferrer"
            title="Instagram"
          >
            <InstagramIcon fontSize="inherit" />
          </a>
          <a
            href={LINKS.LINKEDIN}
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <LinkedInIcon fontSize="inherit" />
          </a>
        </div>
        <div className="footer-text">
          <p>Made with&nbsp;</p>
          <FavoriteIcon />
          <p>&nbsp;by Dominick Nitecki</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
