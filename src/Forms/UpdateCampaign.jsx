import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { useLoaderData, useNavigate } from "react-router";

const UpdateCampaign = () => {
  const { user } = useContext(AuthContext);
  const campaign = useLoaderData();
  const navigate = useNavigate();
  const [title, setTitle] = useState(campaign?.title || "");
  const [type, setType] = useState(campaign?.type || "");
  const [description, setDescription] = useState(campaign?.description || "");
  const [minDonation, setMinDonation] = useState(campaign?.minDonation || "");
  const [deadline, setDeadline] = useState(campaign?.deadline || "");
  const [imageURL, setImageURL] = useState(campaign?.imageURL || "");

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

    fetch(`https://crowdcube-server-phi.vercel.app/campaigns/${campaign._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(campaignData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Campaign Updated successfully!");
          navigate("/my-campaigns");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Update Campaign</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-8 rounded-lg shadow-md"
      >
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            value={imageURL}
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
            value={title}
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
            value={type}
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
            value={description}
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
            value={minDonation}
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
            value={deadline}
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
  );
};

export default UpdateCampaign;
