import { NavLink } from "react-router-dom";
import "./logo.scss";

const Logo = () => {
  // const navigation = useNavigate();

  return (
    <NavLink
      onClick={() => {
        { }
      } }
      className="logo" 
      to={"/"}    >
      Dashboard  </NavLink>
  );
};

export default Logo;
