import React from 'react';
import {render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactForm from './ContactForm';

test("does the test 1", ()=>{
    // throw new Error("This is an error")
    console.log('doing a sanity test 1');
});


it('renders without errors', ()=>{
    render(<ContactForm />);
});

test('renders the contact form header', ()=> {
    render(<ContactForm />);
	const header = screen.queryByText(/contact form/i);
    console.log(header);
	expect(header).toBeInTheDocument();//can use either
    expect(header).toBeVisible();//can use either one
    const h1 = screen.queryByTestId('testh1');
 
    expect(h1).toBeInTheDocument();//can also tag with an id and use any of these 
});

test('renders ONE error message if user enters less then 5 characters into firstname.', async () => {
    // render(<ContactForm />);
    
});

test('renders THREE error messages if user enters no values into any fields.', async () => {
    
});

test('renders ONE error message if user enters a valid first name and last name but no email.', async () => {
    
});

test('renders "email must be a valid email address" if an invalid email is entered', async () => {
    
});

test('renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {
    
});

test('renders all firstName, lastName and email text when submitted. Does NOT render message if message is not submitted.', async () => {
    
});

test('renders all fields text when all fields are submitted.', async () => {
    
});