import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import TestUtils, { Simulate } from 'react-addons-test-utils';
import Select2 from '../src';

describe('Select2', () => {
  it('allows us to set props', () => {
    const wrapper = mount(<Select2 prefixCls="kuma-select2" optionLabelProp="children" transitionName="slideUp" ></Select2>);
    expect(wrapper.props().prefixCls).to.equal('kuma-select2');
    wrapper.setProps({ prefixCls: 'kuma-select2-test' });
    expect(wrapper.props().prefixCls).to.equal('kuma-select2-test');

    expect(wrapper.props().optionLabelProp).to.equal('children');
    wrapper.setProps({ optionLabelProp: 'children-test' });
    expect(wrapper.props().optionLabelProp).to.equal('children-test');

    expect(wrapper.props().transitionName).to.equal('slideUp');
    wrapper.setProps({ transitionName: 'slideUp-test' });
    expect(wrapper.props().transitionName).to.equal('slideUp-test');
  });
});