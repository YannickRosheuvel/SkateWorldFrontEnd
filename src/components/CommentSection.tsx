import React, { useEffect, useState } from 'react';
import * as signalR from '@microsoft/signalr';

// export class CommentSection extends Component {
//     static displayName = CommentSection.name;


    const CommentSection: React.FC = () =>{


        const hubConnection = new signalR.HubConnectionBuilder().withUrl("https://localhost:44366/comment").build();

        hubConnection.start();

        var list: string[] = [];

        interface MessageProps{
            HubConnection: signalR.HubConnection
        }
        
        const Messages: React.FC<MessageProps> = (messageProps) => {

            const [date, setDate] = useState<Date>();

            useEffect(() => {
            messageProps.HubConnection.on("SendToReact", message => {
                list.push(message);
                setDate(new Date());
            })
            }, []);
        return <>{list.map((message, index) => <p key={`message${index}`}>{message}</p>)}</>
    };

    return <Messages HubConnection={hubConnection}></Messages>
    }
    export default CommentSection;