import { Link } from "react-router-dom";
import "./CardData.scss";


const CardData = ({results}) => {
  
  return (
    <div className="wrap">
   {results.map((item) => {
        const { id, image, name, status, location } = item;

        const isActive = () => {
          if (status === "Alive") {
            return "static";
          } else if (status === "Dead") {
            return "static__dead";
          } else if (status === "unknown") {
            return "static__unknown";
          }
        };

        return (
          <card key={id} className="card">
            <img src={image} alt={name} />
            <div className="cardBody">
              <div className=" cardTitle">
                <b>{name}</b>
              </div>
              <p className="cardLocation">Last location</p>
              <h4>{location.name}</h4>
              <span className={isActive()}>{status}</span>
            </div>
           {<Link to={`${id}`} style={{color:'#fff', textDecoration:'none'}}> <button className="btnMore">more</button></Link>}
          </card>
        );
      })}
    </div>
  );
};

export default CardData;
