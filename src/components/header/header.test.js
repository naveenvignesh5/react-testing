import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

import { findByTestAttr } from '../../../Utils';

const setUp = (props = {}) => {
  return shallow(<Header {...props} />);
};

describe('Header Component', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it('Should render without errors', () => {
    const wrapper = findByTestAttr(component, 'headerComponent');
    expect(wrapper.length).toEqual(1);
  });

  it('Should render a logo', () => {
    const logo = findByTestAttr(component, 'logoImg');
    expect(logo.length).toEqual(1);
  });
});
