const ContactForm = () => (
  <section
    id="contact"
    className="py-16 relative bg-cover bg-center"
    style={{ backgroundImage: "url('/food1.jpg')" }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <h3 className="text-4xl font-bold text-center mb-10 text-white relative z-10">Contact Us</h3>
    <div className="container mx-auto max-w-md relative z-10">
      <form className="bg-black bg-opacity-70 shadow-lg rounded-lg p-6">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 mb-4 border border-gray-500 rounded text-white bg-gray-800"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border border-gray-500 rounded text-white bg-gray-800"
        />
        <textarea
          placeholder="Message"
          className="w-full p-3 mb-4 border border-gray-500 rounded h-32 text-white bg-gray-800"
        ></textarea>
        <button
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default ContactForm;

  