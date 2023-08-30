import Example from "@/components/graphs/any";
import PieChartExample from "@/components/graphs/pie";
import { useState } from "react";
import "../../assets/styles/style.scss";

export default function Dashboard({}) {
    const [isHidden, setIsHidden] = useState(true); // Initialize the state as hidden
    const [isHiddenPie, setIsHiddenPie] = useState(true); // Initialize the state as hidden

    const toggleVisibility = () => {
      console.log('Toggle visibility');
  
      // setIsHidden((prevIsHidden: any) => !prevIsHidden);
      setIsHiddenPie((prevIsHidden: any) => !prevIsHidden);
    };
    const toggleVisibilityPic = () => {
      console.log('Toggle visibility');
  
      setIsHidden((prevIsHidden: any) => !prevIsHidden);
      // setIsHiddenPie((prevIsHidden: any) => !prevIsHidden);
    };
    return(
      <div className="section grid grid-cols-2">
      {isHidden && (
          <div className={`_divSm  ${!isHiddenPie ? "w-10/12" : 'w-5/12'}`}>
              <PieChartExample
              outerRadius={!isHiddenPie ? 200 : 170}
        cx={!isHiddenPie ? "30%" : "50%"}

        outerRadius1={!isHidden ? 150 : 155}
        cx1={!isHidden ? "55%" : "65%"}
               toggleVisibility={toggleVisibility} isHidden={!isHiddenPie} />
          </div>
      )}
      {isHiddenPie && (
          <div className={`_divLg ${!isHidden ? "w-10/12" : 'w-8/12'}`}>
              <Example toggleVisibility={toggleVisibilityPic} isHidden={!isHidden} />
          </div>
      )}
  </div>
    )
 }