import PropTypes from "prop-types";
import { FaCalendarXmark, FaSackDollar } from "react-icons/fa6";
import { MdOutlineRoute } from "react-icons/md";
import { Link } from "react-router";

const CampaignCard = ({ campaign }) => {
  return (
    <div className="w-[80%] sm:w-full rounded-2xl border bg-accent bg-opacity-15 border-white border-opacity-20 overflow-hidden pb-4 shadow-md shadow-green-100 flex flex-col h-full">
      <figure className="h-48 ">
        <img
          className="w-full h-full object-center object-cover"
          src={campaign.imageURL}
          alt={campaign.title}
        />
      </figure>
      <div className="card-body p-0 flex flex-col flex-grow">
        <div className="px-6 py-4 font-semibold flex-grow">
          <p className="font-bold truncate underline text-xl mb-2">{campaign.title}</p>
          <p className="text-base flex gap-2 items-center">
            <MdOutlineRoute /> {campaign.type}
          </p>
          <p className="text-base flex gap-2 items-center">
            <FaSackDollar /> ${campaign.minDonation}
          </p>
          <p className="text-base flex gap-2 items-center">
            <FaCalendarXmark />{" "}
            {new Date(campaign.deadline).toLocaleDateString()}
          </p>
        </div>
        <div className="px-6 pt-2 pb-2 card-actions justify-end">
          <Link
            to={`/campaign-details/${campaign._id}`}
            className="btn btn-accent text-accent-content rounded-lg text-sm font-semibold"
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

CampaignCard.propTypes = {
  campaign: PropTypes.object.isRequired,
};

export default CampaignCard;
