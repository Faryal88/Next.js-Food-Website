import Link from 'next/link';

const About = () => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">About Us</h2>
        <p className="text-lg text-gray-200 mb-8 text-center">
          Welcome to Flavor Fusion, where every meal is a celebration of flavor and culture! Our restaurant is dedicated to serving mouthwatering dishes crafted from the freshest ingredients, ensuring that each bite takes you on a culinary journey. Whether you`re craving traditional favorites or modern twists, our diverse menu caters to every palate. With a cozy atmosphere and friendly staff, we aim to create a memorable dining experience for you and your loved ones. Join us at Foodie, where passion for food meets hospitality!
        </p>
        <Link href="/menu" legacyBehavior>
          <a className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full transition duration-300">
            Check Our Menu
          </a>
        </Link>
      </div>
    </section>
  );
};

export default About;


