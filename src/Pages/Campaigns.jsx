import { useEffect, useState } from "react";
import LottieLoader from "../Components/LottieLoader";
import { Link } from "react-router";

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [originalCampaigns, setOriginalCampaigns] = useState([]);
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    fetch("http://localhost:5000/campaigns")
      .then((response) => response.json())
      .then((data) => {
        setCampaigns(data);
        setOriginalCampaigns(data);
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
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">All Campaigns</h1>
        <LottieLoader />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">All Campaigns</h1>
      <div className="flex justify-end items-center mb-4">
        <span className="mr-2 text-gray-800 dark:text-white">Sort by:</span>
        <div className="relative inline-block">
          <select
            onChange={(e) => handleSort(e.target.value)}
            value={sortOrder}
            className="block appearance-none w-full bg-white dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-400 dark:border-gray-600 hover:border-gray-500 dark:hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
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
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Type</th>
              <th className="border px-4 py-2">Minimum Donation</th>
              <th className="border px-4 py-2">Deadline</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign._id}>
                <td className="border px-4 py-2">{campaign.title}</td>
                <td className="border px-4 py-2">{campaign.type}</td>
                <td className="border px-4 py-2">{campaign.minDonation}</td>
                <td className="border px-4 py-2">
                  {new Date(campaign.deadline).toLocaleDateString()}
                </td>
                <td className="border px-4 py-2">
                  <Link
                    to={`/campaign-details/${campaign._id}`}
                    className="btn btn-primary w-full font-semibold"
                  >
                    See More
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Campaigns;
