import React from 'react';

const SavedItem = ({ id, full_name, html_url, language, removeRepo }) => {
  const handleRemove = () => removeRepo(id);

  return (
    <li key={id} className="list-group-item mb-4">
      <div className="d-flex justify-content-between align-items-center">
        <a href={html_url} className="link-unstyled"><h6>{full_name}</h6></a>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleRemove}
        >Delete</button>
      </div>
      <div>
        <span className="badge badge-warning badge-pill mr-3">{language}</span>
      </div>
    </li>
  );
};

export default SavedItem;