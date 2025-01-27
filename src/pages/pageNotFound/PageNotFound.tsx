import { Link } from "react-router-dom";
import "./PageNotFound.scss";

const PageNotFound = () => {
  return (
    <div className="not-found-container">
      <h1>Page Not Found</h1>
      <Link to="/" title="Home" className="home-btn">
        <h2>Home</h2>
      </Link>
    </div>
  );
};

export default PageNotFound;
