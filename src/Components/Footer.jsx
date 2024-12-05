import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white">
      <footer className="max-w-[1300px] mx-auto py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">CrowdCube</h2>
              <p className="mt-2 text-gray-400">
                Empowering ideas, funding futures.
              </p>
            </div>
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
              <ul>
                <li>
                  <Link to={"/"} className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/campaigns"}
                    className="text-gray-400 hover:text-white"
                  >
                    All Campaigns
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/add-campaign"}
                    className="text-gray-400 hover:text-white"
                  >
                    Add Campaign
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/my-campaigns"}
                    className="text-gray-400 hover:text-white"
                  >
                    My Campaigns
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/my-donations"}
                    className="text-gray-400 hover:text-white"
                  >
                    My Donations
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <p className="text-gray-400">
                123 Crowdcube Street, Funding City
              </p>
              <p className="text-gray-400">Email: support@crowdcube.com</p>
              <div className="flex mt-2">
                <a
                  href="https://facebook.com"
                  className="text-gray-400 hover:text-white mx-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.676 0H1.324C.594 0 0 .594 0 1.324v21.352C0 23.406.594 24 1.324 24H12.82v-9.294H9.692V11.5h3.128v-2.429c0-3.094 1.892-4.778 4.659-4.778 1.325 0 2.462.099 2.795.144v3.239l-1.917.001c-1.504 0-1.796.715-1.796 1.763V11.5h3.591l-.468 3.206h-3.123V24h6.126c.73 0 1.324-.594 1.324-1.324V1.324C24 .594 23.406 0 22.676 0z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  className="text-gray-400 hover:text-white mx-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557a9.826 9.826 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.938.555-1.978.959-3.084 1.175a4.924 4.924 0 00-8.39 4.49A13.978 13.978 0 011.671 3.149a4.927 4.927 0 001.523 6.574 4.93 4.93 0 01-2.229-.616v.061a4.926 4.926 0 003.946 4.827 4.924 4.924 0 01-2.224.084 4.93 4.93 0 004.6 3.42A9.872 9.872 0 010 21.543a13.935 13.935 0 007.548 2.212c9.058 0 14.01-7.507 14.01-14.01 0-.213-.004-.426-.014-.637A9.953 9.953 0 0024 4.557z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-gray-400 hover:text-white mx-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.226.792 24 1.771 24h20.454C23.207 24 24 23.226 24 22.273V1.727C24 .774 23.207 0 22.225 0zM7.119 20.452H3.689V9.038h3.43v11.414zM5.404 7.705c-1.096 0-1.98-.888-1.98-1.983 0-1.093.885-1.982 1.98-1.982 1.092 0 1.982.889 1.982 1.982 0 1.095-.89 1.983-1.982 1.983zm15.041 12.747h-3.432V14.53c0-1.409-.028-3.226-1.967-3.226-1.967 0-2.268 1.537-2.268 3.122v6.026H9.346V9.038h3.292v1.553h.045c.457-.864 1.573-1.772 3.236-1.772 3.462 0 4.101 2.278 4.101 5.241v6.392z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-400 mt-6">
            &copy; 2024 Crowdcube. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
