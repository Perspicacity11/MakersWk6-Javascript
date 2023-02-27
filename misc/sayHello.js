const sayHello = () => {
    return 'Hello';
};

module.exports = sayHello;



const helloName = (name) => {
    return 'Hello ' + name;
};

module.exports = helloName;

const anotherHelloName = (name) => {
    return `Hello ${name}`
};

// String interpolation using backticks (` as opposed to ') and the bash key $

module.exports = anotherHelloName