import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { RepoItem } from './RepoItem';

describe('RepoItem', () => {
  const props = {
    repo: {
      owner: { login: 'test' },
      html_url: 'test',
      full_name: 'test',
      description: 'test',
      language: 'test'
    }
  };
  const item = shallow(<RepoItem {...props} />);

  it('renders correctly', () => {
    expect(toJson(item)).toMatchSnapshot();
  });
});