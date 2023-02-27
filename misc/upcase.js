const uppercaseMessage = (message) => {
    return message.toUpperCase();
}

const transform = (message, transformFunction) => {
    return transformFunction(message);
}

console.log(transform("hello", uppercaseMessage));

module.exports = transform;
module.exports = uppercaseMessage;