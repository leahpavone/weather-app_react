import { useRef } from "react";
import searchIcon from "../../src/assets/search30.png";

function SearchInput({ weatherData, fetchWeatherData }) {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-background">
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter City"
            className="location-input"
          />
          <button type="submit" className="find-location-button">
            <img src={searchIcon} alt="search icon" className="search-icon" />
          </button>
        </div>
      </form>
    </>
  );
}

export default SearchInput;
