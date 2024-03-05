import Map from "./map/Map";
import styles from "./Contact.module.css";
import CustomHeading from "../../helpers/CustomHeading";
import { IoLogoFacebook } from "react-icons/io5";
import { ImMobile } from "react-icons/im";
import { BsWatch } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { IoMailOpen } from "react-icons/io5";
import NewsLetter from "../../layouts/footer/NewsLetter";
const PHONE_NUMBER = "+995 597 91 10 60";
const contactData = [
  { icon: <ImMobile />, heading: "დაგვიკავშირდით", text: PHONE_NUMBER },
  { icon: <BsWatch />, heading: "სამუშაო საათები", text: "09:00-18:00" },
  { icon: <ImLocation />, heading: "მისამართი", text: "ანანური" },
  { icon: <IoMailOpen />, heading: "მეილი", text: "wood@varji.ge" },
  {
    icon: <IoLogoFacebook />,
    heading: "ფბ გვერდი",
    text: "https://www.facebook.com/varjiwood",
  },
];

function ContactPage() {
  return (
    <div className={styles.contactContainer}>
      <CustomHeading>დაგვიკავშირდით</CustomHeading>
      <div className={styles.contactInformation}>
        <div className={styles.contactBullets}>
          {contactData.map((info) => (
            <div className={styles.infoContainer} key={info.heading}>
              <span className={styles.iconContainer}>{info.icon}</span>
              <div className={styles.textContainer}>
                <h3>{info.heading}</h3>
                <span>{info.text}</span>
              </div>
            </div>
          ))}
        </div>
        <NewsLetter />
      </div>
      <div>
        <Map />
      </div>
    </div>
  );
}

export default ContactPage;
