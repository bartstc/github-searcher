import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import toJson from 'enzyme-to-json';

describe('App', () => {
  const app = shallow(<App />);

  it('renders correctly', () => {
    expect(toJson(app)).toMatchSnapshot();
  });

  it('contains a SearchForm component', () => {
    expect(app.find('SearchForm').exists()).toBe(true);
  });

  it('contains a ReposList component', () => {
    expect(app.find('ReposList').exists()).toBe(true);
  });

  it('contains a SavedRepos component', () => {
    expect(app.find('Connect(SavedRepos)').exists()).toBe(true);
  });
});