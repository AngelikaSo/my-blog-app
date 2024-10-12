import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav className="flex">
      <ul className="flex flex-row px-6 py-2 font-bold">
        <li className="px-6 py-2">
          <Link to="/">Home</Link>
        </li>
        <li className="px-6 py-2">
          <Link to="/posts">Posts</Link>
        </li>
        <li className="px-6 py-2">
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
