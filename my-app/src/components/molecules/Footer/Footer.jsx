import Link from 'next/link';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#9dc084' }} className="  rounded-3xl mr-3 ml-3 mt-3 text-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">
              Contact
            </h3>
            <p className="mb-2">Address: 123 Example Street, City, Country</p>
            <p className="mb-2">Phone: +123 456 789</p>
            <p>Email: <a href="mailto:contact@example.com" className="hover:text-blue-200">contact@example.com</a></p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">
              Lien Rapides
            </h3>
            <ul>
              <li><Link href="/" className="hover:text-blue-200">Acceuil</Link></li>
              <li><Link href="/Membres" className="hover:text-blue-200">Actualités</Link></li>
              <li><Link href="/Gallery" className="hover:text-blue-200">Présentation</Link></li>
              <li><Link href="/Event" className="hover:text-blue-200">Recherche</Link></li>
              <li><Link href="/Contact" className="hover:text-blue-200">Formation</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-transform transform hover:scale-110">
                <Facebook style={{ fontSize: 28 }} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-transform transform hover:scale-110">
                <Twitter style={{ fontSize: 28 }} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-transform transform hover:scale-110">
                <Instagram style={{ fontSize: 28 }} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-transform transform hover:scale-110">
                <LinkedIn style={{ fontSize: 28 }} />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500">
              Newsletter
            </h3>
            <p className="mb-4">Sign up for our newsletter to receive the latest news and offers.</p>
            <form action="#" method="POST" className="flex flex-col">
              <input
                type="email"
                placeholder="Your email"
                className="mb-2 p-2 rounded-md text-gray-900 focus:ring-2 focus:ring-yellow-500"
                required
              />
              <Link
                href="/login"
                className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 transition-colors"
              >
                Sign Up
              </Link>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-black font-bold">
          <p>&copy; 2024 OTCB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
