// import {ChangeEvent, useEffect, useState} from "react";
// import {optionType} from "./types";
// import debounce from "./utils/debounce.ts";
import Search from "./components/Search.tsx";
import useForecast from "./hooks/useForecast.ts";
import Forecast from "./components/Forecast.tsx";

const App = () => {
  const { term, options, forecast, onInputChange, onOptionSelect, onSubmit } =
    useForecast();
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      {forecast ? (
        <Forecast data={forecast} />
      ) : (
        <Search
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
        />
      )}
    </main>
  );
};

export default App;
