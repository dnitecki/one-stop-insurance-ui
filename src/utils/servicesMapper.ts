import { ServiceMapperType } from "../types/types";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import ApartmentIcon from "@mui/icons-material/Apartment";

export const ServicesMapper: ServiceMapperType[] = [
  {
    id: "auto",
    text: "Auto",
    icon: DirectionsCarIcon,
  },
  {
    id: "home",
    text: "Home",
    icon: HomeIcon,
  },
  {
    id: "life",
    text: "Life",
    icon: FamilyRestroomIcon,
  },
  {
    id: "business",
    text: "Business",
    icon: BusinessCenterIcon,
  },
  {
    id: "renters",
    text: "Renters",
    icon: ApartmentIcon,
  },
  {
    id: "boat",
    text: "Boat",
    icon: DirectionsBoatIcon,
  },
  {
    id: "motorcycle",
    text: "Motorcycle",
    icon: TwoWheelerIcon,
  },
  {
    id: "specialty",
    text: "Specialty",
    icon: HealthAndSafetyIcon,
  },
];
