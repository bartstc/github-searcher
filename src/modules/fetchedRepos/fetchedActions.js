import { FETCH_REPOS, CLEAR_REPOS } from './types';

export const fetchRepos = (query, limit) => async dispatch => {
  try {
    const res = await fetch(`https://api.github.com/search/repositories?q=${query}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&per_page=${limit}`);

    const { items } = await res.json();
    dispatch({ type: FETCH_REPOS, payload: items });
  } catch (err) {
    console.log(err);
    dispatch({ type: CLEAR_REPOS });
  };
};