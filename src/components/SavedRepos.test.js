import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { SavedRepos } from './SavedRepos';

describe('SavedRepos', () => {
  let props = {
    repos: [{
      owner: { login: 'test' },
      html_url: 'test',
      full_name: 'test',
      description: 'test',
      language: 'test'
    }]
  };
  let repos = shallow(<SavedRepos {...props} />);
  const ul = repos.find('.list-group');

  it('renders correctly', () => {
    expect(toJson(repos)).toMatchSnapshot();
  });

  it('renders ul with at least one SavedItem component', () => {
    expect(ul.find('SavedItem').exists()).toBe(true);
  });

  describe('when saved repos array is empty', () => {
    props = { repos: [] };
    repos = shallow(<SavedRepos {...props} />);

    it('return warning with text `No saved repos`', () => {
      expect(repos.find('p').text()).toEqual('No saved repos');
    });
  })
});