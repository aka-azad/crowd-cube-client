import Lottie from "lottie-react";
import lottieLooking from "../assets/lottieLooking.json";

const LottieLoader = () => {
  return (
    <div>
      <Lottie animationData={lottieLooking} />
    </div>
  );
};

export default LottieLoader;
