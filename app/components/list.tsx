import { FunctionComponent, useContext } from "react";
import { Item } from "./item";
import { MyContext } from "../contexts/stateContext";

interface ListProps {
  filter: string;
}

export const List: FunctionComponent<ListProps> = ({ filter }) => {
  const { state } = useContext(MyContext);

  return (
    <div className="container mx-auto">
      <ul className="grid grid-cols-1 gap-4 place-items-stretch h-56">
        {state.phantoms.map((child, index) => {
          if (filter === "" || child.manifest.tags.categories.includes(filter.toLowerCase()))
            return <Item key={index} index={index} child={child} />;
        })}
      </ul>
    </div>
  );
};
