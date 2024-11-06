const Footer = () => (
	<footer className="bg-gray-900 text-gray-300 py-8">
	  <div className="container mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
		
		<div>
		  <h4 className="text-xl font-semibold text-white mb-2">Contact Us</h4>
		  <p>Restaurant Street</p>
		  <p>City, State, 77742</p>
		  <p>Email: info@flavorfusion.com</p>
		  <p>Phone: (123) 456-7890</p>
		</div>

		<div>
		  <h4 className="text-xl font-semibold text-white mb-2">Follow Us</h4>
		  <ul>
			<li><a href="#" className="text-orange-400 hover:underline">Facebook</a></li>
			<li><a href="#" className="text-orange-400 hover:underline">Twitter</a></li>
			<li><a href="#" className="text-orange-400 hover:underline">Instagram</a></li>
			<li><a href="#" className="text-orange-400 hover:underline">TikTok</a></li>
		  </ul>
		</div>
  
		<div>
		  <h4 className="text-xl font-semibold text-white mb-2">Quick Links</h4>
		  <ul>
			<li><a href="#" className="text-orange-400 hover:underline">Home</a></li>
			<li><a href="#" className="text-orange-400 hover:underline">About Us</a></li>
			<li><a href="#" className="text-orange-400 hover:underline">Menu</a></li>
			<li><a href="#" className="text-orange-400 hover:underline">Contact</a></li>
		  </ul>
		</div>
		
	  </div>
  
	  <div className="border-t border-gray-700 mt-8 pt-4 text-center">
		<p>&copy; 2024 Flavor Fusion All Rights Reserved.</p>
	  </div>
	</footer>
  );
  
  export default Footer;
  