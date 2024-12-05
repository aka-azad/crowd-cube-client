import PropTypes from "prop-types";

const CampaignCard = ({ campaign }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={campaign.imageURL} alt={campaign.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{campaign.title}</div>
        <p className="text-gray-700 text-base">Type: {campaign.type}</p>
        <p className="text-gray-700 text-base">
          Minimum Donation: {campaign.minDonation}
        </p>
        <p className="text-gray-700 text-base">
          Deadline: {new Date(campaign.deadline).toLocaleDateString()}
        </p>
        <p className="text-gray-700 text-base">{campaign.description}</p>
      </div>
      
    </div>
  );
};

CampaignCard.propTypes = {
  campaign: PropTypes.object.isRequired,
};

export default CampaignCard;
