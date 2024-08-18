import { useDispatch } from "react-redux";
import filter_icon from "../../assets/filter.svg";
import search_icon from "../../assets/search.svg";
import Filters from "./filters";
import { setSearchQuery } from "../../actions/filters";
import { useState } from "react";

export default function SearchBar() {
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [searchInput, setSearchInput] = useState(""); // State to manage the input value
  const dispatch = useDispatch();

  const toggleFilters = (e) => {
    e.preventDefault();
    setFiltersVisible(!filtersVisible);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submit behavior
    dispatch(setSearchQuery(searchInput)); // Dispatch the search query
  };

  return (
    <>
      <div className="flex flex-row justify-around gap-5 mx-10 desktop:w-[40vw]">
        <input
          className="rounded-md border-[1px] border-slate-300 drop-shadow-lg p-2 flex-1"
          type="text"
          placeholder="Search event by name..."
          value={searchInput} // Bind input value to state
          onChange={(e) => setSearchInput(e.target.value)} // Update state on change
        />
        <button className="z-10 hover:bg-white hover:scale-105 ease-in duration-100 rounded-xl p-2" onClick={handleSearchSubmit}> {/* Submit button */}
        <img src={search_icon} className="w-7" alt="Filters" />
        </button>
        <button className="z-10 hover:bg-white rounded-xl p-2 hover:scale-105 ease-in duration-100" onClick={toggleFilters}>
          <img src={filter_icon} className="w-7" alt="Filters" />
        </button>
      </div>
      {filtersVisible && <Filters />}
    </>
  );
}
