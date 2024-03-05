import About from "../LandingPage/About";
import Partners from "../LandingPage/Partners";

function AboutPage() {
  return (
    <div>
      <About needsButton={false} />
      <Partners />
    </div>
  );
}

export default AboutPage;
