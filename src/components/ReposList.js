import React from 'react';
import RepoItem from './RepoItem';

const ReposList = ({ repos }) => (
  <ul className="list-group mt-2">
    {Array.isArray(repos) && repos.length === 0 && <h4 className="text-warning">No results</h4>}
    {Array.isArray(repos) && repos.map(repo => (
      <RepoItem key={repo.id} repo={repo} />
    ))}
  </ul>
);

export default ReposList;