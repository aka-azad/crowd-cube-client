
const testimonials = [
  {
    name: "John Doe",
    image:
      "https://t3.ftcdn.net/jpg/01/02/92/28/360_F_102922859_49NCftst8E8eVSYSUH7FnuG5ie6YqQOk.jpg",
    text: "Crowdcube helped me bring my dream project to life. I couldn't have done it without this amazing platform!",
  },
  {
    name: "Jane Smith",
    image:
      "https://i.pinimg.com/564x/b8/cb/67/b8cb6778ced7875106ee9080ad8d2958.jpg",
    text: "The support and exposure I received through Crowdcube were phenomenal. Highly recommend it!",
  },
  {
    name: "Sam Wilson",
    image:
      "https://static.vecteezy.com/system/resources/previews/029/288/444/large_2x/bald-man-smiling-in-cancer-hospital-bed-with-empty-space-for-text-photo.jpg",
    text: "I was able to gather funds for my medical expenses thanks to the kind people on Crowdcube. Forever grateful.",
  },
  {
    name: "Sam Wilson",
    image:
      "https://static.vecteezy.com/system/resources/previews/029/288/444/large_2x/bald-man-smiling-in-cancer-hospital-bed-with-empty-space-for-text-photo.jpg",
    text: "I was able to gather funds for my medical expenses thanks to the kind people on Crowdcube. Forever grateful.",
  },
];

const Testimonials = () => {
  return (
    <div className="container mx-auto my-11">
      <h2 className="text-3xl font-bold text-center mb-6">
        What Our Users Say
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-primary bg-opacity-30 text-primary-content shadow-lg rounded-lg p-6 text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 object-cover h-24 rounded-full mx-auto mb-4"
            />
            <p className="text-xl font-semibold mb-2">{testimonial.name}</p>
            <p className="">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
