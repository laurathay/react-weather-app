import React from 'react'

// const api = {
//   key: "aff798c8891f14eaae40e9c34d95c709",
//   base: "https://api/openweathermap.org/data/2.5/"
// }

function App() {

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "Aprile", "May", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre" ];
    let days = ["Sunday", "Monday", "Tuesay", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = dates[d.getDate()];
  }

  return (
    <div className="app">
    <main>
      <div className="search-box">
        <input 
          type="text"
          className="search-bar"
          placeholder="Search..." 
          />
      </div>
      <div className="location-box">
        <div className="location">New York City, US</div>
        <div className="date">{dateBuilder(new Date())}</div>
      </div>
    </main>
 
    </div>
  );
}

export default App;
