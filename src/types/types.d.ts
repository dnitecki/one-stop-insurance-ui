import { SvgIconProps } from "@mui/material";
import { LanguageEnumShort, LanguageEnumLong } from "../enums/languageEnums";

export type OverviewMapperType = {
  id: string;
  Component: React.FC;
  className: string;
};

export type LanguageMapperType = {
  id: string;
  language: LanguageEnumLong;
  code: LanguageEnumShort;
};

export type ServiceMapperType = {
  id: string;
  text: string;
  icon: React.FC<SvgIconProps>;
  image?: any;
};

export type ReviewMapperType = {
  rating: number;
  review: string;
  name: string;
};

export type ContentMapperType = {
  sections: {
    [index: string]: {
      header?: {
        [index: string]: string;
      };
      body?: {
        [index: string]: string | any;
      };
    };
  };
};

export type ObjectIndexType = {
  [index: string]: JSX.Element | string;
};

export type ContactContentType = {
  formTitle: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  policyType: string;
  addtlInfo: string;
  submit: string;
  or: string;
};

export type QuoteFormProps = {
  setFormData?: React.Dispatch<React.SetStateAction>;
  setActiveStep?: React.Dispatch<React.SetStateAction>;
  formData?: QuoteFormDataType;
};

export type QuoteFormDataType = {
  type: string;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  phone: string;
  street: string;
  unit: string;
  postalCode: string;
  city: string;
  state: string;
  country: string;
  driversLicenseNum: string;
  occupation: string;
  currentInsurer: string;
  timeWithInsurer: string;
  currentCoverages: string;
  renewalDate: string;
  homeOwner: string;
  noOfResidents: string;
  married: string;
  spouseName: string;
  additionalDriver: string;
  additionalDrivers: DriverFormDataType[];
  vehicles: VehicleFormDataType[];
};

export type DriverFormDataType = Pick<
  QuoteFormDataType,
  "firstName" | "lastName" | "driversLicenseNum" | "dateOfBirth"
>;

export type VehicleFormDataType = {
  year: string;
  make: string;
  model: string;
  financing: string;
  vin: string;
  mileage: string;
  firstOwner: string;
};
