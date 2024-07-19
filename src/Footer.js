import { Link } from "react-router-dom";

const Footer = () => (
  <div className="flex flex-row-reverse fixed inset-x-0 bottom-0">
    <div className="mx-2">copyright</div>
    <div className="mx-2">links</div>
    <Link className="mx-2" to="/location">
      Location
    </Link>
  </div>
);
export default Footer;
