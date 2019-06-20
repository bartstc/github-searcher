import React from 'react';
import { connect } from 'react-redux';
import { removeRepo } from '../modules/savedRepos/savedActions';
import SavedItem from './SavedItem';

export const SavedRepos = ({ repos, removeRepo }) => (
  <>
    {repos.length === 0
      ? <p>No saved repos</p>
      : (
        <>
          <h4 className="text-warning mt-5">Saved repos</h4>
          <ul className="list-group">
            {repos.map(repo => (
              <SavedItem {...repo} removeRepo={removeRepo} />
            ))}
          </ul>
        </>
      )
    }
  </>
);

export default connect(({ savedRepos }) => ({ repos: savedRepos }), { removeRepo })(SavedRepos);