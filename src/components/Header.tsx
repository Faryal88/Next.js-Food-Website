import Link from 'next/link';

const Header = () => (
  <header className="bg-gray-900 text-white p-4 sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold text-yellow-500">Flavor Fusion</h1>
      <nav>
        <Link href="/" className="px-4 hover:text-yellow-400">Home</Link>
        <Link href="#menu" className="px-4 hover:text-yellow-400">About Us</Link>
        <Link href="#about" className="px-4 hover:text-yellow-400">Menu</Link>
        <Link href="#contact" className="px-4 hover:text-yellow-400">Contact</Link>
      </nav>
    </div>
  </header>
);

export default Header;
