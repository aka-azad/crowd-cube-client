import { useContext, useState } from "react";
import AuthContext from "../Provider/AuthContext";
import { toast } from "react-toastify";
import campaign from "../assets/new-campaign.svg";
import { Fade } from "react-awesome-reveal";
import axios from "axios";

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
      minDonation: Number(minDonation),
      deadline,
      imageURL,
      email: user.email,
      fundBalance: 0,
    };

    axios
      .post("http://localhost:5000/campaigns", campaignData, {
        withCredentials: true,
      })
      .then((data) => {
        if (data.data.insertedId > 0) {
          toast.success("Campaign added successfully!");
          toast.success("Campaign added successfully!");
        }
      })
      .catch((err) => toast.warning(err.message));
  };

  return (
    <div className="container flex gap-3 items-center flex-row mx-auto p-4 overflow-hidden">
      <Fade direction="left" className="flex-grow">
        <div className=" pt-6">
          {" "}
          <h1 className="text-3xl font-bold text-center mb-6">
            Add New Campaign
          </h1>
          <form
            onSubmit={handleSubmit}
            className="max-w-screen-sm mx-auto border border-white border-opacity-20 p-8 rounded-lg shadow-md"
          >
            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-2">
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
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-2">
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
      </Fade>
      <Fade direction="right" className="w-2/4 hidden sm:flex">
        {" "}
        <div className="w-full hidden sm:flex">
          <img src={campaign} alt="" />
        </div>
      </Fade>
    </div>
  );
};

export default AddCampaign;
