import { useSearchParams } from "react-router-dom";
import { LINKS } from "../../constants/constants";
import { ReviewMapper } from "../../mappers/reviewMapper";
import "./Reviews.scss";
import StarIcon from "@mui/icons-material/Star";
import { SeachParamEnum } from "../../enums/languageEnums";
import { ContentMapper } from "../../content/contentMapper";
import { useEffect, useState } from "react";
import GoogleIcon from "../../assets/webp/google-icon.webp";

const Reviews = () => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);
  const content = ContentMapper?.sections?.reviews?.body[language];
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isFading, setIsFading] = useState<boolean>(true);

  useEffect(() => {
    const fadeInDuration = 400;
    const fadeOutDuration = 400;
    const displayDuration = 4000;

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
          <h2>4.8 Stars on</h2>
        </div>
        <img className="google-icon" src={GoogleIcon} alt="google icon" />
        <div className="stars">
          <StarIcon fontSize="inherit" />
          <StarIcon fontSize="inherit" />
          <StarIcon fontSize="inherit" />
          <StarIcon fontSize="inherit" />
          <StarIcon fontSize="inherit" />
        </div>
      </div>
      <div className="review-container">
        <div
          className={`review-card ${isFading && "fade-in"}`}
          key={activeReview?.name}
        >
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
