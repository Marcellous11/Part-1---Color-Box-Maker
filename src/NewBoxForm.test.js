import React from 'react';
import { render } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

test('Render App', () => {
	render(<NewBoxForm />);
});

it('Sould match previous screenshot', () => {
	const { asFragment } = render(<NewBoxForm />);
	expect(asFragment).toMatchSnapshot();
});
