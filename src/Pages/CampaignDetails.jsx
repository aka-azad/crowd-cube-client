import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const CampaignDetails = () => {
  const campaign = useLoaderData();
  const { user } = useContext(AuthContext);
  const [balance, setBalance] = useState(campaign.fundBalance);
  const {
    _id,
    imageURL,
    title,
    type,
    minDonation,
    deadline,
    email,
    description,
  } = campaign;
  const [isDonatable, setDonatable] = useState(false);

  useEffect(() => {
    if (
      campaign.email == user.email ||
      new Date(campaign.deadline) < new Date()
    ) {
      setDonatable(true);
    }
  }, [campaign, user]);
  const handleDonate = () => {
    const donationData = {
      campaignId: _id,
      displayName: user.displayName,
      email: user.email,
      imageURL,
      title,
      type,
      minDonation,
      description,
      deadline,
      donationAmount: Number(campaign.minDonation),
    };

    fetch("https://crowdcube-server-phi.vercel.app/donations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(donationData),
    })
      .then((response) => response.json())
      .then(() => {
        fetch(
          `https://crowdcube-server-phi.vercel.app/fundBalance/${campaign._id}`,
          {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ fundBalance: Number(campaign.minDonation) }),
          }
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              setBalance(balance + Number(campaign.minDonation));
              toast.success("Donation successful!");
            }
          })
          .catch(() => {
            toast.error("Donation failed!");
          });
      })
      .catch(() => {
        toast.error("Donation failed!");
      });
  };

  return (
    <div className="container mx-auto  p-4">
      <h1 className="text-3xl font-bold text-primary-content text-center mb-6">
        Description
      </h1>
      <div className="max-w-4xl mx-auto  rounded-lg shadow-lg p-6">
        <img
          className="w-full h-64 object-cover rounded-lg mb-4"
          src={imageURL}
          alt={title}
        />
        <div>
          <h1 className="text-2xl font-bold text-center mb-6">{title}</h1>
          <table className="table w-full">
            <tbody className="text-left *:border">
              <tr className="*:border">
                <th>Type: </th>
                <td>{type}</td>
              </tr>
              <tr className="*:border">
                <th>Minimum Donation: </th>
                <td>{minDonation}</td>
              </tr>
              <tr className="*:border">
                <th>Deadline: </th>
                <td>{new Date(deadline).toLocaleDateString()}</td>
              </tr>
              <tr className="*:border">
                <th>Description: </th>
                <td>{description}</td>
              </tr>
              <tr className="*:border">
                <th>Money Raised:</th>
                <td>
                  {balance}

                  <small className="text-right">
                    *Reload to see current balance
                  </small>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-fit mx-auto">
          <button
            onClick={handleDonate}
            className="btn btn-primary btn-wide text-lg mt-4"
            disabled={isDonatable}
          >
            Donate
          </button>
        </div>
        {email == user.email && (
          <p className="text-red-500 mt-2">
            You can&apos;t donate on your campaign.
          </p>
        )}
        {new Date(campaign.deadline) < new Date() && (
          <p className="text-red-500 mt-2">
            The deadline for this campaign has passed.
          </p>
        )}
      </div>
    </div>
  );
};

export default CampaignDetails;
