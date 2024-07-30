import Agency from "../components/agency/Agency";
import Contact from "../components/contact/Contact";
import Reviews from "../components/reviews/Reviews";
import Services from "../components/services/Services";
import SocialFeed from "../components/socialFeed/SocialFeed";
import { OverviewMapperType } from "../types/types";

export const OverviewMapper: OverviewMapperType[] = [
  {
    id: "agency",
    header: "Our Agency",
    Component: Agency,
  },
  {
    id: "services",
    header: "Our Services",
    Component: Services,
  },
  {
    id: "reviews",
    header: "What our Clients Think",
    Component: Reviews,
  },
  {
    id: "contact",
    header: "Contact Us",
    Component: Contact,
  },
  {
    id: "feed",
    header: "Give Us a Follow!",
    Component: SocialFeed,
  },
];
