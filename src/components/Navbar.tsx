import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => (
  <nav className="sticky top-0 flex items-center justify-between p-4 z-100 bg-white/75 backdrop-blur-xl">
    <Link to="/" className="font-bold">
      conduit
    </Link>
    <ul className="hidden md:flex items-center gap-4">
      <li>
        <Link to="/">
          <Button variant="link">Home</Button>
        </Link>
      </li>
      <li>
        <Link to="/editor">
          <Button variant="link">New Article</Button>
        </Link>
      </li>
      <li>
        <Link to="/settings">
          <Button variant="link">Settings</Button>
        </Link>
      </li>
      <li>
        <Link to="/login">
          <Button variant="link">Sign in</Button>
        </Link>
      </li>
      <li>
        <Link to="/register">
          <Button variant="link">Sign up</Button>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
