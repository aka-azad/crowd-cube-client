import { useContext, useEffect, useState } from "react";
import AuthContext from "../Provider/AuthContext";
import { Link } from "react-router";
import LottieLoader from "../Components/LottieLoader";
import DonationCard from "../Components/DonationCard";
import axios from "axios";

const MyDonations = () => {
  const { user } = useContext(AuthContext);
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/my-donations?userEmail=${user.email}`, {
        withCredentials: true,
      })
      .then((data) => {
        setDonations(data.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching donations:", error));
  }, [user]);
  if (loading) {
    return <LottieLoader />;
  }
  if (donations.length == 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-3xl my-5">
        <h1 className="text-5xl font-extrabold mb-8">
          {"You Don't have any donation history!"}
        </h1>
        <Link
          to={"/campaigns"}
          className="btn btn-outline btn-lg font-semibold border-white text-white hover:bg-white hover:text-black"
        >
          Look for running Campaigns
        </Link>
      </div>
    );
  }
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-6">My Donations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {donations.map((donation) => (
          <DonationCard key={donation._id} campaign={donation} />
        ))}
      </div>
    </div>
  );
};

export default MyDonations;
