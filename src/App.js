function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="country-gr">
          <h3 className="country-title">Where in the world?</h3>
          <p className="country-text">Dark Mode</p>
          </div>
        </div>
      </header>
      <div className="container">
      <div className="country-region">
      <input className="inp" type="search" placeholder="Search for a country…"></input>
      <select className="select">
        <option>Africa</option>
        <option>Africa</option>
        <option>Africa</option>
        <option>Africa</option>
      </select>
      </div>
      <div className="cards">
        {
           obj.map((items) => (
              <div className="cardss">
                <img className="card-img"  src={items.img} alt="img"/>
                <h4 className="card-title">{items.title}</h4>
               <p className="card-popul">Population: {items.population}</p>
               <p className="card-popul">Region: {items.region}</p>
               <p className="card-popul">Capital: {items.capital}</p>
              </div>
            ))
        }
      </div>
      </div>
    </div>
  );
}
const obj = [
  {
    id:1,
    img:"https://github.com/Umiddev1/country-flag/blob/main/img/germany.png?raw=true",
    title:"Germany",
    population:"81,770,900",
    region:"Europe",
    capital:"Berlin"
  },
  {
    id:2,
    img:"https://github.com/Umiddev1/country-flag/blob/main/img/america.png?raw=true",
    title:"United States of America",
    population:"323,947,000",
    region:"Americas",
    capital:"Washington, D.C."
  },
  {
    id:3,
    img:"https://github.com/Umiddev1/country-flag/blob/main/img/brasil.png?raw=true",
    title:"Brazil",
    population:"206,135,893",
    region:"Americas",
    capital:"Brasília"
  },
  {
    id:4,
    img:"https://github.com/Umiddev1/country-flag/blob/main/img/ice.png?raw=true",
    title:"Iceland",
    population:"334,300",
    region:"Europe",
    capital:"Reykjavík"
  },
  {
    id:5,
    img:"https://github.com/Umiddev1/country-flag/blob/main/img/afganistan.png?raw=true",
    title:"Afghanistan",
    population:"27,657,145",
    region:"Asia",
    capital:"Kabul"
  },
  {
    id:6,
    img:"https://github.com/Umiddev1/country-flag/blob/main/img/atlan-island.png?raw=true",
    title:"Åland Islands",
    population:"28,875",
    region:"Europe",
    capital:"Mariehamn"
  },
  {
    id:7,
    img:"https://github.com/Umiddev1/country-flag/blob/main/img/albaniya.png?raw=true",
    title:"Albania",
    population:"2,886,026",
    region:"Europe",
    capital:"Tirana"
  },
  {
    id:8,
    img:"https://github.com/Umiddev1/country-flag/blob/main/img/algeria.png?raw=true",
    title:"Algeria",
    population:"40,400,000",
    region:"Africa",
    capital:"Africa"
  },
] 
App();


export default App;
