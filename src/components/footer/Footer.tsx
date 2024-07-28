import "./Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="link-cluster">
          <FacebookIcon fontSize="inherit" />
          <InstagramIcon fontSize="inherit" />
          <LinkedInIcon fontSize="inherit" />
        </div>
        <div className="footer-text">
          <p>Made with &nbsp;</p>
          <FavoriteIcon />
          <p>&nbsp; by Dominick Nitecki</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
