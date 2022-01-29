import { FunctionComponent } from "react";

interface ElementTypeProps {
   element: { slot: number; type: CommonData };
}

const ElementType: FunctionComponent<ElementTypeProps> = ({ element }) => {
   return (
      <div className={`type ${element.type.name}`}>
         {element.type.name}
      </div>
   );
}

export default ElementType;