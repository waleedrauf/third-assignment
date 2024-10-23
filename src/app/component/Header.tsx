import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-2xl">My Landing Page</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
