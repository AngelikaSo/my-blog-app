import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="lg:px-13.25">
      <div className="flex flex-col content-between w-full bg-main">
        <div className="flex flex-col lg:flex-row py-10 items-start">
          <ul className="px-6 py-10 lg:py-0 lg:px-20">
            <li className="py-1">
              <Link to="/">Home</Link>
            </li>
            <li className="py-1">
              <Link to="/posts">Posts</Link>
            </li>
            <li className="py-1">
              <Link to="/">Contact</Link>
            </li>
          </ul>
          <ul className="px-6 lg:px-20">
            <li className="py-1">
              <Link to="/FAQ">FAQs</Link>
            </li>
            <li className="py-1">
              <Link to="/Privacy">Privacy</Link>
            </li>
            <li className="py-1">
              <Link to="/Terms">Terms</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col ">
          <ul className="flex flex-row pt-10 pb-2 justify-center">
            <li className="mx-2 p-2 bg-light-blue rounded-full text-white">
              <a href="https://www.facebook.com">
                <FaFacebook size={24} />
              </a>
            </li>
            <li className="mx-2 p-2 bg-light-blue rounded-full text-white">
              <a href="https://www.instagram.com">
                <FaInstagram size={24} />
              </a>
            </li>
            <li className="mx-2 p-2 bg-light-blue rounded-full text-white">
              <a href="https://www.tweeter.com">
                <FaTwitter size={24} />
              </a>
            </li>
          </ul>
          <p className="flex flex-row justify-center pb-10">
            All rights reserved Cook with me
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
