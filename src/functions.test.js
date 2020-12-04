
import {fireEvent, getByText, render} from "@testing-library/react";
import * as react from "react";
import ChatWindow from "./components/ChatWindow";
import Chat from "./components/Chat";
import {Login} from "./components/Login";
import { CourseDetails } from "./components/CourseDetails";
import {Home} from "./components/Home";
import {http} from "./components/APIRequests/http"

jest.mock(http);

const functions = require('./functions');

test('add', () => {
    expect(functions.add(2, 2)).toBe(4)
});

test('renders correct content', () => {
    const {getByText} = render(<Home/>);

    getByText("Welcome back !")
})

test('sending message', () => {
    const {getByTestId, getByText} = render(<Chat/>)
    
    const btn = getByTestId("button1")
    const inpUser = getByTestId("user")
    const inpMessage = getByTestId("message")

    fireEvent.change(inpUser, {target: {value: "user"}})
    fireEvent.change(inpMessage, {target: {value: "message"}})

    fireEvent.click(btn)


})

test('Login', () => {
    const {getByTestId, getByText} = render(<Login/>)
    
    const btn = getByTestId("loginButton")
    const inpEmail = getByTestId("email")
    const inpPassword = getByTestId("password")

    fireEvent.change(inpEmail, {target: {value: "user"}})
    fireEvent.change(inpPassword, {target: {value: "password"}})

    fireEvent.click(btn)

    
})

// test('register', () => {
//     const {getByTestId, getByText} = render(<Login/>)
    
//     const btn = getByTestId("loginButton")
//     const inpEmail = getByTestId("email")
//     const inpPassword = getByTestId("password")
//     const inpEmail = getByTestId("username")
//     const inpPassword = getByTestId("address")
//     const inpEmail = getByTestId("firstName")
//     const inpPassword = getByTestId("lastname")

//     fireEvent.change(inpEmail, {target: {value: "user"}})
//     fireEvent.change(inpPassword, {target: {value: "password"}})
//     fireEvent.change(inpEmail, {target: {value: "user"}})
//     fireEvent.change(inpPassword, {target: {value: "password"}})
//     fireEvent.change(inpEmail, {target: {value: "user"}})
//     fireEvent.change(inpPassword, {target: {value: "password"}})
//     fireEvent.change(inpEmail, {target: {value: "user"}})
//     fireEvent.change(inpPassword, {target: {value: "password"}})
//     fireEvent.change(inpEmail, {target: {value: "user"}})
//     fireEvent.change(inpPassword, {target: {value: "password"}})

//     fireEvent.click(btn)

    
// })