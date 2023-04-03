import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Route, Routes, Link } from "react-router-dom";
import "./App.scss";
import Characters from "./Pages/Characters/Characters.jsx";
import Episode from "./Pages/Episode/Episode.jsx";
import Location from "./Pages/Location/Location.jsx";
import Error from "./Pages/Error/Error.jsx";
import CardId from "./Pages/CardId/CardId";

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <h1 className="App__header__title">Rick & Morty</h1>
        <div className="App__header__link" >
         <p> <Link to="characters" style={{textDecoration:'none', color:'grey' }}><span>Characters</span></Link></p>
         <p> <Link to="episode" style={{textDecoration:'none', color:'grey'}}>Episode</Link></p>
         <p> <Link to="location"  style={{textDecoration:'none', color:'grey'}}>Location</Link></p>
        </div>
      </header>

      <main className="App__main">
        <Routes>
          <Route path="/" element={<Episode />} />
          <Route path="/:id" element={<CardId />} />

          <Route path="characters" element={<Characters />} />
          <Route path="characters/:id" element={<CardId />} />

          <Route path="episode" element={<Episode />} />
          <Route path="episode/:id" element={<CardId />} />

          <Route path="location" element={<Location />} />
          <Route path="location/:id" element={<CardId />} />
          
          <Route path="*" element={<Error />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
