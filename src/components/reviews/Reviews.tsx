import { useSearchParams } from "react-router-dom";
import { LINKS } from "../../constants/constants";
import { ReviewMapper } from "../../mappers/reviewMapper";
import "./Reviews.scss";
import StarIcon from "@mui/icons-material/Star";
import { SeachParamEnum } from "../../enums/languageEnums";
import { ContentMapper } from "../../content/contentMapper";

const Reviews = () => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);
  const content = ContentMapper?.sections?.reviews?.body[language];
  return (
    <div className="reviews-container">
      {ReviewMapper.map((review) => (
        <div className="review-card" key={review.name}>
          <div className="review-rating">
            <StarIcon className="star-icon" fontSize="inherit" />
            <h3>{review.rating.toFixed(1)}</h3>
          </div>
          <div className="review-content">
            <p>{review.review}</p>
            <div className="review-name">
              <h3>-{review.name}</h3>
            </div>
          </div>
        </div>
      ))}
      <a href={LINKS.FB} target="_blank" rel="noreferrer">
        <button className="review-more-btn">
          <p>{content}</p>
        </button>
      </a>
    </div>
  );
};

export default Reviews;
