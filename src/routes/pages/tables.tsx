import "../../assets/styles/style.scss";
import "../../App.scss";

import DemoPage from "@/components/data/page";
import { useState } from "react";

function FormTable() {
  const [isHidden, setIsHidden] = useState(true); // Initialize the state as hidden

  const toggleVisibility = () => {
    console.log("Toggle visibility");

    setIsHidden((prevIsHidden: any) => !prevIsHidden);
  };
  return (
    <div className="section">
      <div className="_divLg ">
        <DemoPage />
      </div>
    </div>
  );
}

export default FormTable;
