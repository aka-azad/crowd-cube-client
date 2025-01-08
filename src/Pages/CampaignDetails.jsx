import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import AuthContext from "../Provider/AuthContext";
import { toast } from "react-toastify";
import { Fade } from "react-awesome-reveal";
import axios from "axios";

const CampaignDetails = () => {
  const params = useParams();
  const [campaign, setCampaign] = useState({});
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
  const { user } = useContext(AuthContext);
  const [balance, setBalance] = useState(0);
  const [isDonatable, setDonatable] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/campaign/${params.id}`, {
        withCredentials: true,
      })
      .then((data) => {
        setCampaign(data.data);
        setBalance(data.data.fundBalance);
      });
  }, [params]);
  useEffect(() => {
    if (
      !user ||
      campaign?.email !== user?.email ||
      new Date(campaign.deadline) < new Date()
    ) {
      setDonatable(false);
    }
  }, [campaign, user]);
  const handleDonate = () => {
    const donationData = {
      campaignId: _id,
      displayName: user.displayName,
      email: user?.email,
      imageURL,
      title,
      type,
      minDonation,
      description,
      deadline,
      donationAmount: Number(campaign.minDonation),
    };

    axios
      .post("http://localhost:5000/donations", donationData, {
        withCredentials: true,
      })
      .then(() => {
        axios
          .patch(
            `http://localhost:5000/fundBalance/${campaign._id}`,
            { fundBalance: Number(campaign.minDonation) },
            { withCredentials: true }
          )
          .then((data) => {
            if (data.data.modifiedCount > 0) {
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
    <div className="overflow-hidden">
      <Fade direction="right">
        <div className="container mx-auto  p-4">
          <h1 className="text-3xl font-bold text-primary-content text-center mb-6">
            Detailed Information
          </h1>
          <div className="max-w-4xl mx-auto bg-accent bg-opacity-20  rounded-lg shadow-lg p-6">
            <img
              className="w-full h-64 object-cover object-center rounded-lg mb-4"
              src={imageURL}
              alt={title}
            />
            <div className="">
              <h1 className="text-2xl font-bold text-center mb-6">{title}</h1>
              <table className="table bg-accent bg-opacity-20 w-full">
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
                disabled={!isDonatable}
              >
                Donate
              </button>
            </div>
            {email == user?.email && (
              <p className="text-red-500 mt-2">
                You can&apos;t donate on your campaign.
              </p>
            )}
            {!user && (
              <p className="text-red-500 mt-2">
                If you are not a registered user you can&apos;t donate .
              </p>
            )}
            {new Date(campaign.deadline) < new Date() && (
              <p className="text-red-500 mt-2">
                The deadline for this campaign has passed.
              </p>
            )}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default CampaignDetails;
