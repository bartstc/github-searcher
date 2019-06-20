import { SAVE_REPO, REMOVE_REPO } from './types';

export const saveRepo = repo => ({
  type: SAVE_REPO,
  payload: repo
});

export const removeRepo = id => ({
  type: REMOVE_REPO,
  payload: id
});