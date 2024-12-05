import Banner from "../Components/Banner";
import HowItWorks from "../Components/HowItWorks";
import RunningCampaigns from "../Components/RunningCampaigns";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="divider"></div>
      <RunningCampaigns /> <div className="divider"></div>
      <Testimonials /> <div className="divider"></div>
      <HowItWorks />
    </div>
  );
};

export default Home;
