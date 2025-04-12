import { useSearchParams } from "react-router-dom";
import ReviewMapper from "../../content/reviewMapper.json";
import StarIcon from "@mui/icons-material/Star";
import { SeachParamEnum } from "../../enums/languageEnums";
import OverviewContentMapper from "../../content/overviewContentMapper.json";
import GoogleIcon from "../../assets/webp/google-icon.webp";
import { ContentMapperType, ReviewMapperType } from "../../types/types";
import "./Reviews.scss";

const Reviews = () => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);
  const content: ContentMapperType = OverviewContentMapper;
  const reviewContent = content.sections.reviews.body[language];
  const reviews: ReviewMapperType[] = ReviewMapper;

  return (
    <div className="reviews-container">
      <div className="google-container">
        <div className="google-text">
          <h2>{reviewContent?.subTitle}</h2>
        </div>
        <img className="google-icon" src={GoogleIcon} alt="google icon" />
      </div>
      <div className="review-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="review-card-content">
              <div className="review-rating">
                <StarIcon className="star-icon" fontSize="inherit" />
                <h3>{review.rating.toFixed(1)}</h3>
              </div>
              <div className="review-content">
                <p>{review.review}</p>
              </div>
              <div className="review-name">
                <h3>-{review.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
