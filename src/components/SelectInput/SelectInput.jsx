import React from 'react'
import Gender from "./category/Genres";
import Species from "./category/Species";
import Status from "./category/Status";

const SelectInput = ({
  updateStatus,
  updateGender,
  updateSpecies,
}) => {
  let clear = () => {
    updateStatus("");
    updateGender("");
    updateSpecies("");
    window.location.reload(false);
  };
  return (
    
    <div className="col-lg-12 col-12 mb-5">
    <div className="text-center fw-bold  mb-2">Filters</div>
    <div
      style={{ cursor: "pointer" }}
      onClick={clear}
      className="text-primary text-decoration-none text-center mb-4"
    >
      Clear Filters
    </div>
    <div className="accordion" id="accordionExample">
      <Status
       
        updateStatus={updateStatus}
      />
      <Species
     
        updateSpecies={updateSpecies}
      />
      <Gender
      
        updateGender={updateGender}
      />
    </div>
  </div>
  
  )
}

export default SelectInput
