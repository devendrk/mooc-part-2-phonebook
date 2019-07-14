import React from 'react';

const Search = ({ handleSearch }) => {
  return (
    <div className=" container-fluid font-weight-bolder h3 text-center bg-dark text-white py-3">
      <div className="row">
        <div className="col-7"></div>
        <div className=" col-4 md-form active-purple  active-purple-2 mb-3 ">
          <input onChange={handleSearch} className="form-control text-center" type="text" placeholder="Search contact" aria-label="Search" />
        </div>
      </div>
    </div>
  );
}
export default Search;
