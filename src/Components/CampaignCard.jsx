import PropTypes from "prop-types";
import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const CampaignCard = ({ campaign }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSeeMore = () => {
    if (user) {
      navigate(`/campaign-details/${campaign._id}`);
    } else {
      Swal.fire({
        title: "Log In First!",
        text: "Authentication Required",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signin");
        }
      });
    }
  };

  return (
    <div className="max-w-sm rounded-2xl border border-white border-opacity-20 overflow-hidden pb-4 shadow-lg ">
      <img
        className="w-full h-64 object-cover"
        src={campaign.imageURL}
        alt={campaign.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{campaign.title}</div>
        <p className=" text-base">Type: {campaign.type}</p>
        <p className=" text-base">Minimum Donation: {campaign.minDonation}</p>
        <p className=" text-base">
          Deadline: {new Date(campaign.deadline).toLocaleDateString()}
        </p>
        <p className=" text-base">{campaign.description}</p>
      </div>
      <div>
        <div className="px-6 pt-2 pb-2">
          <button onClick={handleSeeMore}
            className=" btn btn-primary rounded-lg    text-sm font-semibold"
          >
            See More
          </button >
        </div>
      </div>
    </div>
  );
};

CampaignCard.propTypes = {
  campaign: PropTypes.object.isRequired,
};

export default CampaignCard;
