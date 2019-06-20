import savedReducer from './savedReducer';
import { SAVE_REPO, REMOVE_REPO } from './types';

describe('fetchedReducer', () => {
  const repo = {
    id: 1,
    owner: { login: 'test' },
    html_url: 'test',
    full_name: 'test',
    description: 'test',
    language: 'test'
  };
  const id = 1;

  it('returns empty array by default', () => {
    expect(savedReducer([], {})).toEqual([]);
  });

  it('save a new repo', () => {
    expect(savedReducer([], { type: SAVE_REPO, payload: repo })).toEqual([repo]);
  });

  it('remove repo by id', () => {
    expect(savedReducer([repo], { type: REMOVE_REPO, payload: id })).toEqual([]);
  });
});