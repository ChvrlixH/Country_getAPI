import React, { useEffect, useState } from "react";
import axios from "axios";
const Country = () => {
  const [data, setFlag] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setFlag(response.data);
    });
  }, []);
  return (
    <div
      className="container"
      style={{ backgroundColor: "#123453", padding: "30px" }}
    >
      <div
        className="main"
        style={{ display: "flex", flexWrap: "wrap", gap: "25px" }}
      >
        {data.map((country, index) => {
          return (
            <div
              className="card"
              style={{ width: "18rem", border: "none" }}
              key={index}
            >
              <img
                className="card-img-top"
                src={country.flags.png}
                alt="Card image cap"
              />
              <div className="card-body" style={{ backgroundColor: "#A5D6A7" }}>
                <h4
                  className="card-title"
                  style={{ color: "red", letterSpacing: "2px" }}
                >
                  {country.name.common}
                </h4>
                <h6>Population :</h6> <p>{country.population}</p>
                <h6>Region : </h6> <p>{country.region}</p>
                <h6>Capital :</h6> <p>{country.capital}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Country;
