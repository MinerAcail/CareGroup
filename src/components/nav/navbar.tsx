// import { Button } from "../ui/button";
import Logo from "./logo/logo";
import "./style.scss";
import  { useState, useEffect } from 'react';
import { NavigationMenuDemo } from "./MenuDemo";


const Navbar = () => {
  const [refreshTime, setRefreshTime] = useState(new Date());

  useEffect(() => {
    const handleRefresh = () => {
      setRefreshTime(new Date());
    };

    window.addEventListener('beforeunload', handleRefresh);

    return () => {
      window.removeEventListener('beforeunload', handleRefresh);
    };
  }, []);

  return (
    <div className="navbar relative">
      <Logo />
      <NavigationMenuDemo />
      <div className="links time">
        Last Refresh Time: {refreshTime.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default Navbar;


