import React from 'react';
import {render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

// test("This is a sanity test", ()=>{
//     // throw new Error("This is an error")
//     console.log('doing a sanity test');
// });

it('1 renders without errors', ()=>{
    render(<ContactForm />);
});

test('2 renders the contact form header', ()=> {
    render(<ContactForm />);
	const header = screen.queryByText(/contact form/i);
    console.log(header);
	expect(header).toBeInTheDocument();//can use either
    expect(header).toBeVisible();//can use any of these
    expect(header).toHaveTextContent(/contact form/i);
    expect(header).toBeTruthy();
    expect(header).not.toBeFalsy();
//another example to just have plenty of options
    const h1 = screen.queryByTestId('testh1');
    expect(h1).toBeInTheDocument();//can also tag with an id and use any of these 
});

// const errorMessage = screen.queryAllByText(/error/i);

test('3 renders ONE error message if user enters less then 5 characters into firstname.', async () => {
    render(<ContactForm />);
    const firstName = "Ric";
    const firstNameInput = screen.getByLabelText(/first name/i);
    userEvent.type(firstNameInput, firstName);
    const errorMessage = screen.queryAllByText(/error/i);
    expect(errorMessage).toHaveLength(1);
    expect(errorMessage).toBeTruthy();//same thing
});


test('4 renders THREE error messages if user enters no values into any fields.', async () => {
    render(<ContactForm />);
    const submitButton = screen.getByRole('button');//arrange 
    userEvent.click(submitButton);
    const errorMessages = screen.queryAllByTestId(/error/i);
    expect(errorMessages).toHaveLength(3);

});

test('5 renders ONE error message if user enters a valid first name and last name but no email.', async () => {
    render(<ContactForm />);
    //enters first name
    const firstName = "Ricster";
    const firstNameInput = screen.getByLabelText(/first name/i);
    userEvent.type(firstNameInput, firstName);
    //enters last name
    const lastName = "Mansfield";
    const lastNameInput = screen.getByLabelText(/Last Name/i);
    userEvent.type(lastNameInput, lastName);
    //uses submit button before entering email
    const button = screen.getByRole('button');
	userEvent.click(button);
    //should see error for email
    const errorMessages = screen.queryAllByText(/error/i);
	expect(errorMessages).toHaveLength(1);
    //alternative check for email error message using preestablished variable from test 4
    const emailErrorMessage = screen.queryAllByTestId(/error/i);
    expect(emailErrorMessage).toHaveLength(1);

});

test('6 renders "email must be a valid email address" if an invalid email is entered', async () => {
    render(<ContactForm />);
    //Arrange = create bad email and retrieve email input field
    const email = 'badEmail';
    const emailInput = screen.getByLabelText(/email/i);
    //Act = input bad email into field just like a user might do & use submitt button
    userEvent.type(emailInput, email);
    const submitButton = screen.getByRole('button');//arrange 
    userEvent.click(submitButton);
    //Assert = expect to get error message for email
    const errorMessage = screen.queryByText(/email must be a valid email address/i);
	expect(errorMessage).toBeVisible();

});

test('7 renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {
    render(<ContactForm />);
    //ARRANGE - The message prints upon using submit without doing anything So We only need to screen for the button 
    const submitButton = screen.getByRole('button');
    //ACT - user then clicks the button
    userEvent.click(submitButton);
    //ASSERT - error message for last name is expected 
    const errorMessage = screen.queryByText(/lastName is a required field/i);
	expect(errorMessage).toBeVisible();
    
});

test('renders all firstName, lastName and email text when submitted. Does NOT render message if message is not submitted.', async () => {
    
});

test('renders all fields text when all fields are submitted.', async () => {
    
});