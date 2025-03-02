import Agency from "../components/agency/Agency";
import Contact from "../components/contact/Contact";
import Reviews from "../components/reviews/Reviews";
import Services from "../components/services/Services";
import SocialFeed from "../components/socialFeed/SocialFeed";
import { OverviewMapperType } from "../types/types";

export const OverviewMapper: OverviewMapperType[] = [
  {
    id: "agency",
    Component: Agency,
  },
  {
    id: "services",
    Component: Services,
    className: "services",
  },
  {
    id: "contact",
    Component: Contact,
  },
  {
    id: "reviews",
    Component: Reviews,
  },
  {
    id: "socialFeed",
    Component: SocialFeed,
  },
];
