import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const AddCampaign = () => {
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [minDonation, setMinDonation] = useState("");
  const [deadline, setDeadline] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const campaignData = {
      title,
      type,
      description,
      minDonation,
      deadline,
      imageURL,
      email: user.email,
      fundBalance: 0,
    };
    console.log(campaignData);

    fetch("http://localhost:5000/campaigns", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(campaignData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    toast.success("Campaign added successfully!");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Add New Campaign</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md"
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
            <option value="personal">Personal Issue</option>
            <option value="startup">Startup</option>
            <option value="business">Business</option>
            <option value="creative">Creative Ideas</option>
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
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCampaign;
