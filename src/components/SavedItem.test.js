import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SavedItem from './SavedItem';

describe('SavedItem', () => {
  const mockRemove = jest.fn();
  const id = 1;
  const props = {
    id: 1,
    full_name: 'name',
    html_url: 'url',
    language: 'language',
    removeRepo: mockRemove
  };
  const item = shallow(<SavedItem {...props} />);

  it('renders correctly', () => {
    expect(toJson(item)).toMatchSnapshot();
  });

  describe('when clicking the `Remove` button', () => {
    beforeEach(() => item.find('.btn').simulate('click'));

    it('calls the removeRepo func', () => {
      expect(mockRemove).toHaveBeenCalledWith(id);
    });
  });
});