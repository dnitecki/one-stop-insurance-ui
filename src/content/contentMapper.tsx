import { ContentMapperType, ObjectIndexType } from "../types/types";

export const ContentMapper: ContentMapperType = {
  sections: {
    agency: {
      header: {
        EN: "Our Agency",
        PL: "Nasza Agencja",
      },
    },
    services: {
      header: {
        EN: "Our Services",
        PL: "Nasze Usługi",
      },
    },
    reviews: {
      header: {
        EN: "Reviews",
        PL: "Recenzje",
      },
      body: {
        EN: "4.8 stars on",
        PL: "4,8 gwiazdki na",
      },
    },
    contact: {
      header: {
        EN: "Contact Us",
        PL: "Kontakt",
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
      },
    },
    socialFeed: {
      header: {
        EN: "Give Us a Follow!",
        PL: "Obserwuj nasze media!",
      },
    },
    quote: {
      header: {
        EN: "Type of Quote",
        PL: "Wybierz Wycenę",
      },
    },
  },
};
export const experienceContent: ObjectIndexType = {
  EN: (
    <span>
      We have more than <strong>30 years</strong> of combined insurance
      experience.
    </span>
  ),
  PL: (
    <span>
      Mamy ponad <strong>30 lat</strong> wspólnego doświadczenia z
      ubezpieczeniem.
    </span>
  ),
  ES: (
    <span>
      más de <strong>30 años</strong> de experiencia combinada en seguros.
    </span>
  ),
};
export const agencyContent: ObjectIndexType = {
  EN: (
    <>
      Your <strong>One Stop</strong> Shop for smart savings and smarter
      coverage.
    </>
  ),
  PL: (
    <>
      Lepsze ubezpieczenie w niższej cenie w <strong>Jednym</strong> miejscu
    </>
  ),
  ES: (
    <>
      Lugar <strong>único</strong> para ahorros inteligentes y mejor protección.
    </>
  ),
};
