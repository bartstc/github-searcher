import { SAVE_REPO, REMOVE_REPO } from './types';

export default (state = [], { type, payload }) => {
  switch (type) {
    case SAVE_REPO:
      return [...state, payload];

    case REMOVE_REPO:
      return state.filter(repo => repo.id !== payload);

    default: return state;
  };
};