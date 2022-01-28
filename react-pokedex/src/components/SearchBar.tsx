import { Dispatch, FC, SetStateAction } from "react";

interface Props {
   searchQuery: string;
   setSearchQuery: Dispatch<SetStateAction<string>>;
}

const SearchBar: FC<Props> = ({ searchQuery, setSearchQuery }) => {
   return (
      <div className="search-bar">
         <input
            className="search-field"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Pokemon..."
         />
         <button className="search-clear" onClick={() => setSearchQuery("")}>
            Clear
         </button>
      </div>
   );
}

export default SearchBar;