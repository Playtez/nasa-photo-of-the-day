import React from "react";
import axios from "axios";

function Card() {
  const [nasaData, setNasaData] = React.useState(undefined);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(res => {
        setNasaData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log("ya done mest up =>", err);
      });
  }, []);

  console.log(loading);

  if (!nasaData) return null;
  return (
    <div>
      <h1>Title:{nasaData.title}</h1>
      <h2>Date: {nasaData.date}</h2>
      <img src={nasaData.url} alt="img"></img>
      <p> {nasaData.explanation}</p>
    </div>
  );
}

export default Card;
