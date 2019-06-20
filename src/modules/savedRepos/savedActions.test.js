import { SAVE_REPO, REMOVE_REPO } from './types';
import { removeRepo, saveRepo } from './savedActions';

describe('savedActions', () => {
  let expectedAction;

  it('creates an action to add new repo to repos', () => {
    const newRepo = {
      id: 1,
      owner: { login: 'test' },
      html_url: 'test',
      full_name: 'test',
      description: 'test',
      language: 'test'
    };
    expectedAction = { type: SAVE_REPO, payload: newRepo };

    expect(saveRepo(newRepo)).toEqual(expectedAction);
  });

  it('creates an action to remove repo by id', () => {
    const id = 1;
    expectedAction = { type: REMOVE_REPO, payload: id };

    expect(removeRepo(id)).toEqual(expectedAction);
  });
});