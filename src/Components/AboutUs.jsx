import { Fade } from "react-awesome-reveal";

const AboutUs = () => {
  return (
    <section id="about-us" className="py-8">
      <div className="container mx-auto px-4">
        <Fade direction="up">
          <h2 className="text-3xl font-bold text-center mb-4">About Us</h2>
          <p className="text-center mb-8">
            We are committed to making a difference by supporting various campaigns and helping communities thrive. Our platform provides a space for people to share their stories, raise funds, and achieve their goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 rounded-lg shadow-md bg-primary bg-opacity-30 text-primary-content">
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p>
                Our mission is to empower individuals and communities to achieve their dreams by providing a platform for crowdfunding and support.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-primary bg-opacity-30 text-primary-content">
              <h3 className="text-xl font-bold mb-2">Our Vision</h3>
              <p>
                We envision a world where everyone has the opportunity to bring their ideas to life, no matter their background or circumstances.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-primary bg-opacity-30 text-primary-content">
              <h3 className="text-xl font-bold mb-2">Our Values</h3>
              <p>
                We value integrity, transparency, and community. We strive to build a supportive and inclusive environment for all our users.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default AboutUs;
