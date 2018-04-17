import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

test('should render Header correctly', () => {
    const renderer = ReactShallowRenderer.createRenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});