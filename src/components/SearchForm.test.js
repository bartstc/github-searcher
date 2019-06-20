import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  let form = shallow(<SearchForm />);

  it('renders properly', () => {
    expect(toJson(form)).toMatchSnapshot();
  });

  describe('when submit', () => {
    const mockFetchRepos = jest.fn();

    beforeEach(() => {
      const props = { fetchRepos: mockFetchRepos };
      form = mount(<SearchForm {...props} />);

      form.find('.search-submit').simulate('click');
    });

    it('dispatches the `fetchRepos()` method it receives from props', () => {
      expect(mockFetchRepos).toHaveBeenCalled();
    });
  });
});