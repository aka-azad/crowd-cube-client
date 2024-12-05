import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyCampaigns = () => {
  const { user } = useContext(AuthContext);

  const [myCampaigns, setMyCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/campaigns/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyCampaigns(data);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return (
      <span className="loading loading-spinner loading-lg flex item-center mx-auto"></span>
    );
  }
  if (myCampaigns.length == 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-3xl my-5">
        <h1 className="text-5xl font-extrabold mb-8">
          {"You Don't have any campaigns on going!"}
        </h1>
        <Link
          to={"/add-campaign"}
          className="btn btn-outline btn-lg font-semibold border-white text-white hover:bg-white hover:text-black"
        >
          Add A New Campaign
        </Link>
      </div>
    );
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        fetch(`http://localhost:5000/campaigns/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              setLoading(false);
              setMyCampaigns(
                myCampaigns.filter((campaign) => campaign._id !== id)
              );
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => {
            setLoading(false);
            console.log(err);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              footer: `<p>${err.message}</p>`,
            });
          });
      }
    });
  };

  return (
    <div className="container mx-auto p-4 min-h-[600px]">
      <h1 className="text-3xl font-bold text-center mb-6">My Campaigns</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="*:border *:text-center">
              <th>Title</th>
              <th>Type</th>
              <th>Min Donation</th>
              <th>Deadline</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myCampaigns.map((campaign) => (
              <tr className="*:border " key={campaign._id}>
                <td className="font-semibold ">{campaign.title}</td>
                <td>{campaign.type}</td>
                <td>{campaign.minDonation}</td>
                <td>{new Date(campaign.deadline).toLocaleDateString()}</td>
                <td>
                  <div className="md:flex">
                    <Link
                      to={`/update-campaign/${campaign._id}`}
                      className="btn btn-sm btn-primary mr-2 mb-2 md:w-1/2 w-auto"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(campaign._id)}
                      className="btn btn-sm btn-warning md:w-1/2 w-auto"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCampaigns;
