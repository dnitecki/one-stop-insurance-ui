import {
  DriverFormDataType,
  QuoteFormDataType,
  VehicleFormDataType,
} from "../types/types";

export const EMPTY_STRING = "";

export const LINKS = {
  LINKEDIN: "https://www.linkedin.com/in/beata-nitecki-837936196/",
  INSTA: "https://www.instagram.com/onestopinsuranceagency/",
  FB: "https://www.facebook.com/onestopinsurance.net",
};

export const INFO = {
  ADDRESS: "130 N. Bloomingdale Rd, Bloomingdale, IL.",
  HOURS: "Monday - Friday: 9:00AM - 5:00PM",
  PHONE: "(630) 400-8111",
  EMAIL: "bnitecki@onestopinsurance.net",
  PHONE_HREF: "tel:+16304008111",
  EMAIL_HREF: "mailto:bnitecki@onestopinsurance.net",
};

export const formInitialState: QuoteFormDataType = {
  type: "auto",
  firstName: EMPTY_STRING,
  lastName: EMPTY_STRING,
  email: EMPTY_STRING,
  dateOfBirth: EMPTY_STRING,
  phone: EMPTY_STRING,
  street: EMPTY_STRING,
  unit: EMPTY_STRING,
  postalCode: EMPTY_STRING,
  city: EMPTY_STRING,
  state: EMPTY_STRING,
  country: EMPTY_STRING,
  driversLicenseNum: EMPTY_STRING,
  occupation: EMPTY_STRING,
  currentInsurer: EMPTY_STRING,
  timeWithInsurer: EMPTY_STRING,
  currentCoverages: EMPTY_STRING,
  renewalDate: EMPTY_STRING,
  homeOwner: EMPTY_STRING,
  noOfResidents: EMPTY_STRING,
  married: EMPTY_STRING,
  spouseName: EMPTY_STRING,
  additionalDriver: EMPTY_STRING,
  additionalDrivers: [],
  vehicles: [],
};

export const driverInitialState: DriverFormDataType = {
  firstName: EMPTY_STRING,
  lastName: EMPTY_STRING,
  driversLicenseNum: EMPTY_STRING,
  dateOfBirth: EMPTY_STRING,
};

export const vehicleInitialState: VehicleFormDataType = {
  year: EMPTY_STRING,
  make: EMPTY_STRING,
  model: EMPTY_STRING,
  financing: EMPTY_STRING,
  vin: EMPTY_STRING,
  mileage: EMPTY_STRING,
  orignalOwner: EMPTY_STRING,
};
