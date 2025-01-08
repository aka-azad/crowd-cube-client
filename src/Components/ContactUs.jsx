import { Fade } from "react-awesome-reveal";

const ContactUs = () => {
  return (
    <section id="contact-us" className="py-8">
      <div className="container mx-auto px-4">
        <Fade direction="left">
          <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
          <p className="text-center mb-8">
            If you have any questions or need further information, feel free to reach out to us.
          </p>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your Message"
                rows="5"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-primary text-primary-content font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Send Message
              </button>
            </div>
          </form>
        </Fade>
      </div>
    </section>
  );
};

export default ContactUs;
