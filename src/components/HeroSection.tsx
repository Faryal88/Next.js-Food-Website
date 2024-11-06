import Image from "next/image";

const HeroSection = () => (
  <section className="relative bg-cover bg-center h-screen flex items-center justify-center text-center text-white">
    <div className="absolute inset-0">
      <Image
        src={"/food1.jpg"}
        alt={"Image"}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
    <div className="relative bg-black bg-opacity-50 p-6 rounded-lg z-10">
      <h2 className="text-5xl font-bold">Delicious Food Delivered To You</h2>
      <p className="mt-4 text-lg">Explore our menu and order your favorite dishes</p>
      <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
        See Menu
      </button>
    </div>
  </section>
);

export default HeroSection;


