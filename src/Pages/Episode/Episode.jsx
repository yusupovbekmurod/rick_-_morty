import React, { useEffect, useState } from "react";
import "./Episode.scss";
import CardData from "../../components/CardData/CardData";
import InputGroup from "../../components/SelectInput/category/InputGroup";

const Episode = () => {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { air_date, name } = info;
  let [id, setID] = useState(1);

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      setInfo(data);

      const a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="episode">
      <h1>
        Episode name: <span style={{color: 'blue'}}>{name === "" ? "Unknown" : name}</span>{" "}
      </h1>
      <h5 className="text-center">
        Air Date: {air_date === "" ? "Unknown" : air_date}
      </h5>
      <main className="characters__main">
        <div className="characters__main__select__input">
          <h4>Pick Episode</h4>
          <InputGroup name="Episode" changeID={setID} total={51} />
        </div>
        <div className="characters__main__wrapper">
          <CardData page="/episode/" results={results} />
        </div>
      </main>
    </div>
  );
};

export default Episode;
