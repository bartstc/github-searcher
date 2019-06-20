import fetchedReducer from './fetchedReducer';
import { FETCH_REPOS, CLEAR_REPOS } from './types';

describe('fetchedReducer', () => {
  const payload = [{
    id: 1,
    owner: { login: 'test' },
    html_url: 'test',
    full_name: 'test',
    description: 'test',
    language: 'test'
  }];

  it('returns empty object by default', () => {
    expect(fetchedReducer({}, {})).toEqual({});
  });

  it('fetches and sets repos list', () => {
    expect(fetchedReducer({}, { type: FETCH_REPOS, payload })).toEqual(payload);
  });

  it('clear repos list', () => {
    expect(fetchedReducer(payload, { type: CLEAR_REPOS })).toEqual([]);
  });
});