import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Drawer = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-main flex z-50">
      <nav className="h-screen w-full flex flex-col justify-between">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 font-bold text-xl text-red"
        >
          <GrClose />
        </button>
        <div className="flex flex-col items-end w-full px-6 py-14 font-bold mt-12">
          <ul className="flex flex-col items-end space-y-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center mb-6">
          <ul className="flex flex-row space-x-4 mb-2">
            <li className="p-2 bg-light-blue rounded-full text-white">
              <a href="https://www.facebook.com" aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
            </li>
            <li className="p-2 bg-light-blue rounded-full text-white">
              <a href="https://www.instagram.com" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
            </li>
            <li className="p-2 bg-light-blue rounded-full text-white">
              <a href="https://www.twitter.com" aria-label="Twitter">
                <FaTwitter size={24} />
              </a>
            </li>
          </ul>
          <p className="text-center">All rights reserved Cook with me</p>
        </div>
      </nav>
    </div>
  );
};

export default Drawer;
