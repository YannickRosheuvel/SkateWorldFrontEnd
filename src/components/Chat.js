import React, { useState, useEffect, useRef } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import axios from 'axios';
import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';
import http,{sendMessageApi} from "./APIRequests/http"


const Chat = () => {
    const [ chat, setChat ] = useState([]);
    const latestChat = useRef(null);

    latestChat.current = chat;

    useEffect(() => {
        const connection = new HubConnectionBuilder()
            .withUrl('https://localhost:44366/hubs/comment')
            .withAutomaticReconnect()
            .build();

        connection.start()
            .then(result => {
                console.log('Connected!');

                connection.on('ReceiveMessage', message => {
                    const updatedChat = [...latestChat.current];
                    updatedChat.push(message);
                
                    setChat(updatedChat);
                });
            })
            .catch(e => console.log('Connection failed: ', e));
    }, []);

    const sendMessage = async (message) => {
        const chatMessage = {
            message: message
        };

        try {
            
            sendMessageApi(chatMessage.message);
        }
        catch(e) {
            console.log('Sending message failed.', e);
        }
    }

    return (
        <div>
            <ChatInput sendMessage={sendMessage} />
            <hr />
            <ChatWindow chat={chat}/>
        </div>
    );
};

export default Chat;