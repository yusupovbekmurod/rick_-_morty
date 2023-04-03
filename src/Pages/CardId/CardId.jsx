import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CardId.scss";
const CardId = () => {
  const { id } = useParams();

  const [fetchData, updateFetchData] = useState([]);
  const { names, location, origin, gender, image, status, species } = fetchData;
  const url = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      const datas = await fetch(url).then((res) => res.json());
      updateFetchData(datas);
    })();
  }, [url]);
  return (
    <div className="card">
      <div className=" cardTitle">
        <b>{names}</b>
      </div>
      <img src={image} alt={names} />
      <div className="cardBody">
        <p>{origin}</p>
        <p>{gender}</p>
        <p>{species}</p>
        <p className="cardLocation">Last location</p>
        <h4>{location.name}</h4>
        <span className={""}>{status}</span>
      </div>
    </div>
  );
};

export default CardId;
