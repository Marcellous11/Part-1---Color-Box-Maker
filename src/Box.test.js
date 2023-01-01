import React from 'react';
import { render } from '@testing-library/react';
import Box from './Box';

test('Render App', () => {
	render(<Box />);
});

it('Sould match previous screenshot', () => {
	const { asFragment } = render(<Box />);
	expect(asFragment).toMatchSnapshot();
});
