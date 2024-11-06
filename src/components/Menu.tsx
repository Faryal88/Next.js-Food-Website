import Image from 'next/image';

const Menu = () => {
	const dishes = [
	  { name: 'Pasta Primavera', description: 'A delicious pasta with mixed vegetables', price: '$12.99', image: '/pasta1.jpg', width: 400, height: 200 },
	  { name: 'Grilled Salmon', description: 'Freshly grilled salmon with a side of lemon', price: '$16.99', image: '/salmon2.jpg', width: 400, height: 250 },
	  { name: 'Chocolate Lava Cake', description: 'Rich chocolate cake with a gooey center', price: '$6.99', image: '/lavacake3.jpg', width: 350, height: 200 },
	  { name: 'Caesar Salad', description: 'Classic Caesar salad with croutons', price: '$8.99', image: '/salad4.jpg', width: 300, height: 200 },
	  { name: 'Steak & Fries', description: 'Juicy steak with crispy fries', price: '$18.99', image: '/steak5.jpg', width: 450, height: 250 },
	  { name: 'Cheesecake', description: 'Creamy cheesecake with strawberry sauce', price: '$7.99', image: '/cheesecake6.jpg', width: 400, height: 200 },
	];
  
	return (
	  <section id="menu" className="py-16 bg-black">
		<h3 className="text-4xl font-bold text-center mb-10 text-white">Our Menu</h3>
		<div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
		  {dishes.map((dish, index) => (
			<div key={index} className="bg-gray-900 text-white shadow-lg rounded-lg overflow-hidden">
			  <Image 
				src={dish.image} 
				alt={dish.name} 
				width={dish.width} 
				height={dish.height} 
				className="w-full h-48 object-cover" 
			  />
			  <div className="p-6 text-center">
				<h4 className="text-2xl font-bold">{dish.name}</h4>
				<p className="mt-2 text-gray-300">{dish.description}</p>
				<p className="mt-4 text-yellow-400 font-bold text-lg">{dish.price}</p>
				<button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full transition duration-300">
				  Buy Now
				</button>
			  </div>
			</div>
		  ))}
		</div>
	  </section>
	);
};

export default Menu;
