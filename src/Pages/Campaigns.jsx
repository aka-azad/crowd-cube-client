import { useEffect, useState } from "react";
import LottieLoader from "../Components/LottieLoader";
import CampaignCard from "../Components/CampaignCard";
import axios from "axios";

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [originalCampaigns, setOriginalCampaigns] = useState([]);
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    axios
      .get("http://localhost:5000/campaigns")
      .then((data) => {
        setCampaigns(data.data);
        setOriginalCampaigns(data.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  const handleSort = (order) => {
    let sortedCampaigns;
    if (order === "asc") {
      sortedCampaigns = [...campaigns].sort(
        (a, b) => a.minDonation - b.minDonation
      );
    } else if (order === "desc") {
      sortedCampaigns = [...campaigns].sort(
        (a, b) => b.minDonation - a.minDonation
      );
    } else {
      sortedCampaigns = originalCampaigns;
    }
    setCampaigns(sortedCampaigns);
    setSortOrder(order);
  };

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-6">All Campaigns</h1>
        <LottieLoader />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-6">All Campaigns</h1>
      <div className="flex justify-end items-center mb-4">
        <span className="mr-2 font-semibold">Sort by:</span>
        <div className="relative inline-block">
          <select
            onChange={(e) => handleSort(e.target.value)}
            value={sortOrder}
            className="block appearance-none w-full bg-accent bg-opacity-30  text-gray-800  border-gray-400  hover:border-gray-500  px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="default">Default</option>
            <option value="asc">Minimum Donation</option>
            <option value="desc">Maximum Donation</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-white">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign._id} campaign={campaign} />
        ))}
      </div>{" "}
    </div>
  );
};

export default Campaigns;
