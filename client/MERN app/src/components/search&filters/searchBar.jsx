// SearchBar.js
import { useDispatch } from "react-redux";
import filter_icon from "../../assets/filter.svg";
import Filters from "./filters";
import { setSearchQuery } from "../../actions/filters";
import { useState } from "react";

export default function SearchBar() {
  const [filtersVisible, setFiltersVisible] = useState(false);
  const dispatch = useDispatch();

  const toggleFilters = () => {
    setFiltersVisible(!filtersVisible);
  };

  return (
    <>
      <div className="flex flex-row justify-around gap-5 mx-10 desktop:w-[40vw]">
        <input
          className="rounded-md border-[1px] border-slate-300 drop-shadow-lg p-2 flex-1"
          type="text"
          placeholder="Search event by name..."
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
        <button className="z-10" onClick={toggleFilters}>
          <img src={filter_icon} className="w-7" alt="Filters" />
        </button>
      </div>
      {filtersVisible && <Filters />}
    </>
  );
}


