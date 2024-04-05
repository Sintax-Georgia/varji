//styles
import styles from "./Contact.module.css";
//Icons
import { IoLogoFacebook } from "react-icons/io5";
import { ImMobile } from "react-icons/im";
import { BsWatch } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { IoMailOpen } from "react-icons/io5";
//components
import CustomHeading from "../../helpers/CustomHeading";
import GetInTouch from "./GetInTouch";
//map
import Map from "./map/Map";
//Languages
import { useTranslation } from "react-i18next";

const PHONE_NUMBER = "+995 597 91 10 60";

function ContactPage() {
  const { t } = useTranslation("contact");
  const contactData = [
    {
      icon: (
        <a href={`tel:${PHONE_NUMBER}`}>
          <ImMobile />
        </a>
      ),
      heading: "დაგვიკავშირდით",
      text: PHONE_NUMBER,
      id: 1,
    },
    {
      icon: <BsWatch />,
      heading: "სამუშაო საათები",
      text: "09:00-18:00",
      id: 2,
    },
    {
      icon: (
        <a href="https://maps.app.goo.gl/4YtApvposKe9k7HN7" target="_blank">
          <ImLocation />
        </a>
      ),
      heading: "მისამართი",
      text: "28 Ananuri Highway",
      id: 3,
    },
    {
      icon: (
        <a href="mailto:wood@varji.ge">
          <IoMailOpen />
        </a>
      ),
      heading: "მეილი",
      text: "wood@varji.ge",
      id: 4,
    },
    {
      icon: <IoLogoFacebook />,
      heading: "Facebook",
      text: "www.facebook.com/varjiwood",
      id: 5,
    },
  ];
  return (
    <div className={styles.contactContainer}>
      <CustomHeading>{t("heading")}</CustomHeading>
      <div className={styles.contactInformation}>
        <div className={styles.contactBullets}>
          {contactData.map((info) => (
            <div className={styles.infoContainer} key={info.heading}>
              <span className={styles.iconContainer}>{info.icon}</span>
              <div className={styles.textContainer}>
                <h3>{t(`table.heading${info.id}`)}</h3>
                <span>{info.text}</span>
              </div>
            </div>
          ))}
        </div>
        <GetInTouch />
      </div>
      <div>
        <Map />
      </div>
    </div>
  );
}

export default ContactPage;
