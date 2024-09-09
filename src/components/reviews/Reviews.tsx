import { useSearchParams } from "react-router-dom";
import { LINKS } from "../../constants/constants";
import { ReviewMapper } from "../../mappers/reviewMapper";
import "./Reviews.scss";
import StarIcon from "@mui/icons-material/Star";
import { SeachParamEnum } from "../../enums/languageEnums";
import { ContentMapper } from "../../content/contentMapper";
import { useEffect, useState } from "react";

const Reviews = () => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);
  const content = ContentMapper?.sections?.reviews?.body[language];
  const [activeIndex, setActiveIndex] = useState<number>(0);
  useEffect(() => {
    if (activeIndex < ReviewMapper.length) {
      setTimeout(() => {
        setActiveIndex(activeIndex + 1);
      }, 4000);
    }
    if (activeIndex >= ReviewMapper.length - 1) {
      setTimeout(() => {
        setActiveIndex(0);
      }, 4000);
    }
  });
  const activeReview = ReviewMapper[activeIndex];
  return (
    <div className="reviews-container">
      <div className="review-card" key={activeReview?.name}>
        <div className="review-rating">
          <StarIcon className="star-icon" fontSize="inherit" />
          <h3>{activeReview?.rating.toFixed(1)}</h3>
        </div>
        <div className="review-content">
          <p>{activeReview?.review}</p>
          <div className="review-name">
            <h3>-{activeReview?.name}</h3>
          </div>
        </div>
      </div>
      <a href={LINKS.FB} target="_blank" rel="noreferrer">
        <button className="review-more-btn">
          <p>{content}</p>
        </button>
      </a>
    </div>
  );
};

export default Reviews;
