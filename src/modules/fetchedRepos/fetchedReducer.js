import { FETCH_REPOS, CLEAR_REPOS } from './types';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_REPOS:
      return payload;

    case CLEAR_REPOS:
      return [];

    default: return state;
  };
};