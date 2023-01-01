import React from 'react';
import { render } from '@testing-library/react';
import BoxList from './BoxList';
import Box from './Box';

test('Render App', () => {
	render(<BoxList />);
});

it('Sould match previous screenshot', () => {
	const { asFragment } = render(<BoxList />);
	expect(asFragment).toMatchSnapshot();
});

it('Should add a new box', () => {
	const { get } = render(<BoxList />);
});
