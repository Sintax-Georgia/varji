import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "HOME",
        about: "ABOUT US",
        products: "PRODUCTS",
        contact: "CONTACT",
      },
    },
    ge: {
      translation: {
        home: "მთავარი",
        about: "ჩვენს შესახებ",
        products: "პროდუქცია",
        contact: "კონტაქტი",
      },
    },
  },
  lng: "ge",
});

export default i18next;
