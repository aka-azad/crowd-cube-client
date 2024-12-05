import { useEffect, useState } from "react";
import CampaignCard from "./CampaignCard";

const RunningCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/running-campaigns")
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
        <span className="loading loading-spinner loading-lg flex item-center mx-auto"></span>
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
    </div>
  );
};

export default RunningCampaigns;
