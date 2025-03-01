import { useSearchParams } from "react-router-dom";
import { ReviewMapper } from "../../mappers/reviewMapper";
import StarIcon from "@mui/icons-material/Star";
import { SeachParamEnum } from "../../enums/languageEnums";
import ContentMapper from "../../content/contentMapper.json";
import { useEffect, useState } from "react";
import GoogleIcon from "../../assets/webp/google-icon.webp";
import { ContentMapperType } from "../../types/types";
import "./Reviews.scss";

const Reviews = () => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);
  const content: ContentMapperType = ContentMapper;
  const reviewContent = content.sections.reviews.body[language];
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isFading, setIsFading] = useState<boolean>(true);

  useEffect(() => {
    const fadeInDuration = 300;
    const fadeOutDuration = 400;
    const displayDuration = 5000;

    const timer = setTimeout(() => {
      setIsFading(false); // Start fading out
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % ReviewMapper.length);
        setTimeout(() => {
          setIsFading(true); // Start fading in
        }, fadeInDuration);
      }, fadeOutDuration);
    }, displayDuration);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  const activeReview = ReviewMapper[activeIndex];

  return (
    <div className="reviews-container">
      <div className="google-container">
        <div className="google-text">
          <h2>{reviewContent?.subTitle}</h2>
        </div>
        <img className="google-icon" src={GoogleIcon} alt="google icon" />
      </div>

      <div className="review-container">
        <div className={`review-card ${isFading && "fade-in"}`}>
          <div
            className={`review-card-content ${isFading && "fade-in"}`}
            key={activeReview?.name}
          >
            <div className="review-rating">
              <StarIcon className="star-icon" fontSize="inherit" />
              <h3>{activeReview?.rating.toFixed(1)}</h3>
            </div>
            <div className="review-content">
              <p>{activeReview?.review}</p>
            </div>
            <div className="review-name">
              <h3>-{activeReview?.name}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
