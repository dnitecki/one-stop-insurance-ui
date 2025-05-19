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
    icon: DirectionsCarIcon,
  },
  {
    id: "home",
    icon: HomeIcon,
  },
  {
    id: "life",
    icon: FamilyRestroomIcon,
  },
  {
    id: "business",
    icon: BusinessCenterIcon,
  },
  {
    id: "renters",
    icon: ApartmentIcon,
  },
  {
    id: "boat",
    icon: DirectionsBoatIcon,
  },
  {
    id: "motorcycle",
    icon: TwoWheelerIcon,
  },
  {
    id: "specialty",
    icon: HealthAndSafetyIcon,
  },
];
