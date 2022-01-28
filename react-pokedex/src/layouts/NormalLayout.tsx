import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

interface NormalLayoutProps {

}

const NormalLayout: FunctionComponent<NormalLayoutProps> = () => {
   return (
      <div className="app-layout">
         <NavBar />
         <div className="content">
            <Outlet />
         </div>
      </div>
   );
}

export default NormalLayout;