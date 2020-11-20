
import {fireEvent, getByText, render} from "@testing-library/react";
import * as react from "react";
import ChatWindow from "./components/ChatWindow";
import Chat from "./components/Chat";
import { CourseDetails } from "./components/CourseDetails";
import {Home} from "./components/Home";

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

    fireEvent.click(btn);
})