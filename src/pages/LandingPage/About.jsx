// import { Link } from "react-router-dom";
import styles from "./About.module.css";
import aboutUs from "../../../public/about-us.webp";
import { NavLink } from "react-router-dom";

function About({ needsButton }) {
  return (
    <div className={styles.aboutUsContainer} id="about">
      <div className={styles.aboutUs}>
        <h1 className={styles.aboutUsHeading}>ABOUT US</h1>
        <p className={styles.aboutUsText}>
          ავეჯის მწარმოებელი კომპანია ვარჯი 25 წელია წარმატებით მოღვაწეობს
          საქართველოში. კომპანიის საავეჯე და სამშენებლო ხის მასალები ქართული
          კაკლის, მუხის, წაბლისა და წიფელას ბაზაზე მზადდება. 1999 წლიდან, ვარჯი
          აქცენტს მაღალ ხარისხზე აკეთებს, შედეგად პროდუქცია სრულად აკმაყოფილებს
          ევროპისა და აზიის ბაზრის მოთხოვნებს და კომპანია ექსპორტს სხვადასხვა
          ქვეყნებში ეწევა.
        </p>
        {needsButton && (
          <NavLink to={"/about"}>
            <button className={styles.seeMoreBtn}>მეტის ნახვა</button>
          </NavLink>
        )}
        {/* <Link to="/about">
          <button className={styles.button}>See more</button>
        </Link> */}
      </div>
      <div className={styles.imgContainer}>
        <img className={styles.aboutUsImg} src={aboutUs} />
      </div>
    </div>
  );
}

export default About;
