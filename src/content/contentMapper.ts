import { LanguageEnumShort } from "../enums/languageEnums";
import { ContentMapperType } from "../types/types";

export const ContentMapper: ContentMapperType = {
  sections: {
    partners: {
      header: {
        [LanguageEnumShort.EN]: "Partners",
        [LanguageEnumShort.PL]: "Partnerzy",
        [LanguageEnumShort.ES]: "Compañeros",
      },
    },
    agency: {
      header: {
        EN: "Our Agency",
        PL: "Nasza Agencia",
        ES: "Nuestra Agencia",
      },
      body: {
        EN: "",
        PL: "",
        ES: "",
      },
    },
    services: {
      header: {
        EN: "Our Services",
        PL: "Nasze Usługi",
        ES: "Servicios",
      },
      body: {
        EN: "",
        PL: "",
        ES: "",
      },
    },
    reviews: {
      header: {
        EN: "Reviews",
        PL: "Nasze recenzje",
        ES: "Reseñas",
      },
      body: {
        EN: "",
        PL: "",
        ES: "",
      },
    },
    contact: {
      header: {
        EN: "Contact Us",
        PL: "Skontaktuj",
        ES: "Contáctenos",
      },
      body: {
        EN: {
          formTitle: "Request a Quote",
          firstName: "First Name",
          lastName: "Last Name",
          phoneNumber: "Phone Number",
          policyType: "Policy Type",
          addtlInfo: "Additional Information",
          submit: "Submit",
          or: "or",
        },
        PL: {
          formTitle: "Poproś o Wycenę",
          firstName: "Imię",
          lastName: "Nazwisko",
          phoneNumber: "Numer Telefonu",
          policyType: "Rodzaj Polisy",
          addtlInfo: "Dodatkowe Informacje",
          submit: "Wyślij",
          or: "lub",
        },
        ES: {
          formTitle: "Solicitar Cotización",
          firstName: "Nombre",
          lastName: "Apellido",
          phoneNumber: "Número telefónico",
          policyType: "Tipo de póliza",
          addtlInfo: "Más información",
          submit: "Entregar",
          or: "o",
        },
      },
    },
    feed: {
      header: {
        EN: "Give Us a Follow!",
        PL: "Obserwuj nasze media!",
        ES: "Redes Sociales",
      },
      body: {
        EN: "",
        PL: "",
        ES: "",
      },
    },
  },
};
