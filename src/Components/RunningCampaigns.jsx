import { useEffect, useState } from "react";
import CampaignCard from "./CampaignCard";
import LottieLoader from "./LottieLoader";
import { Link } from "react-router";
import axios from "axios";

const RunningCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/running-campaigns")
      .then((data) => {
        setCampaigns(data.data);
        setLoading(false);
      })
      .catch((error) =>
        console.error("Error fetching running campaigns:", error)
      );
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          Running Campaigns
        </h1>
        <LottieLoader />
      </div>
    );
  }
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Running Campaigns</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
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
