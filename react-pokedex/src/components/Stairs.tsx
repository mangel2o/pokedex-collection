import { FunctionComponent } from "react";

interface StairsProps {

}

const Stairs: FunctionComponent<StairsProps> = () => {
   return (
      <div className="spinner">
         <div className="loader">
            <div className="loader__bar" />
            <div className="loader__bar" />
            <div className="loader__bar" />
            <div className="loader__bar" />
            <div className="loader__bar" />
            <div className="loader__ball" />
         </div>
         <span className="spinner-text">Cargando...</span>
      </div>
   );
}

export default Stairs;