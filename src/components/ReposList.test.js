import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ReposList from './ReposList';

describe('ReposList', () => {
  let props = { repos: {} };
  let list = mount(<ReposList {...props} />);

  it('renders properly', () => {
    expect(toJson(list)).toMatchSnapshot();
  });

  describe('list content after receive repos prop', () => {
    it('initializes the empty list of items without `No results` warning', () => {
      expect(list.props().repos).toEqual({});
    });

    it('renders `RepoItem` component when repos is not empty array', () => {
      props = {
        repos: [{
          owner: { login: 'test' },
          html_url: 'test',
          full_name: 'test',
          description: 'test',
          language: 'test'
        }]
      };
      list = shallow(<ReposList {...props} />);
      const ul = list.find('.list-group');

      expect(ul.find('Connect(RepoItem)').exists()).toBe(true);
    });

    it('renders warning when no repos found', () => {
      props = { repos: [] };
      list = shallow(<ReposList {...props} />);

      expect(list.find('.text-warning').text()).toEqual('No results');
    });
  })
});