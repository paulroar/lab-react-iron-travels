import React from "react";
import logo from "./assets/logo.png";
import travelPlansData from "./assets/travel-plans.json";
import TravelList from "./components/TravelList";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      <TravelList plans={travelPlansData} />

            
    </>
  );
}

export default App;
