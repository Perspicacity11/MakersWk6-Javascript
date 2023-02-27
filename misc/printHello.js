const printHello = () => {
    console.log('Hello');
};

const executeAfterDelay = (time, helloFunction) => {
    setTimeout(printHello, time * 1000);
}


executeAfterDelay(5, printHello)

