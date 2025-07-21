import { useSearchParams } from "react-router-dom";
import ReviewMapper from "../../content/reviewMapper.json";
import StarIcon from "@mui/icons-material/Star";
import { EMPTY_STRING } from "../../constants/constants";
import { SeachParamEnum } from "../../enums/languageEnums";
import OverviewContentMapper from "../../content/overviewContentMapper.json";
import GoogleIcon from "../../assets/webp/google-icon.webp";
import { ContentMapperType, ReviewMapperType } from "../../types/types";
import "./Reviews.scss";
import { useRef } from "react";
import useVisibility from "../../hooks/useVisibility";
import useTranslateContent from "../../hooks/useTranslateContent";
import { ContentSectionEnum } from "../../enums/enums";

const Reviews = () => {
  const { content } = useTranslateContent(ContentSectionEnum.REVIEWS);
  const reviews: ReviewMapperType[] = ReviewMapper;
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useVisibility(ref);

  return (
    <div className="reviews-container">
      <div className="google-container">
        <div className="google-text">
          <h2>{content?.subTitle}</h2>
        </div>
        <img className="google-icon" src={GoogleIcon} alt="google icon" />
      </div>
      <div className="review-container">
        {reviews.map((review, index) => (
          <div
            className={`review-card ${isVisible ? "visible" : EMPTY_STRING}`}
            key={index}
            ref={ref}
            style={{ "--delay": `${index * 0.2}s` } as React.CSSProperties}
          >
            <div className="review-card-content">
              <div className="review-rating">
                <StarIcon className="star-icon" fontSize="inherit" />
                <h3>{review.rating.toFixed(1)}</h3>
              </div>
              <div className="review-content">
                <p>{review.review}</p>
              </div>
              <div className="review-name">
                <h3>{review.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
