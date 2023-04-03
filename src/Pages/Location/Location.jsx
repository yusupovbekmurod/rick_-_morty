import  { useEffect, useState } from 'react'
import "./Location.scss";
import CardData from '../../components/CardData/CardData';
import InputGroup from "../../components/SelectInput/category/InputGroup"

const Location = () => {
  let [results, setResults] = useState([]);
  let [info, setInfo] = useState([]);
  let { dimension, type, name } = info;
  let [number, setNumber] = useState(1);

  let url = `https://rickandmortyapi.com/api/location/${number}`;
 
  useEffect(() => {
    (async function () {
      const data = await fetch(url).then((res) => res.json());
      setInfo(data);

      const a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [url]);


  return (
    <div className="lacation">
       <h1>
       Location: <span style={{color: 'blue'}}> {" "}{name === "" ? "Unknown" : name}</span>
      </h1>
      <h5 className="text-center">
      Dimension: {dimension === "" ? "Unknown" : dimension}
      </h5>
      <h6 className="text-center">Type: {type === "" ? "Unknown" : type}</h6>
      <main className="characters__main">
        <div className="characters__main__select__input">
          <h4>Pick Location</h4>
          <InputGroup name="Location" changeID={setNumber} total={126} />
        </div>
        <div className="characters__main__wrapper">
          <CardData page="/location/" results={results} />
        </div>
      </main> 
    </div>
  )
}

export default Location
