import { FaUserPlus, FaBullhorn, FaShareAlt, FaDollarSign, FaHeart } from 'react-icons/fa';

const steps = [
  {
    title: "Create an Account",
    description: "Sign up to join our community and start your journey.",
    icon: <FaUserPlus className="w-16 h-16 mx-auto mb-4 text-blue-500" />
  },
  {
    title: "Start a Campaign",
    description: "Create a new campaign to fund your project, idea, or cause.",
    icon: <FaBullhorn className="w-16 h-16 mx-auto mb-4 text-green-500" />
  },
  {
    title: "Share Your Campaign",
    description: "Spread the word about your campaign to attract more contributors.",
    icon: <FaShareAlt className="w-16 h-16 mx-auto mb-4 text-purple-500" />
  },
  {
    title: "Receive Funds",
    description: "Collect the funds raised and put them to good use.",
    icon: <FaDollarSign className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
  },
  {
    title: "Support Others",
    description: "Browse and donate to other campaigns that inspire you.",
    icon: <FaHeart className="w-16 h-16 mx-auto mb-4 text-red-500" />
  }
];

const HowItWorks = () => {
  return (
    <div className="container mx-auto my-11">
      <h2 className="text-3xl font-bold text-center mb-12">How This Platform Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {steps.map((step, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
            {step.icon}
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
