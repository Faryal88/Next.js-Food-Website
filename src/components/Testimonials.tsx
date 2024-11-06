const Testimonials = () => (
	<section id="testimonials" className="bg-gray-900 py-16">
	  <h3 className="text-4xl font-bold text-center mb-10 text-white">What Our Customers Say</h3>
	  <div className="container mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		
		<div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform duration-300 transform hover:scale-105">
		  <img src="/food22.jpg" alt="John Doe" className="w-16 h-16 rounded-full mx-auto mb-4"/>
		  <p className="text-gray-900 italic font-bold">Great food, fast delivery, and excellent customer service</p>
		  <div className="flex justify-center mt-3">
			<span className="font-bold text-yellow-500">★ ★ ★ ★ ★</span>
		  </div>
		  <h4 className="mt-4 font-bold text-lg text-gray-900">John Doe</h4>
		</div>
  
		<div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform duration-300 transform hover:scale-105">
		  <img src="/food22.jpg" alt="Jane Smith" className="w-16 h-16 rounded-full mx-auto mb-4"/>
		  <p className="text-gray-900 italic font-bold">Delicious and fresh every time. Highly recommended</p>
		  <div className="flex justify-center mt-3">
			<span className="font-bold text-yellow-500">★ ★ ★ ★ ★</span>
		  </div>
		  <h4 className="mt-4 font-bold text-lg text-gray-900">Jane Smith</h4>
		</div>
  
		<div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform duration-300 transform hover:scale-105">
		  <img src="/food22.jpg" alt="Alex Lee" className="w-16 h-16 rounded-full mx-auto mb-4"/>
		  <p className="text-gray-900 italic font-bold">Amazing flavors, will definitely order again</p>
		  <div className="flex justify-center mt-3">
			<span className="font-bold text-yellow-500">★ ★ ★ ★ ★</span>
		  </div>
		  <h4 className="mt-4 font-bold text-lg text-gray-900">Alex Lee</h4>
		</div>
  
	  </div>
	</section>
  );
  
  export default Testimonials;
  