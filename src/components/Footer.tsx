import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="w-screen border-t mt-auto p-4 bg-muted flex flex-col justify-between md:flex-row">
    <Link to="/" className="font-bold">conduit</Link>
    <span>
      An interactive learning project from <Link to="https://thinkster.io" className="underline hover:text-primary duration-200">Thinkster</Link>. Code &amp; design licensed
      under MIT.
    </span>
  </footer>
);

export default Footer;