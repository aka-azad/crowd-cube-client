import PropTypes from "prop-types";
import { Link } from "react-router";

const DonationCard = ({ campaign }) => {
  return (
    <div className="max-w-sm rounded-2xl border border-white border-opacity-20 overflow-hidden pb-4 shadow-lg flex flex-col h-full">
      <img
        className="w-full h-64 object-cover"
        src={campaign.imageURL}
        alt={campaign.title}
      />
      <div className="card-body p-0 flex flex-col flex-grow">
        <div className="px-6 py-4 flex-grow">
          <div className="font-bold text-xl mb-2">{campaign.title}</div>
          <p className="text-base">Type: {campaign.type}</p>
          <p className="text-base">Minimum Donation: {campaign.minDonation}</p>
          <p className="text-base">
            Deadline: {new Date(campaign.deadline).toLocaleDateString()}
          </p>
          <p className="text-base">{campaign.description}</p>
        </div>
        <div className="px-6 pt-2 pb-2 card-actions justify-end">
          <Link
            to={`/campaign-details/${campaign.campaignId}`}
            className="btn btn-primary rounded-lg text-sm font-semibold"
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

DonationCard.propTypes = {
  campaign: PropTypes.object.isRequired,
};

export default DonationCard;
