const sendMessage = (message, user) => {
    const message = user + "send" + message;
    return {message}
};

exports.sendMessage = sendMessage;