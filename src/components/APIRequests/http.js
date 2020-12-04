import axios from 'axios';

export function sendMessageApi (message, user) {
    axios.post('https://localhost:44366/api/comment/messages', { message: message, user: user })
    .then(response =>
    {

        console.log(response)
        return response.data;

    });
};

export async function getCourses () {
    const response = await fetch('https://localhost:44355/api/course');
    const data = await response.json();
    return data;
};