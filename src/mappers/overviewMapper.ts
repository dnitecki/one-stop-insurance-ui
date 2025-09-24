import Agency from "../components/agency/Agency";
import Contact from "../components/contact/Contact";
import Partners from "../components/partners/Partners";
import Reviews from "../components/reviews/Reviews";
import Services from "../components/services/Services";
import SocialFeed from "../components/socialFeed/SocialFeed";
import { EMPTY_STRING } from "../constants/constants";
import { OverviewMapperType } from "../types/types";

export const OverviewMapper: OverviewMapperType[] = [
  {
    id: "reviews",
    Component: Reviews,
    className: "reviews",
  },
  {
    id: "agency",
    Component: Agency,
    className: EMPTY_STRING,
  },
  {
    id: "services",
    Component: Services,
    className: "services",
  },
  {
    id: "contact",
    Component: Contact,
    className: EMPTY_STRING,
  },

  {
    id: "socialFeed",
    Component: SocialFeed,
    className: "social-feed",
  },
  {
    id: "partners",
    Component: Partners,
    className: EMPTY_STRING,
  },
];
