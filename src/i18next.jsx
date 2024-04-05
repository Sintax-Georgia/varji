import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      navigation: {
        home: "HOME",
        about: "ABOUT US",
        products: "PRODUCTS",
        contact: "CONTACT",
      },
      about: {
        heading: "ABOUT US",
        text: "Varji is a renowned furniture and furniture wood materials manufacturing company with 25 years of successful operation in Georgia. Our products are crafted using Georgian walnut, oak, chestnut, and beech, ensuring exceptional quality and durability. Since 1999, Varji has maintained a steadfast focus on high-quality standards. As a result, our products fully comply with the stringent requirements of both European and Asian markets, and we export to various countries around the world.",
        button: "See More",
      },
      productDetails: {
        productHeadings: {
          heading1: "Plank",
          heading2: "Furniture Panels",
          heading3: "Wooden Steps",
          heading4: "Massive Parquet",
          heading5: "Two-layer Parquet",
          heading6: "Fuel Briquette",
          heading7: "Table Surface",
        },
        productDescription: {
          descr1: "plank",
          descr2: "furniture panels",
          descr3: "wooden steps",
          descr4: "massive parquet",
          descr5: "twolayer parquet",
          descr6: "biquette",
          descr7: "table surfaces",
        },
      },
      partners: {
        heading: "Export Countries",
      },
      products: {
        heading: "Our Products",
      },
      woodWeWorkWith: {
        heading: "Wood We Work With",
        woods: {
          wood1: "Bleach",
          wood2: "Oak",
          wood3: "Walnut",
          wood4: "Eucaliptus",
          wood5: "Pine",
          wood6: "Chestnut",
        },
      },
      contact: {
        heading: "Get In Touch",
        table: {
          heading1: "Call us",
          heading2: "Working Hours",
          heading3: "Address",
          heading4: "E-mail",
          heading5: "Facebook",
        },
      },
      contactForm: {
        name: "Name",
        email: "E-Mail",
        message: "Message",
        button: "Send",
      },
      footer: {
        links: {
          link1: "Home",
          link2: "About us",
          link3: "Products",
          link4: "Contact",
        },
        list: {
          item1: "Address: 27 str Varji,0179",
          item2: "Phone: +995 597 91 10 60",
          item3: "E-mail: wood@varji.ge",
        },
        headings: {
          heading1: "Navigation",
          heading2: "contact",
        },
      },
    },
    ge: {
      navigation: {
        home: "მთავარი",
        about: "ჩვენს შესახებ",
        products: "პროდუქცია",
        contact: "კონტაქტი",
      },
      about: {
        heading: "ჩვენს შესახებ",
        text: "ავეჯის მწარმოებელი კომპანია ვარჯი 25 წელია წარმატებით მოღვაწეობს საქართველოში. კომპანიის საავეჯე და სამშენებლო ხის მასალები ქართული კაკლის, მუხის, წაბლისა და წიფელას ბაზაზე მზადდება. 1999 წლიდან, ვარჯი აქცენტს მაღალ ხარისხზე აკეთებს, შედეგად პროდუქცია სრულად აკმაყოფილებს ევროპისა და აზიის ბაზრის მოთხოვნებს და კომპანია ექსპორტს სხვადასხვა ქვეყნებში ეწევა.",
        button: "მეტის ნახვა",
      },
      productDetails: {
        productHeadings: {
          heading1: "ფიცარი",
          heading2: "საავეჯე პანელი",
          heading3: "ხის საფეხურები",
          heading4: "მასიური პარკეტი",
          heading5: "ორშრიანი პარკეტი",
          heading6: "საწვავი ბრიკეტი",
          heading7: "მაგიდის ზედაპირი",
        },
        productDescription: {
          descr1: "ვარჯი აწარმოებს ქართული წიფელის, წაბლისა და ფიჭვის ფიცარს.",
          descr2: "ვარჯი აწარმოებს ქართული წიფელის, წაბლისა და ფიჭვის ფიცარს.",
          descr3: "ვარჯი აწარმოებს ქართული წიფელის, წაბლისა და ფიჭვის ფიცარს.",
          descr4: "ვარჯი აწარმოებს ქართული წიფელის, წაბლისა და ფიჭვის ფიცარს.",
          descr5: "ვარჯი აწარმოებს ქართული წიფელის, წაბლისა და ფიჭვის ფიცარს.",
          descr6: "ვარჯი აწარმოებს ქართული წიფელის, წაბლისა და ფიჭვის ფიცარს.",
          descr7: "ვარჯი აწარმოებს ქართული წიფელის, წაბლისა და ფიჭვის ფიცარს.",
        },
      },
      partners: {
        heading: "საექსპორტო ქვეყნები",
      },
      products: {
        heading: "ჩვენი პროდუქცია",
      },
      woodWeWorkWith: {
        heading: "მასალა, რომელსაც ვიყენებთ",
        woods: {
          wood1: "წიფელი",
          wood2: "მუხა",
          wood3: "კაკალი",
          wood4: "ევკალიპტი",
          wood5: "ფიჭვი",
          wood6: "წაბლი",
        },
      },
      contact: {
        heading: "დაგვიკავშირდით",
        table: {
          heading1: "დაგვიკავშირდით",
          heading2: "სამუშაო საათები",
          heading3: "მისამართი",
          heading4: "მეილი",
          heading5: "Facebook",
        },
      },
      contactForm: {
        name: "სახელი",
        email: "მეილი",
        message: "შეტყობინება",
        button: "გაგზავნა",
      },
      footer: {
        links: {
          link1: "მთავარი",
          link2: "ჩვენს შესახებ",
          link3: "პროდუქცია",
          link4: "კონტაქტი",
        },
        list: {
          item1: "მისამართი: 27 str Varji,0179",
          item2: "ტელეფონი: +995 597 91 10 60",
          item3: "მეილი: wood@varji.ge",
        },
        headings: {
          heading1: "ნავიგაცია",
          heading2: "კონტაქტი",
        },
      },
    },
  },
  lng: "ge",
});

export default i18next;

/*
About us:
Varji is a renowned furniture and furniture wood materials manufacturing company with 25 years of successful operation in Georgia. Our products are crafted using Georgian walnut, oak, chestnut, and beech, ensuring exceptional quality and durability.

Since 1999, Varji has maintained a steadfast focus on high-quality standards. As a result, our products fully comply with the stringent requirements of both European and Asian markets, and we export to various countries around the world.

Our Product Range:

Furniture Panel:
Our furniture panels are perfect for enhancing the interior walls and ceilings of homes, cottages, and country houses. Featuring a unique structure and exquisite beauty, our wooden panels require no treatment with antiseptic solutions and are immune to wood rodents and harmful insects, thanks to their natural composition.

Massive Parquet:
Varji's massive parquet is an ideal choice for flooring in residential spaces such as houses, cottages, and country houses. With its distinctive structure and beauty, our parquet adds a touch of elegance to any space. The natural composition of our massive larch parquet eliminates the need for antiseptic treatment and ensures resistance to wood rodents and harmful insects. Our products also maintain a moisture content of no more than 12%, guaranteeing durability and longevity.
*/
