import { useEffect, useState } from "react";
import CampaignCard from "./CampaignCard";
import LottieLoader from "./LottieLoader";
import { Link } from "react-router";

const RunningCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://crowdcube-server-phi.vercel.app/running-campaigns")
      .then((response) => response.json())
      .then((data) => {
        setCampaigns(data);
        setLoading(false);
      })
      .catch((error) =>
        console.error("Error fetching running campaigns:", error)
      );
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">
          Running Campaigns
        </h1>
        <LottieLoader />
      </div>
    );
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Running Campaigns</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign._id} campaign={campaign} />
        ))}
      </div>
      <div className="w-fit mx-auto">
        <Link
          className="btn btn-accent rounded-lg font-bold mt-6"
          to={"/campaigns"}
        >
          Show More
        </Link>
      </div>
    </div>
  );
};

export default RunningCampaigns;
