import { Fade } from "react-awesome-reveal";
import Banner from "../Components/Banner";
import HowItWorks from "../Components/HowItWorks";
import RunningCampaigns from "../Components/RunningCampaigns";
import Testimonials from "../Components/Testimonials";

import ContactUs from "../Components/ContactUs";
import AboutUs from "../Components/AboutUs";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Fade direction="down">
        <Banner />
      </Fade>
      <div className="divider"></div>
      <RunningCampaigns />
      <div className="divider"></div>
      <Fade direction="down">
        <Testimonials />
      </Fade>
      <div className="divider"></div>
      <Fade direction="down">
        <HowItWorks />
      </Fade>
      <div className="divider"></div>
      <Fade direction="down">
        <AboutUs />
      </Fade>
      <div className="divider"></div>
      <Fade direction="down">
        <ContactUs />
      </Fade>
    </div>
  );
};



export default Home;
