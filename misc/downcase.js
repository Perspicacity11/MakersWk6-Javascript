const lowercaseMessage = (message) => {
    return message.toLowerCase();
}

const transform = (message, transformFunction) => {
    return transformFunction(message);
}

// console.log(transform('Hi there', lowercaseMessage));

module.exports = transform;
module.exports = lowercaseMessage;