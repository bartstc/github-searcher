import { combineReducers } from 'redux';
import fetchedRepos from './fetchedRepos/fetchedReducer';
import savedRepos from './savedRepos/savedReducer';

export default combineReducers({ fetchedRepos, savedRepos });