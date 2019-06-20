import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { FETCH_REPOS, CLEAR_REPOS } from './types';
import { fetchRepos } from './fetchedActions';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({});
const mockResponse = [{
  owner: { login: 'test' },
  html_url: 'test',
  full_name: 'test',
  description: 'test',
  language: 'test'
}];
const query = 'JavScript';
const limit = 10;

fetchMock.get(`https://api.github.com/search/repositories?q=${query}&client_id=test&client_secret=test&per_page=${limit}`, mockResponse);

it('creates an async action to fetch repos array', () => {
  const expectedActions = [{ type: FETCH_REPOS, payload: mockResponse }];
  const errorActions = [{ type: CLEAR_REPOS }];

  return store.dispatch(fetchRepos(query, limit))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    })
    .catch(err => {
      expect(store.getActions()).toEqual(errorActions);
    });
});