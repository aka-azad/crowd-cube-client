import { useEffect, useState } from "react";
import CampaignCard from "../Components/CampaignCard";

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/campaigns")
      .then((response) => response.json())
      .then((data) => setCampaigns(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">All Campaigns</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {campaigns.map((campaign) => (
          
          <CampaignCard key={campaign._id} campaign={campaign}></CampaignCard>
        ))}
      </div>
    </div>
  );
};

export default Campaigns;
