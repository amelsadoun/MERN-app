// Filters.js
import { useDispatch } from "react-redux";
import ToggleButtonGroup from "@mui/joy/ToggleButtonGroup";
import Button from "@mui/joy/Button";
import { useState, useEffect } from "react";
import { eventTags } from "../utils/eventTags";
import { setFilters } from "../../actions/filters";

export default function Filters() {
  const [selectedFields, setSelectedFields] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const dispatch = useDispatch();

  const fields = ["Hackathon", "Datathon", "Workshop", "Seminar", "Conference"];
  const types = ["Online", "Offline", "Hybrid"];
  const tags = eventTags;

  // console.log(selectedFields)

  useEffect(() => {
    dispatch(
      setFilters({
        field: selectedFields,
        type: selectedTypes,
        tags: selectedTags,
        dateFrom,
        dateTo,
      })
    );
  }, [selectedFields, selectedTypes, selectedTags, dateFrom, dateTo, dispatch]);

  return (
    <div className="flex flex-wrap align-top justify-around bg-gradient-to-bl from-green-100 to-white py-6 border-[1px] border-slate-200 rounded-3xl shadow-lg">
      <ToggleGroup
        title="Field"
        options={fields}
        value={selectedFields}
        setValue={setSelectedFields}
      />
      <ToggleGroup
        title="Type"
        options={types}
        value={selectedTypes}
        setValue={setSelectedTypes}
      />
      <ToggleGroup
        title="Tags"
        options={tags}
        value={selectedTags}
        setValue={setSelectedTags}
      />
      <div className="flex flex-col gap-5">
        <h1 className="text-green-800">Date</h1>
        <input
          type="date"
          className="self-start"
          onChange={(e) => setDateFrom(e.target.value)}
        />
        <h1 className="text-black">To</h1>
        <input
          type="date"
          className="self-start"
          onChange={(e) => setDateTo(e.target.value)}
        />
      </div>
    </div>
  );
}

const ToggleGroup = ({ title, options, value, setValue }) => {
  const handleToggle = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-green-800">{title}</h1>
      <ToggleButtonGroup
        orientation="vertical"
        size="md"
        value={value}
        onChange={handleToggle}
        sx={{
          display: title === "Tags" ? "flex" : "",
          flexDirection: title === "Tags" ? "column" : "",
          flexWrap: title === "Tags" ? "wrap" : "nowrap",
          height: title === "Tags" ? 200 : "",
          width: title === "Tags" ? "fit-content" : "auto",
        }}
      >
        {options.map((option) => (
          <Button
            key={option.value || option}
            value={option.value || option}
          >
            {option.label || option}
          </Button>
        ))}
      </ToggleButtonGroup>
    </div>
  );
};

