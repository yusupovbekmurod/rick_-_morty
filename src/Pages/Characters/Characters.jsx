import { useState , useEffect} from "react";
import "./Characters.scss";
import SelectInput from "../../components/SelectInput/SelectInput";
import CardData from "../../components/CardData/CardData";
import SearchInput from "../../components/SearchInput/SearchInput";
import  Pagination  from "../../components/Pagination/Pagination";


const Characters = () => {

  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");
  let [fetchData, updateFetchData] = useState([]);
  let [search, setSearch] = useState("");
  let { info, results } = fetchData;

  let url = `https://rickandmortyapi.com/api/character/?name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(url).then((res) =>  res.json());
      updateFetchData(data);
      
    })();
  }, [url]);


  return (
    <div className="characters">
      <h1>Characters</h1>
 
      <SearchInput setSearch={setSearch} /> 

      <main className="characters__main">
        <div className="characters__main__select__input">
          <SelectInput 
            status={status}
            updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
           />
        </div>
        <div className="characters__main__wrapper">
          <CardData page='/' results={results}/>
        </div>
      </main>

      <Pagination
        info={info}
       
      />
    </div>
  );
};

export default Characters;
