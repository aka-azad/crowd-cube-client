import { useContext, useEffect, useState } from "react";
import AuthContext from "../Provider/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import campaignSVG from "../assets/new-campaign.svg";
import { Fade } from "react-awesome-reveal";
import axios from "axios";
import { useParams } from "react-router";
import LottieLoader from "../Components/LottieLoader";
const UpdateCampaign = () => {
  const { user } = useContext(AuthContext);
  const params = useParams();
  const [campaign, setCampaign] = useState();
  const navigate = useNavigate();
  const [title, setTitle] = useState(campaign?.title || "");
  const [type, setType] = useState(campaign?.type || "");
  const [description, setDescription] = useState(campaign?.description || "");
  const [minDonation, setMinDonation] = useState(campaign?.minDonation || "");
  const [deadline, setDeadline] = useState(campaign?.deadline || "");
  const [imageURL, setImageURL] = useState(campaign?.imageURL || "");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/campaign/${params.id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setCampaign(res.data);
        setLoading(false);
      });
  }, [params]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const campaignData = {
      title,
      type,
      description,
      minDonation: Number(minDonation),
      deadline,
      imageURL,
      email: user.email,
    };

    axios
      .patch(`http://localhost:5000/campaigns/${campaign._id}`, campaignData, {
        withCredentials: true,
      })
      .then((data) => {
        if (data.data.modifiedCount > 0) {
          toast.success("Campaign Updated successfully!");
          navigate("/my-campaigns");
        }
      })
      .catch((err) => console.log(err));
  };

  if (loading) {
    return <LottieLoader />;
  }

  return (
    <div className="container overflow-hidden flex gap-3 items-center flex-row mx-auto p-4">
      {campaign && (
        <Fade direction="left" className="flex-grow">
          <div className=" pt-6">
            <h1 className="text-3xl font-bold text-center mb-6">
              Update Campaign
            </h1>
            <form
              onSubmit={handleSubmit}
              className="max-w-screen-sm mx-auto p-8 rounded-lg shadow-md"
            >
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  value={campaign?.imageURL}
                  onChange={(e) => setImageURL(e.target.value)}
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Campaign Title</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  value={campaign?.title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Campaign Type</span>
                </label>
                <select
                  className="select select-bordered"
                  value={campaign?.type}
                  onChange={(e) => setType(e.target.value)}
                  required
                >
                  <option value="">Select a type</option>
                  <option value="Personal">Personal Issue</option>
                  <option value="Startup">Startup</option>
                  <option value="Business">Business</option>
                  <option value="Creative Ideas">Creative Ideas</option>
                </select>
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  value={campaign?.description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Minimum Donation Amount</span>
                </label>
                <input
                  type="number"
                  className="input input-bordered"
                  value={campaign?.minDonation}
                  onChange={(e) => setMinDonation(e.target.value)}
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Deadline</span>
                </label>
                <input
                  type="date"
                  className="input input-bordered"
                  value={campaign?.deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">User Email</span>
                </label>
                <input
                  type="email"
                  className="input input-bordered"
                  value={user?.email}
                  readOnly
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  value={user?.displayName}
                  readOnly
                />
              </div>
              <div className="form-control">
                <button type="submit" className="btn btn-primary w-full">
                  Update
                </button>
              </div>
            </form>
          </div>
        </Fade>
      )}{" "}
      <Fade direction="right" className="w-2/4 hidden sm:flex">
        <div className="w-full hidden sm:flex">
          <img src={campaignSVG} alt="" />
        </div>
      </Fade>
    </div>
  );
};

export default UpdateCampaign;
