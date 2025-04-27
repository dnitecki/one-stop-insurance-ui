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

// export const formInitialState: QuoteFormDataType = {
//   type: EMPTY_STRING,
//   firstName: EMPTY_STRING,
//   lastName: EMPTY_STRING,
//   email: EMPTY_STRING,
//   dateOfBirth: EMPTY_STRING,
//   phone: EMPTY_STRING,
//   street: EMPTY_STRING,
//   unit: EMPTY_STRING,
//   postalCode: EMPTY_STRING,
//   city: EMPTY_STRING,
//   state: EMPTY_STRING,
//   country: EMPTY_STRING,
//   driversLicenseNum: EMPTY_STRING,
//   occupation: EMPTY_STRING,
//   currentInsurer: EMPTY_STRING,
//   timeWithInsurer: EMPTY_STRING,
//   currentCoverages: EMPTY_STRING,
//   renewalDate: EMPTY_STRING,
//   homeOwner: EMPTY_STRING,
//   noOfResidents: EMPTY_STRING,
//   married: EMPTY_STRING,
//   spouseName: EMPTY_STRING,
//   additionalDriver: EMPTY_STRING,
//   additionalDrivers: [],
//   vehicles: [],
// };

export const formInitialState: QuoteFormDataType = {
  type: "auto",
  firstName: "Beata",
  lastName: "Nitecki",
  email: "beatanitecki@gmail.com",
  dateOfBirth: "1990-01-01",
  phone: "1234567890",
  street: "123 Main St",
  unit: "Apt 1",
  postalCode: "12345",
  city: "Bloomingdale",
  state: "IL",
  country: "USA",
  driversLicenseNum: "D123456789",
  occupation: "Software Engineer",
  currentInsurer: "State Farm",
  timeWithInsurer: "2 years",
  renewalDate: "2023-12-31",
  currentCoverages: "Liability, Collision",
  homeOwner: "no",
  noOfResidents: "1",
  married: "no",
  spouseName: "John Doe",
  additionalDriver: "yes",
  additionalDrivers: [
    {
      firstName: "Jane",
      lastName: "Doe",
      driversLicenseNum: "D987654321",
      dateOfBirth: "1992-02-02",
    },
  ],
  vehicles: [
    {
      year: "2020",
      make: "Toyota",
      model: "Camry",
      financing: "Leased",
      vin: "1HGBH41JXMN109186",
      mileage: "15000",
      firstOwner: "Yes",
    },
  ],
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
  firstOwner: EMPTY_STRING,
};
