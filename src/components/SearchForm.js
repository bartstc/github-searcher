import React from 'react';

const SearchForm = ({ onChange, fetchRepos }) => (
  <>
    <div className="input-group mb-3">
      <input onChange={onChange} type="text" className="search-input form-control" placeholder="Search for repo ..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
      <div className="input-group-append">
        <button className="search-submit btn btn-outline-secondary" type="button" onClick={fetchRepos}>Search</button>
      </div>
    </div>
  </>
);

export default SearchForm;