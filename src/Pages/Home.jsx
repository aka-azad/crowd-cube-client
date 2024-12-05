import { Fade } from "react-awesome-reveal";
import Banner from "../Components/Banner";
import HowItWorks from "../Components/HowItWorks";
import RunningCampaigns from "../Components/RunningCampaigns";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <div>
      <Fade direction="down">
        <Banner />
      </Fade>
      <div className="divider"></div>
      <RunningCampaigns />
      <div className="divider"></div>
      <Fade direction="up">
        <Testimonials />
      </Fade>
      <div className="divider"></div>
      <Fade direction="up">
        <HowItWorks />
      </Fade>
    </div>
  );
};

export default Home;
