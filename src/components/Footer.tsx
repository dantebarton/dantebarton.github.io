
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-300">
              &copy; {currentYear} Danté Barton. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center text-sm text-gray-300">
            <p>Made with</p>
            <Heart className="w-4 h-4 mx-1 text-red-400" />
            <p>in Boston, MA</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
