import Agency from "../components/agency/Agency";
import Contact from "../components/contact/Contact";
import Services from "../components/services/Services";
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
    id: "contact",
    header: "Contact Us",
    Component: Contact,
  },
];
