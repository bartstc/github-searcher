import React from 'react';
import { connect } from 'react-redux';
import { saveRepo } from '../modules/savedRepos/savedActions';

export const RepoItem = ({ repo, saveRepo }) => {
  const handleSave = () => saveRepo(repo);

  const { owner: { login }, html_url, full_name, description, language } = repo;

  return (
    <div className="card mt-4">
      <div className="card-header d-flex justify-content-between align-items-center">
        <div className="font-weight-bold">User: {login}</div>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleSave}
        >Save</button>
      </div>
      <div className="card-body">
        <a className="link-unstyled" href={html_url} target="_blank" rel="noopener noreferrer"><h5 className="card-title">{full_name}</h5></a>
        <p className="card-text">{description}</p>
        <span className="badge badge-warning badge-pill mr-3">{language}</span>
      </div>
    </div>
  );
};

export default connect(null, { saveRepo })(RepoItem);