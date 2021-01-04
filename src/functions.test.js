
import {fireEvent, getByTestId, getByText, render} from "@testing-library/react";
import * as react from "react";
import ChatWindow from "./components/ChatWindow";
import Chat from "./components/Chat";
import {Register} from "./components/Register";
import {Login} from "./components/Login";
import { CourseDetails } from "./components/CourseDetails";
import {Home} from "./components/Home";
import {http} from "./components/APIRequests/http"
import {CourseItem} from "./components/CourseItem";

jest.mock(http);

const functions = require('./functions');

test('add', () => {
    expect(functions.add(2, 2)).toBe(4)
});

test('renders correct content', () => {
    const {getByText, getByTestId} = render(<Home/>);

    getByTestId("loading")
})

test('sending message', () => {
    const {getByTestId} = render(<Chat/>)
    
    const btn = getByTestId("button1")
    const inpMessage = getByTestId("message")

    fireEvent.change(inpMessage, {target: {value: "message"}})

    fireEvent.click(btn)


})


test('validation', () => {

    const {getByTestId} = render(<Register/>)

    // const inpMessage = getByTestId("message");
    

})

// test('validation', () => {
//     const {getByTestId} = render(<Login/>)
    
//     const btn = getByTestId("loginButton")
//     const inpEmail = getByTestId("email")
//     const inpPassword = getByTestId("password")

//     fireEvent.change(inpEmail, {target: {value: "user"}})
//     fireEvent.change(inpPassword, {target: {value: "password"}})

//     fireEvent.click(btn)

// })


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